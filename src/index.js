import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*
function Test(){
  const [movieRating, setMovieRating] =useState(0)
  return (
    <div>
      <StartRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
      <p>This movie was rated {movieRating} starts</p>
    </div>
  )
}
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


