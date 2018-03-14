import React from 'react';
import {Link} from 'react-router-dom';
export default class Person extends React.Component {
 render () {
   return (
     <div>
       Person
       <Link to="/">
        <button>Go Home</button>
       </Link>
     </div>
   )
 }
}