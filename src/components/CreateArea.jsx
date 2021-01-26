import React, { useState } from "react";

function CreateArea(props) {//we pass properties and their values to CreateAre component

    //useState is React function. it returns Initial Value and function that updates initial value
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

//it passes object. object corresponds to event that triggered onChange, input is event
    function handleChange(event){//it will get event
        //destructure event
        const {name, value} = event.target;//it will save name of input and value of it
        setNote(function(prevNote){//we get access to previous note
          //console.log(prevNote); it returns previous note object values
          return {//this function sets value of note
            ...prevNote,//return object with previous note
            [name]: value//actual value of key(its 'title' or 'content') equal to new value that user typed
            //to that input 
          }
        })

    }


    function submitNote(event){//when submit button is clicked, it will pass all data associated with
      //that click event
      props.onAdd(note);//call function that was passed to this CreateAre component. it will be called
      //in App.js component. And we pass to it note object

      event.preventDefault();//to prevent refreshing of all screen. to prevent default beharious.
      //becouse when submit it will reload whole page
    }
    return (
    <div>
      <form>
      {/* each time you write in input it calls function handleChange */}
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;