import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tributton from './Tributton';
import Rightbutton from './Rightbutton';
import Card from './Card';
import Tabbar from './Tabbar';
import Footer from './Footer';
import Showmapbut from './Showmapbut';
import Showmore from './Showmore';
import Carouselbut from './Carouselbut';
import Copyright from './Copyright';



const tributton = ReactDOM.createRoot(document.getElementById('tributton'));
tributton.render(
  <React.StrictMode>
    <Tributton />
  </React.StrictMode>
);

const rightbutton = ReactDOM.createRoot(document.getElementById('rightbutton'));
rightbutton.render(
  <React.StrictMode>
    <Rightbutton />
  </React.StrictMode>
);

const card = ReactDOM.createRoot(document.getElementById('card'));
card.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

const tabbar = ReactDOM.createRoot(document.getElementById('tabbar'));
tabbar.render(
  <React.StrictMode>
    <Tabbar />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

const showmapbut = ReactDOM.createRoot(document.getElementById('showmapbut'));
showmapbut.render(
  <React.StrictMode>
    <Showmapbut />
  </React.StrictMode>
);

const showmore = ReactDOM.createRoot(document.getElementById('showmore'));
showmore.render(
  <React.StrictMode>
    <Showmore />
  </React.StrictMode>
);

const carouselbut = ReactDOM.createRoot(document.getElementById('carouselbut'));
carouselbut.render(
  <React.StrictMode>
    <Carouselbut />
  </React.StrictMode>
);

const copyright = ReactDOM.createRoot(document.getElementById('copyright'));
copyright.render(
  <React.StrictMode>
    <Copyright />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
