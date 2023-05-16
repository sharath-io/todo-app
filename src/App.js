import {Route,Routes} from 'react-router-dom';
import './App.css';

import {Home} from './pages/home';
import {Done} from './pages/done';
import {NotDone} from './pages/notDone';
import {Header} from './components/header';


function App() {
  return (
    <div className="App">
     <h1>React App</h1>

    <Header/>
     <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/done" element={<Done/>} />
      <Route path="/notDone" element={<NotDone/>} />
     </Routes>
    </div>
  );
}

export default App;
