import { GoogleMap, Marker, TrafficLayer, useJsApiLoader } from "@react-google-maps/api";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY ?? '';

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const position = { lat: 42.304709, lng: -71.227946 };
  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  return isLoaded ? (
    <GoogleMap center={position} zoom={11} mapContainerStyle={mapStyles} >
      <Marker position={position} />
      <TrafficLayer />
    </GoogleMap>
  ) : <></>;
};

export default Map;