import React, {useState, useEffect} from 'react';

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

   useEffect( () =>{
      setStatus(props.status)
   }, [props.status]);
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
