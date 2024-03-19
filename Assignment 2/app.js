
const url="https://api.giphy.com/v1/gifs/search?api_key=tod4to7L1tkCbruT8wPCgKMxRzDrP58b&q=animals&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
const giphy=async()=>{
    let sticker=await fetch(url);
    const data = await sticker.json();
    console.log(data);
};