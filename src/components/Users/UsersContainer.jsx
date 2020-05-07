import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTatolUsersCount, setIsFetching, followingInProgress, getUsers} from '../../redux/users-reducer';
import Loader from '../common/Loader/Loader';



class UsersApiComponent extends React.Component{
   componentDidMount(){
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
      // this.props.setIsFetching(true);
      // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
      // .then(data => {
      //    this.props.setIsFetching(false);
      //    this.props.setUsers(data.items);
      //    this.props.setTatolUsersCount(data.totalCount);
      // });
   }
   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
      // this.props.setIsFetching(true);
      // this.props.setCurrentPage(pageNumber);
      // userAPI.getUsers(pageNumber, this.props.pageSize)
      // .then(data => {
      //    this.props.setIsFetching(false);
      //    this.props.setUsers(data.items)
      // });
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
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      tatolUsersCount: state.usersPage.tatolUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingProgress: state.usersPage.followingProgress
   }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTatolUsersCount, setIsFetching, followingInProgress, getUsers})(UsersApiComponent);