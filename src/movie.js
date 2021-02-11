export default function movieSelect (filme){
    console.log(filme);
    var templete = `
        <div class="movieselct">
        <img class="image" src = "https://image.tmdb.org/t/p/w200/${filme.poster_path}">
        <div class="sinopse">
                <header>
                    <h1>${filme.title}</h1>
                </header>
                <p>${filme.overview}</p>
        </div>
    </div>
    `;

    var container = document.querySelector(".pagecontainer")
    container.innerHTML = templete;
};