import React, { useState } from 'react';//import react module to use JSX code
import Header from './Header.jsx';//import Header component that was exported in Header.ejx
import Footer from './Footer.jsx';//import Footer component that was exported in Footer.ejx
import Note from './Note.jsx';//import Note component that was exported in Note.ejx
import notes from '../notes.js';//import notes array that was exported in notes.js\
import CreateArea from "./CreateArea";


//create App component as function. Using components that we imported
function App(){
    const [notes, setNotes] = useState([]);//use state is React function, it returns Initial value, and
    //function to update Initial value. it will update state of notes. Initial value by default is empty array

    function addNote(note){//function will receive note object
        console.log(note);//we passed note object to this function. when clicked submit.
        //we passed function to CreateArea.jsx from here. and it can be called from that component

        setNotes(function(prevNotes){//update notes array. we can also get previous value of notes array
            return [...prevNotes, note];//return array. put there prevNotes, and note that is created(passed to this function)
        })
    }


    function deleteNote(id){//function will receive id when called
        console.log(id);
        setNotes(function(prevNotes){//update notes array. we also get hold of prevNotes
            return prevNotes.filter(function(noteItem, index){//loop through prevNotes. filter can take up to 3 arguments
        //first is value that we currently looping through in array, and second is index of that item
                return index != id;//return only those notes which index != to id of item we want to delete
                //it will update our notes array
            })
        })
    }

    
    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map(function(noteItem, index){
            //map function will loop through array of notes(objects). get hold of each of noteItem,
            //and we can hold of index of noteItem thats beeing looped through in notes array
            return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
            //create Note component. pass propertys and their values. pass deleteNote function.
        })}
        <Footer />
    </div>
}


export default App;//export App function(component) so others can use it