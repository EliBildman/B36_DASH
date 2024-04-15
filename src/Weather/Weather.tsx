import { Board, BoardProps } from "../types";
import { useEffect, useState } from "react";
import "./styles.css";
import { WeatherApiResponse, WeatherData } from "./types";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import SideStat from "./components/SideStat";
import Temp from "./components/Temp";
import { getBackgroundGif } from "./gifs";

const weatherApiUrl =
  `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}`;

const Weather: Board = (props: BoardProps) => {
  const { isActive, requestDisplay } = props;
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);
  const [time, setTime] = useState<Date>(new Date());
  const [backgroundGif, setBackgroundGif] = useState<string>("");

  const getWeatherData = () => {
    fetch(weatherApiUrl)
      .then((response) => {
        if (!response.ok) throw "Bad response";
        return response.json();
      })
      .then((json: WeatherApiResponse) => {
        setWeather(json.current);
      });
  };

  useEffect(() => {
    if (!isActive) return;
    getWeatherData();
    const intId = setInterval(() => {
      getWeatherData(); // refresh every 10 mins
      return () => {
        clearInterval(intId);
      };
    }, 10 * 60 * 1000);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    setInterval(() => {
      setTime(new Date()); // update time
    });
  }, [isActive]);

  useEffect(() => {
    if (!isActive || !weather) return;

    getBackgroundGif(weather.condition.text).then((url) => {
      setBackgroundGif(url);
    });
  }, [weather]);

  if (!isActive) {
    return <div className="background">sleeper mode</div>;
  }

  if (weather === undefined) {
    return <div className="background">waiting on data...</div>;
  }

  return (
    <div
      className="background"
      style={{ backgroundImage: backgroundGif }}
    >
      <Grid container className="tri-columns-container">
        <Grid xs={3} className="tri-column">
          <Grid container direction="column">
            <Grid>
              <Container className="panel side-info">
                {time.toLocaleTimeString()}
              </Container>
            </Grid>
            <Grid>
              <Container className="panel side-info">
                {time.toDateString()}
              </Container>
            </Grid>
            <Grid>
              <Container className="panel side-info">Needham, MA</Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} className="tri-column">
          <Temp temp={weather.temp_f} summary={weather.condition.text} />
        </Grid>
        <Grid container xs={3} className="tri-column" direction="column">
          <SideStat
            label="Feels like"
            value={weather.feelslike_f}
            unit="°"
            nospace
          />
          <SideStat label="Wind" value={weather.wind_mph} unit="mph" />
          <SideStat
            label="Humidity"
            value={weather.humidity}
            unit="%"
            nospace
          />
          <SideStat label="Precipitation" value={weather.precip_in} unit="in" />
          <SideStat label="UV" value={weather.uv} unit="rays" />
          <SideStat
            label="Cloud cover"
            value={weather.cloud}
            unit="%"
            nospace
          />
          <SideStat label="Pressure" value={weather.pressure_in} unit="in" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Weather;
