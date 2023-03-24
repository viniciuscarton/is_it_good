
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const movieName = document.querySelector('#search').value;
    const apiUrl = `http://www.omdbapi.com/?apikey=[your_key]&t=${encodeURIComponent(movieName)}&tomatoes=true`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const poster = data.Poster
            const title = data.Title;
            const year = data.Year;
            const genre = data.Genre;
            const rated = data.Rated;
            const runtime = data.Runtime;
            const director = data.Director;
            const actors = data.Actors;
            const plot = data.Plot;
            const metascore = data.Metascore
            const imdb = data.imdbRating
            const tomato = data.Ratings.find(rating => rating.Source === 'Rotten Tomatoes');
            const tomatoValue = tomato ? tomato.Value : 'N/A'
            console.log(data)

            const movieData = {
                poster,
                title,
                year,
                genre,
                rated,
                runtime,
                director,
                actors,
                plot,
                metascore,
                imdb,
                tomatoValue

            };

            localStorage.setItem('movieData', JSON.stringify(movieData));

            window.location.href = 'movie.html';
        })
        .catch(error => console.log(error));
});

