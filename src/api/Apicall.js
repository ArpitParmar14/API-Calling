import { useEffect, useState } from 'react';
import axios from 'axios'

import './Apicall.css'

function Apicall(props) {
  let col;
  return (
    <>

      <h1 className='titel'>The Rick and Morty API</h1>
      <div className="row">
        <div className='col'>
          {
            props.data1.map((ele) => {
              if (ele.status === 'Alive') {
                col = 'green'
              }
              if (ele.status === 'Dead') {
                col = 'red'
              }
              if (ele.status === 'unknown') {
                col = 'yellow'
              }
              return (
                <>
                  <div className="colinner">
                    <img src={ele.image} alt="" />
                    <div className="i-info">
                      <h1>{ele.name}</h1>
                      <div className="d-flex">
                        <h3><div className='line' style={{ backgroundColor: col }}></div>{ele.status} - </h3>
                        <h3>{ele.species}</h3>
                      </div>
                      <p>Last known location: <h4>{ele.origin.name}</h4></p>
                      <p>First seen in: <h4>{ele.origin.name}</h4></p>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>


    </>
  );
}

export default Apicall;
