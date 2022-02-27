import "./App.css";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="Todo-list-container">
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header></Header>
            <TodoList></TodoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
