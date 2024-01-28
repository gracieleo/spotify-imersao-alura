/* document = HTML */
const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

/* consumir a API */
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`    
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");
  
    result.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    
    resultArtist.classList.remove("hidden");
}
/* fim consumo API */


/* manipular eventos */
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        /* Quando o campo de buscar ficar vazio, queremos mostrar as playlists de volta (remover o hidden de resultPlaylist) e esconder o resultado de artistas (adicionar o hidden em resultArtist).*/
        resultPlaylist.classList.remove('hidden'); 
        resultArtist.classList.add('hidden');
        return;
    }
    requestApi(searchTerm);
});