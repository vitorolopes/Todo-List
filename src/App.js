import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="app__todoApp">
        <Header/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
