
const api_key = process.env.REACT_APP_GIPHY_API_KEY;

export const getBackgroundGif = async (description: string) => {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${description}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
  const json = await res.json();
  
  const choices = json['data'];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]

  if (!randomChoice) return "";

  const url = randomChoice['images']['original']['url'];

  // const url = "https://media3.giphy.com/media/DD4FroTT30PeSamZbG/giphy.gif?cid=65995425bsrm06kdawsl71rzmlp2cyvex3alm43uekj1k0bu&ep=v1_gifs_search&rid=giphy.gif&ct=g"

  return `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('${url}')`;
}
