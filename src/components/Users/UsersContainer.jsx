import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTatolUsersCount, setIsFetching, followingInProgress, getUsers} from '../../redux/users-reducer';
import Loader from '../common/Loader/Loader';
import {getUser, getPageSize, getTatolUsersCount, getCurrentPage, getIsFetching, getFollowingProgress } from '../../redux/user-selector';



class UsersApiComponent extends React.Component{
   componentDidMount(){
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }
   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
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
      followingInProgress = {this.props.followingInProgress}
      followingProgress = {this.props.followingProgress}
      />
   </>
   }
}




let mapStateToProps = (state) => {
   return {
      users: getUser(state),
      pageSize: getPageSize(state),
      tatolUsersCount: getTatolUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingProgress: getFollowingProgress(state)
   }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTatolUsersCount, setIsFetching, followingInProgress, getUsers})(UsersApiComponent);