import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Images from './components/Images';

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(function (response) {
        setLoader(false)
        setImages(response.data);

      }).then(() => {
        setLoader(true)
      })
      .catch(function (error) {
        setLoader(true)
        console.log(error);

      });
  }, []);

  return (
    <>

      {loader ?
        <div className='container mt-2'>
          <Images data={images} />
        </div>
        :
        <div className='loader d-flex align-items-center justify-content-center'><div class="lds-hourglass"></div></div>
      }
    </>

  );
}

export default App;
