import { Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { MovieList } from "./components/movie-list/MovieList";
import { SearchForm } from "./components/search-form/SearchForm";
import { Title } from "./components/title/Title";
import { fetchMovie } from "./helper/axiosHelper";

function App() {
  // 3. Creating a function to fetch the data from the API
  const getMovie = async (search) => {
    // console.log(search);

    const movie = await fetchMovie(search);

    console.log(movie.data);
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />

        <SearchForm getMovie={getMovie} />

        <CustomCard />
        <hr />

        <MovieList />
      </Container>
    </div>
  );
}

export default App;
