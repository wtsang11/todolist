import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from "@material-ui/core/Checkbox";


function Note(props) {
  const [checked, setChecked] = React.useState(false);

  function handleDelete(){
    props.onDelete(props.id)
  }

  function handleEdit(){
    props.onEdit({id: props.id, title: props.title, content: props.content})
  }

  const handleDoneChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <label>
          <Checkbox
            checked={checked}
            onChange={handleDoneChange}
          />
          <span>Done</span>
      </label>
      <button onClick={handleEdit}><EditIcon/></button>
      <button onClick={handleDelete}><DeleteIcon/></button>
    </div>
  )
}

export default Note
