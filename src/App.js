import './App.css';
import Head from './Components/Head';
import NewTodo from './Components/NewTodo';
import Title from './Components/Title';
import TodoList from './Components/TodoList';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import EditTodo from './Components/EditTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Head/>
      <Title/>
      <TodoList/>
      <NewTodo/>
      <Switch>
        <Route path='/:id'>
          <EditTodo/></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
