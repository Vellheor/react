import React, {useState} from 'react';

const Status = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   let activateEditMode = () => {
         setEditMode(true)
      };
   let deactivateEditMode = () => {
         setEditMode(false);
         props.updateProfileStatus(status)
      };
   let onStatusChange = (e) => {
         setStatus(e.currentTarget.value)
      };

   return (
      <div>
         {!editMode &&
            <div onClick={activateEditMode }>{status}</div>
         }
         {editMode &&
            <div><input type="text" onBlur={deactivateEditMode} onChange={onStatusChange} autoFocus={true} value={status}/></div>
         }
      </div>
      );
}


export default Status;
