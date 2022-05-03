import CreateArea from './components/CreateArea';
import Header from './components/Header'
import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Footer from './components/Footer'
import EditNote from './components/EditNote';


function App() {
  const [notes, setNotes] = useState(JSON.parse(
    localStorage.getItem('todos')) || [])

  const [editingNote, setEditingNote] = useState(false)

  var noteInEdit = { id: 1, title: "test", content: "test content" }

  function editNote(noteItem) {
    // setNoteInEdit(noteInEdit)
    setEditingNote(true)
    console.log(noteItem)
    noteInEdit = noteItem
    console.log(noteInEdit)

  }
  // const [noteInEdit, setNoteInEdit] = useState({
  //   id: "",
  //   title: "",
  //   content: ""
  // })

  useEffect(() => localStorage.setItem('todos', JSON.stringify(notes)), [notes])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return ([...prevNotes, newNote])
    });
    // console.log(notes);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  function cancelEditNote(event) {
    setEditingNote(false)
  }

  function saveNote(event) {
    setEditingNote(false)
    // Save Note
    // see how to update an item in an array using map https://www.delftstack.com/howto/javascript/javascript-update-object-in-array/

  }



  // console.log(editingNote)
  return (
    <div>
      {editingNote ? (<EditNote note={noteInEdit} onCancel={cancelEditNote} onSave={saveNote} />) : null}
      <Header />
      {!editingNote && (<CreateArea onAdd={addNote} />)}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote} />
        )
      })}
      <Footer />
    </div>

  );
}

export default App;
