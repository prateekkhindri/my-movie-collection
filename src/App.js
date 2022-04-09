import { Container } from "react-bootstrap";
import "./App.css";
import { SearchForm } from "./components/search-form/SearchForm";
import { Title } from "./components/title/Title";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Title />

        <SearchForm />
        <hr />
      </Container>
    </div>
  );
}

export default App;
