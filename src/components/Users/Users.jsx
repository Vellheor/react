import React from 'react';
import style from './users.module.css';
import * as Axios from 'axios';
import noPhoto from '../../assets/img/user.png';

let Users = (props) => {
   
   let getUsers = () => {
      if(props.users.length === 0){
         Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
         });
      }
   }

      // props.setUsers([
      //    {id:1, photoUrl: "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png", followed: false, fullName: "Dmitry", status: "I am a manager", location: {city: 'Minsk', country: 'Belarus'}},
      //    {id:2, photoUrl: "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png", followed: true, fullName: "Alex", status: "I am a boss", location: {city: 'Toronto', country: 'Kanada'}},
      //    {id:3, photoUrl: "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png", followed: true, fullName: "Vera", status: "I am a wife", location: {city: 'Kiev', country: 'Ukraine'}},
      //    {id:4, photoUrl: "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png", followed: false, fullName: "Kusha", status: "I am a paradaise", location: {city: 'Borodyanka', country: 'Ukraine'}}
      // ])
   
   return (
   <div>
      <button onClick={getUsers}>Get Users</button>
      {
         props.users.map( u => <div key={u.id} className={style.grid_4}>
            <div>
               <div>
                  <img src={u.photos.small != null ? u.photos.small : noPhoto} className={style.photoUrl}/>
               </div>
               <div>
                  {
                     u.followed 
                        ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                        : <button onClick={ () => { props.follow(u.id) } }>Follow</button>
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

export default Users;