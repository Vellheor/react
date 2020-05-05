import React from 'react';
import style from './users.module.css';
import noPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {

   let pagesCount = Math.ceil( props.tatolUsersCount / props.pageSize );
      let pages = [];
      for(let i = 1; i <= pagesCount; i++){
         pages.push(i);
      }
   return(
      <div>
         
         <div>
            {
               pages.map( p => {
                  return <span className={props.currentPage === p && style.selectPage} onClick={ () => { props.onPageChanged(p); } }>{p}</span>
               })
            }
         </div>
         {
            props.users.map( u => <div key={u.id} className={style.grid_4}>
               <div>
                  <div>
                     <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : noPhoto} className={style.photoUrl}/>
                     </NavLink>
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