import './App.css';
import Apicall from './api/Apicall';
import Loader from './loder/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {

  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        setdata(response.data.results);
        setisLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setisLoading(false)
      })

  }, [])

  return (
    <>


      {
        isLoading ? <Loader /> : <Apicall data1={data} />
      }
    </>
  );
}

export default App;
