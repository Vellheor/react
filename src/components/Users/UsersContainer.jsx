import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTatolUsersCount, setIsFetching } from '../../redux/users-reducer';
import * as Axios from 'axios';
import Loader from '../common/Loader/Loader';



class UsersApiComponent extends React.Component{
   componentDidMount(){
      this.props.setIsFetching(true);
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
         withCredentials: true
      }).then(response => {
         this.props.setIsFetching(false);
         this.props.setUsers(response.data.items);
         this.props.setTatolUsersCount(response.data.totalCount);
      });
   }
   onPageChanged = (pageNumber) => {
      this.props.setIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
         withCredentials: true
      }).then(response => {
         this.props.setIsFetching(false);
         this.props.setUsers(response.data.items)
      });
   }
   render(){
    return <>
      {this.props.isFetching ? <Loader /> : null}
      <Users 
      tatolUsersCount = {this.props.tatolUsersCount}
      pageSize = {this.props.pageSize}
      currentPage = {this.props.currentPage}
      onPageChanged = {this.onPageChanged}
      users = {this.props.users}
      unfollow = {this.props.unfollow}
      follow = {this.props.follow}
      />
   </>
   }
}




let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      tatolUsersCount: state.usersPage.tatolUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId));
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId));
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users));
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPageAC(pageNumber));
//       },
//       setTatolUsersCount: (tatolUsersCount) => {
//          dispatch(setTatolUsersCountAC(tatolUsersCount));
//       },
//       setIsFetching: (isFetching) => {
//          dispatch(setIsFetchingAC(isFetching));
//       }
//    }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTatolUsersCount, setIsFetching})(UsersApiComponent);