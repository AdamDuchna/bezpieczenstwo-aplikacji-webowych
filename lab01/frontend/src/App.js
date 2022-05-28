import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PostForm from './PostForm';
import List from './List';
import Error from './Error';

function App() {
  const [token,setToken] = useState('')
  const [error,setError] = useState(undefined)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm setToken={setToken}/>}/>
        <Route exact path="/post" element={<PostForm token={token} setError={setError} />}/>
        <Route exact path="/list" element={<List token={token} setError={setError} />}/>
        <Route exact path="/error" element={<Error error={error} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
