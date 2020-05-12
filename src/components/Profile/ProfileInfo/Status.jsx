import React from 'react';

class ProfileInfo extends React.Component{
   
   state = {
      editMode: false,
      status: this.props.status
   };
   
   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   };
   deactivateEditMode = () => {
      this.setState({
         editMode: false
      });
      this.props.updateProfileStatus(this.state.status)
   };
   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   };

   componentDidUpdate(prevProps, prevState){
      if(prevProps.status !== this.props.status){
         this.setState({
            status: this.props.status
         })
      }
   }

   render(){
      return (
      <div>
         {!this.state.editMode &&
            <div onClick={ this.activateEditMode }>{this.props.status || "Заглушка"}</div>
         }
         {this.state.editMode &&
            <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/></div>
         }
      </div>
      );
   }
}

export default ProfileInfo;