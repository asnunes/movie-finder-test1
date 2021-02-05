import axios from 'axios';
import movieSelect from './movie';

export default function selectUpcoming () {
    var requisição = axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=00677d2daa69a1cc4505e8c461dd2031');
    requisição.then(Response);
}

function Response(response){
    //console.log(response.data);
    var { results } = response.data;

    var container = document.querySelector(".pagecontainer");
    container.innerHTML = "";

    results.forEach(filme => {
        var element = document.createElement("img");

        var image = `https://image.tmdb.org/t/p/w200/${filme.poster_path}`;
        element.setAttribute("src", image);

        element.addEventListener('click', ()=> {
            movieSelect(filme)
        });

        container.appendChild(element);
    });
}