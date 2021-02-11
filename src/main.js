import loadPopular from './popular';
import selectNowPlaying from './now_playing';
import selectTopRated from './top_rated';
import selectUpcoming from './upcoming';

var popular = document.getElementById("popular");
var nowplaying = document.getElementById("nowplaying");
var toprated = document.getElementById("toprated");
var upcoming = document.getElementById("upcoming");

popular.addEventListener('click', loadPopular);
nowplaying.addEventListener('click', selectNowPlaying);
toprated.addEventListener('click', selectTopRated);
upcoming.addEventListener('click', selectUpcoming);

loadPopular();