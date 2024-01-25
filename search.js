/* document = HTML */
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

/* consumir a API */
function requestApi(searchTerm) {
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)   /* endereço da API que vai consumir*/
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
    hidePlaylists();
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");
  
    results.forEach((element) => {
      artistImage.src = element.urlImg;
      artistName.innerText = element.name;
    });
    resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
    playlistContainer.classList.add("hidden");
}
/* fim consumo API */

/* manipular eventos */
document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
});