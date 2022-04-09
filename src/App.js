import { Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { MovieList } from "./components/movie-list/MovieList";
import { SearchForm } from "./components/search-form/SearchForm";
import { Title } from "./components/title/Title";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Title />

        <SearchForm />

        <CustomCard />
        <hr />

        <MovieList />
      </Container>
    </div>
  );
}

export default App;
