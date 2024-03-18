import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
//import.meta.env.REACT_NEWS_API_KEY;
import './App.css';
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';
import React, {useState} from 'react';
import LoadingBar from 'react-top-loading-bar';

import 
    {BrowserRouter as Router,
    Routes,
    Route
    } from 'react-router-dom';

 const App =() =>{  

  const [progress,SetProgress] = useState(0);

  const apiKey = '022a98adfbf14310a2c6c964cd14cb1c';
  const setProgress=(progress)=>{
    SetProgress(progress)
  }
  return (
    <>
    <Router>
      <Navbar /> 
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container">
        <Routes>
          <Route exact path="/index.html" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={8} country="in" category="general"/>}></Route>

          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={8} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={8} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={8} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={8} country="in" category="science"/>}> </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={8} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={8} country="in" category="technology"/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
    
  )
}
export default App;