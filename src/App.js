import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import {increaseAction, decreeseAction } from './store/counterReducer';
import {getUsers} from './async/users';
import {getTodos, deleteTodo} from './async/todos';


function App() {

const dispatch = useDispatch();
const counter = useSelector((state) => state.counter.counter);
const users = useSelector((state) => state.users.users);
const todos = useSelector(state => state.todos.todos);


const increment = (counter) => {
  dispatch(increaseAction(counter))
}

const decrement = (counter) => {
  dispatch(decreeseAction(counter))
}

  return (
    <div className="App">
     <div>Counter is: {counter}</div>
      <button onClick={() => increment(counter)}>Increese</button>
      <button onClick={() => decrement(counter)}>Decreese</button>
      <button onClick={() => dispatch(getUsers())}>Get users from data base</button>
      <button onClick={() => dispatch(getTodos())}>Get TODOs from DB</button>

      {users.length !== 0 ?
      users.map(user => <div>{user.name}</div>) 
     :
      <div>No users </div>}




      { todos.length !== 0 ?
      todos.map(todo => (<div>{todo.title} {todo.completed ? 'completed' : 
        (<button onClick={(e) => dispatch(deleteTodo(e.target))}>finish</button>)}</div>))
        :
        <div>No todos</div>
      }
    </div>
  );
}

export default App;
