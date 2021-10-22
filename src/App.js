import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import {getTodos, deleteTodo} from './async/todos';
import { asyncIncreaseAction, asyncDecreeeseAction } from './store/counterReducer';
import {asyncUsersAddAction} from './store/usersReducer';


function App() {

const dispatch = useDispatch();
const counter = useSelector((state) => state.counter.counter);
const users = useSelector((state) => state.users.users);
const todos = useSelector(state => state.todos.todos);

  return (
    <div className="App">
     <div>Counter is: {counter}</div>
      <button onClick={() => dispatch(asyncIncreaseAction())}>Increese</button>
      <button onClick={() => dispatch(asyncDecreeeseAction())}>Decreese</button>
      <button onClick={() => dispatch(asyncUsersAddAction())}>Get users from data base</button>
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
