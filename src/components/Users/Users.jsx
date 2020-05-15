import React from 'react';
import style from './users.module.css';
import noPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';
import Pagination from '../common/Pagination/Pagination';


let Users = (props) => {
   return(
      <div>
         <Pagination tatolItemsCount={props.tatolUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
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
                           ? <button disabled={props.followingProgress.some( id => id === u.id )} onClick={ () => {
                                 props.unfollow(u.id)
                              } 
                           }>Unfollow</button> 
                           : <button disabled={props.followingProgress.some( id => id === u.id )} onClick={ () => {
                                 props.follow(u.id)
                              }
                           }>Follow</button>
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