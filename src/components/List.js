import './List.css';
import logo2AfpCapital from './logo2AfpCapital.svg'
import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

// rick y morty api: https://rickandmortyapi.com/api/character (data.results) (v.name)(v.gender)
// api a utilizar: https://jobs.github.com/positions.json?description=api (v.title)(v.company)
// api de ejemplo: https://jsonplaceholder.typicode.com/users
const List = (props) => {

const [values, setValues] = useState([]);

useEffect(() => {
  axios.get("/positions.json?description=api")
  .then(res => {
       const theData = res.data;
       setValues(theData);
  });
},[]);

    return (
      <div className="data-container">
        <img src={logo2AfpCapital} alt="logo2" className="white-logo"/>
        
          {values.map((item) =>
            <div className="list-container" key={item.id}>
              <p>Title: <span>{item.title}</span></p>
              <p>Company: <span>{item.company}</span></p>
            </div>)}
      </div>
    );
  }

  export default List;