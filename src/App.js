import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Images from './components/Images';

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(function (response) {
        setImages(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className='container mt-2'>
      <Images data={images} />
    </div>
  );
}

export default App;
