import React from 'react';

//we're not component because we're not creating class here
import classes from './Person.css';


const person = (props) => {
    //const rnd = Math.random();
   /*
    if (rnd > 0.7){
        throw new Error('something went wrong!');            
    }
    */

   /*
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };
    */
    return (


    //<div className="Person" style={style}>
    <div className={classes.Person}>
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old !</p>
    <p>{props.children}</p>
    <input type = "text" onChange={props.changed} value={props.name} />
    </div>
    )
};

export default person;

