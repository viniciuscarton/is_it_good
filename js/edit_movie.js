const savedMovieData = JSON.parse(localStorage.getItem('movieData'));
const poster = savedMovieData.poster
const title = savedMovieData.title;
const year = savedMovieData.year;
const genre = savedMovieData.genre;
const rated = savedMovieData.rated;
const runtime = savedMovieData.runtime;
const director = savedMovieData.director;
const actors = savedMovieData.actors;
const plot = savedMovieData.plot;
const rt = savedMovieData.tomatoValue;
const imdb = savedMovieData.imdb;
const mc = savedMovieData.metascore;

document.querySelector('.movie-poster').src = poster;
document.querySelector('.movie-title').textContent = title;
document.querySelector('.movie-year').textContent = year;
document.querySelector('.movie-genre').textContent = genre;
document.querySelector('.movie-rated').textContent = rated;
document.querySelector('.movie-dur').textContent = runtime;
document.querySelector('.movie-director').textContent = director;
document.querySelector('.movie-actors').textContent = actors;
document.querySelector('.movie-plot').textContent = plot;
document.querySelector('.r').textContent = rt
document.querySelector('.i').textContent = imdb
document.querySelector('.m').textContent = mc

if (rt === 'N/A') {
  score_meu = ((parseFloat(imdb) * 10) + parseInt(mc)) / 2
  document.querySelector('.score').textContent = score_meu.toFixed(0);
}
else if (imdb === 'N/A') {
  score_meu = (parseFloat(rt) + parseInt(mc)) / 2
  document.querySelector('.score').textContent = score_meu.toFixed(0);
}
else if (mc === 'N/A') {
  score_meu = (parseFloat(rt) + (parseFloat(imdb) * 10)) / 2
  document.querySelector('.score').textContent = score_meu.toFixed(0);
}  else {
  score_meu = (parseInt(rt) + (parseFloat(imdb) * 10) + parseInt(mc)) / 3
  document.querySelector('.score').textContent = score_meu.toFixed(0);
}









