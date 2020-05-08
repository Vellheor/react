import React from 'react';

class ProfileInfo extends React.Component{
   
   state = {
      editMode: false
   };
   
   activateEditMode(){
      this.setState({
         editMode: true
      })
   };
   deactivateEditMode(){
      this.setState({
         editMode: false
      })
   };
      
   render(){
      return (
      <div>
         {!this.state.editMode &&
            <div onClick={ this.activateEditMode.bind(this) }>{this.props.status}</div>
         }
         {this.state.editMode &&
            <div><input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/></div>
         }
      </div>
      );
   }
}

export default ProfileInfo;