console.log("Let's get this party started!");


const giphForm = document.getElementById("giphForm");
const giphContainer = document.querySelector("#giphContainer");
const formGroup = document.querySelector(".formGroup")


giphForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const giph = document.getElementById("giph");
    if(giph.value === '') alert("Please enter a giph name into the searchBar")
     getGiph(giph.value);
   giph.value = ''
})

async function getGiph (giphName, limit = 10) {
  try { const api_key = 't1ifkWt7BHmWhARcPRsiunHKrdCRwT4V'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}`
    const res = await axios.get(url, {params: {q:giphName, limit:limit, lang: "en"}})
    const randomIndex = Math.floor(Math.random() * limit)
    let imgUrl = res.data.data[randomIndex].images.original.url
    appendGiphToHtml(imgUrl)
    } catch(err){
        alert('Nothing Found Here Sorry')
        console.log(err);
    }
}

function appendGiphToHtml (imgUrl){
    const img = document.createElement('img')
    img.classList.add('giphy-img')
    img.src = imgUrl
    giphContainer.append(img)
} 

document.querySelector('#resetBtn').addEventListener('click', () =>{
    giphContainer.innerHTML = ''
})