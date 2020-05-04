import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTatolUsersCountAC } from '../../redux/users-reducer';

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);