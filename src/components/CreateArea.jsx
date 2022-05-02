import React, {useState} from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const [isExpanded, setExpanded] = useState(false)

  function handleChange(event){
    const {name, value} = event.target;
    // console.log(event.target);
    // console.log({[name]: value});
    setNote(prevNote => {
      // console.log(prevNote)
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  // function handleTextareaClick(event){
  //   setExpanded(() =>  {
  //   return true})
  // }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    setExpanded(false)
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input type="text" name="title" value={note.title} onChange={handleChange} placeholder="Note Title" />)}
        {/* rows define the height of the textarea while in css, width is 480 px */}
        <textarea name="content" value={note.content}
        onClick={() => setExpanded(true)} onChange={handleChange} placeholder="Take a note" rows={isExpanded?3:1}></textarea>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  )
}

export default CreateArea
