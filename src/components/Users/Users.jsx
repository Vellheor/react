import React from 'react';
import style from './users.module.css';
import * as Axios from 'axios';
import noPhoto from '../../assets/img/user.png';


class Users extends React.Component{
   
   componentDidMount(){
      Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         this.props.setUsers(response.data.items)
      });
   }

   render(){
      return (
         <div>
            {
               this.props.users.map( u => <div key={u.id} className={style.grid_4}>
                  <div>
                     <div>
                        <img src={u.photos.small != null ? u.photos.small : noPhoto} className={style.photoUrl}/>
                     </div>
                     <div>
                        {
                           u.followed 
                              ? <button onClick={ () => { this.props.unfollow(u.id) } }>Unfollow</button> 
                              : <button onClick={ () => { this.props.follow(u.id) } }>Follow</button>
                        }
                     </div>
                  </div>
                  <div className={style.grid_3}>
                     <div><p>{u.name}</p><p>{u.status}</p></div>
                     <div><p>{"u.location.country"}</p><p>{"u.location.city"}</p></div>
                  </div>
               </div>)
            }
         </div>
         )
   }
}

export default Users;