import { Container } from "react-bootstrap";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container className="mt-5">
      <TodoList />
    </Container>
  );
}

export default App;
