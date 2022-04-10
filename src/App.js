import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { MovieList } from "./components/movie-list/MovieList";
import { SearchForm } from "./components/search-form/SearchForm";
import { Title } from "./components/title/Title";
import { fetchMovie } from "./helper/axiosHelper";
import { randomChar } from "./helper/randomGeneratorHelper";

function App() {
  const [searchedMovie, setSearchMovie] = useState({});

  // 4. Create an array of movie state in app.js
  const [movieList, setMovieList] = useState([]);

  // Passing random text to call the API so every time the page is reloaded we see a random movie
  useEffect(() => {
    // Create a random char
    console.log("useEffect executed....");
    const char = randomChar();
    getMovie(char);
  }, []);

  // 3. Creating a function to fetch the data from the API
  const getMovie = async (search) => {
    // console.log(search);

    const { data } = await fetchMovie(search);
    setSearchMovie(data);
  };

  // 5. Create a function that receive the movie and add to the collections list
  const addToMovieList = (type) => {
    // const mv = { ...searchedMovie, cat: type };
    setMovieList([...movieList, { ...searchedMovie, cat: type }]);

    setSearchMovie({});
  };

  // Deleting a movie when delete is clicked

  const deleteMovie = (imdbID) => {
    if (window.confirm("Are you sure you want to delete this movie ?")) {
      const filteredMovieList = movieList.filter(
        (movie) => movie.imdbID !== imdbID
      );
      setMovieList(filteredMovieList);
    }
  };

  // console.log(movie.data);
  console.log(searchedMovie);

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />

        {searchedMovie?.imdbID && (
          <CustomCard movieObj={searchedMovie} func={addToMovieList} />
        )}

        <hr />
        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
}

export default App;

// Workflow

// 6. Pass the function #3 down to the custom card component and receive as a props
// 7. Invoke the function, #3, trigger on button click and pass the parameter either "happy" or "lazy"
// 8. #2 function will receive the argument happy or lazy and add, now add that to the obj as a new property, ie "category"
// 9. Push the movie object to the collection, #1

// 10. Create a component that will list the movies, reuse the custom card to show the movie in the list
