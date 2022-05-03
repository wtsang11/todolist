import React, {useState} from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab'
import './EditNote.css';

function EditNote(props) {


  const [noteTemp, setNoteTemp] = useState(props.note)
  console.log("EditNote: " + props.note)

  function handleChange(event){
    const {name, value} = event.target;
    // console.log(event.target);
    // console.log({[name]: value});
    setNoteTemp(prevNoteTemp => {
      // console.log(prevNoteTemp)
      return {
        ...prevNoteTemp,
        [name]: value
      }
    })
  }

  function handleCancel(){
    props.onCancel(props.id)
  }

  function handleSave(){
    props.onSave(props.id)
  }
  return (
    <div className="edit-note-wrap">
      <div className="modal-backdrop">
        <div className="modal-body">
          <form className="edit-note">
            <input type="text" name="title" value={noteTemp.title} onChange={handleChange} placeholder="Edit Note Title" />
            <textarea name="content" value={noteTemp.content}
            onChange={handleChange} placeholder="Edit Note" rows="3"></textarea>
            <Fab onClick={handleSave}><SaveIcon/></Fab>
            <Fab onClick={handleCancel}><CancelIcon/></Fab>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditNote
