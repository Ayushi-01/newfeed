import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from "./Components/Dashboard";
import Bookmark from "./Components/Bookmark.jsx"

function App() {
  return (
    <div className="App">
                  <Routes>
            {/* <Switch> */}
            <Route path="" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route  path="/bookmark" element={<Bookmark/>}/>

            {/* </Switch> */}

           
        </Routes>

    </div>
  );
}

export default App;
