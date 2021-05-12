import './List.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

// rick y morty api: https://rickandmortyapi.com/api/character (data.results) (v.name)(v.gender)
// api a utilizar: https://jobs.github.com/positions.json?description=api (v.title)(v.company)
// api de ejemplo: https://jsonplaceholder.typicode.com/users
const List = (props) => {

const [values, setValues] = useState([]);

useEffect(() => {
  axios.get("https://jobs.github.com/positions.json?description=api")
  .then(res => {
       const theData = res.data;
       setValues(theData);
  });
},[]);

    return (
      <div className="data-container">
        <h2>List page</h2>
        
          {values.map((item) => <div className="list-container" key={item.id}><p>Title: {item.title} </p><p>Company: {item.company}</p> </div>)}
      </div>
    );
  }

  export default List;