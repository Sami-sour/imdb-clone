import './App.css';
import MovieCard from './MovieCard';
import movie1 from "./assets/The-dark-kignt.jpg";
import movie2 from "./assets/Inception.jpg";
import movie3 from "./assets/interstellar.jpg";
import movie4 from "./assets/Avengers-Endgame-Movie-Poster.avif";
import movie5 from "./assets/Titanic.jpg";
import movie6 from "./assets/Joker.jpg";
import movie7 from "./assets/The-lion-king.jpg";
import movie8 from "./assets/the-doctor-stange.jpg";



function App() {
  
    const movies = [
        {
            id: 1,
            title: "The Dark Knight",
            year: 2010,
            rating: 9.0,
            poster: movie1
        },
        {
            id: 2,
            title: "Inception",
            year: 2010,
            rating: 8.8,
            poster: movie2

        },
        {
            id: 3,
            title: "Interstellar",
            year: 2014,
            rating: 8.6,
            poster: movie3

        },
        {
            id: 4,
           title: "Avengers: Endgame",
           year: 2019,
           rating: 8.4,
           poster: movie4

        },
        {
            id: 5,
            title: "Titanic",
            year: 1997,
            rating: 7.9,
            poster: movie5

        },
        {
            id: 6,
            title: "Joker",
            year: 2019,
            rating: 8.4,
            poster: movie6

        },
        {
            id: 7,
            title: "The Lion King",
            year: 1994,
            rating: 8.5,
            poster: movie7

        },
        {
            id: 8,
            title: "Doctor Strange",
            year: 2016,
            rating: 7.5,
            poster: movie8

        }

    ]

      return <div>
              <div>
                  <div className='text-center text-3xl mt-5 font-bold'> 🎬 Movie Stopper</div>
              </div>
      
              <div className="m-7 flex flex-wrap gap-6 justify-center">
              {movies.map((movie) => (
                   <MovieCard key={movie.id} movie={movie} />
               ))}
              </div>
          </div>
}

export default App;