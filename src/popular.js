import axios from 'axios';
import movieSelect from './movie';

export default function loadPopular () {
    var requisição = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=00677d2daa69a1cc4505e8c461dd2031');
    requisição.then(popularesResponse);
}

function popularesResponse(response){
    //console.log(response.data);
    var { results } = response.data;

    var container = document.querySelector(".pagecontainer");
    container.innerHTML = "";

    for (var i = 0; i < results.length; i++){
        var element = document.createElement("img");

        var image = `https://image.tmdb.org/t/p/w200/${results[i].poster_path}`;
        element.setAttribute("src", image);

        element.addEventListener('click', movieSelect);

        container.appendChild(element);
    }
}