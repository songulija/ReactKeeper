import React from 'react';//import react module to use JSX code

//create Note component as function
function Note(props){
    //we can pass propertys with values attached to them to this Note component.
    //we can access it through props. 

    function handleClick(){
        //call props onDelete function and pass props.id to that function in
        props.onDelete(props.id);
    }

    return <div className="note">
       <h1>{props.title}</h1>
       <p>{props.content}</p>
       <button onClick={handleClick}>DELETE</button>
    </div>
    //use {} to write some JS code inside html
}

export default Note;//export Note function(component) to use in other files