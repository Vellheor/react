import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTatolUsersCountAC } from '../../redux/users-reducer';
import Axios from 'axios';


class UsersApiComponent extends React.Component{
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
    return <Users 
    tatolUsersCount = {this.props.tatolUsersCount}
    pageSize = {this.props.pageSize}
    currentPage = {this.props.currentPage}
    onPageChanged = {this.onPageChanged}
    users = {this.props.users}
    unfollow = {this.props.unfollow}
    follow = {this.props.follow}
    />
   }
}




let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      tatolUsersCount: state.usersPage.tatolUsersCount,
      currentPage: state.usersPage.currentPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber));
      },
      setTatolUsersCount: (tatolUsersCount) => {
         dispatch(setTatolUsersCountAC(tatolUsersCount));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);