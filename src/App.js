import {Route,Routes} from 'react-router-dom';
import './App.css';

import {Home} from './pages/home';
import {Done} from './pages/done';
import {NotDone} from './pages/notDone';
import {Header} from './components/header';
import { UpdateTodos } from './pages/updateTodos';


function App() {
  return (
    <div className="App">
     <h1>React App</h1>

    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/done" element={<Done/>} />
      <Route path="/notDone" element={<NotDone/>} />
      <Route path="/update" element={<UpdateTodos/>} />

     </Routes>
    </div>
  );
}

export default App;
