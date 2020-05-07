import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTatolUsersCount, setIsFetching } from '../../redux/users-reducer';
import Loader from '../common/Loader/Loader';
import {userAPI} from '../../api/api';



class UsersApiComponent extends React.Component{
   componentDidMount(){
      this.props.setIsFetching(true);
      userAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
         this.props.setIsFetching(false);
         this.props.setUsers(data.items);
         this.props.setTatolUsersCount(data.totalCount);
      });
   }
   onPageChanged = (pageNumber) => {
      this.props.setIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      userAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
         this.props.setIsFetching(false);
         this.props.setUsers(data.items)
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