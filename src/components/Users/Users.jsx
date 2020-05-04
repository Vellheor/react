import React from 'react';
import style from './users.module.css';
import * as Axios from 'axios';
import noPhoto from '../../assets/img/user.png';


class Users extends React.Component{
   componentDidMount(){
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         this.props.setTatolUsersCount(response.data.totalCount);
      });
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      });
   }
   render(){

      let pagesCount = Math.ceil( this.props.tatolUsersCount / this.props.pageSize );
      let pages = [];
      for(let i = 1; i <= pagesCount; i++){
         pages.push(i);
      }
      return (
         <div>
            
            <div>
               {
                  pages.map( p => {
                     return <span className={this.props.currentPage === p && style.selectPage} onClick={ () => { this.onPageChanged(p); } }>{p}</span>
                  })
               }
            </div>
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