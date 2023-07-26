const AccessKey = '5n56KoEM_d9orFEHecTtsRx3_KnndeC7V0xPBVwck5Q';

const ele = document.querySelector('form');
const inele = document.getElementById('searchele');
const searchimg = document.querySelector('.search-img');
const explore = document.getElementById('Ex-plore');

let inputD = ""
let page = 1;

async function imgsearch(){
    inputD = inele.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputD}&client_id=${AccessKey}`

    const response = await fetch(url)
    const  data = await response.json()

    const results = data.results 
    if(page === 1){
        searchimg.innerHTML = ""
    }
    results.map((result)=>{
       const imagewrap = document.createElement('div')
       imagewrap.classList.add("search-res")
       const image = document.createElement('img')
       image.src = result.urls.small
       image.alt = result.alt_description
       const imglink = document.createElement('a');
       imglink.href = result.links.html
       imglink.target = "_blank"
       imglink.textContent = result.alt_description

       imagewrap.appendChild(image)
       imagewrap.appendChild(imglink)
       searchimg.appendChild(imagewrap)

    });
    page++
    if(page>1){
        explore.style.display = "block";
    }
}
ele.addEventListener("submit",(event) =>{
    event.preventDefault()
    page=1;
    imgsearch()
})
explore.addEventListener("click",(event) =>{
    imgsearch()
})