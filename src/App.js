import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import {increaseAction, decreeseAction } from './store/counterReducer';
import {getUsers} from './async/users'


function App() {

const dispatch = useDispatch();
const counter = useSelector((state) => state.counter.counter);
const users = useSelector((state) => state.users.users)


const increment = (counter) => {
  dispatch(increaseAction(counter))
}

const decrement = (counter) => {
  dispatch(decreeseAction(counter))
}

const addUsers = () => {
  return dispatch(

  )
}

  return (
    <div className="App">
     <div>Counter is: {counter}</div>
     {users.length !== 0 ?
     users.map(user => <div>{user.name}</div>) : <div>No users </div>}
      <button onClick={() => increment(counter)}>Increese</button>
      <button onClick={() => decrement(counter)}>Decreese</button>
      <button onClick={() => dispatch(getUsers())}>Get users from data base</button>
    </div>
  );
}

export default App;
