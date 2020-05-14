export const getUser = (state) =>{
   return state.usersPage.users
}
export const getPageSize = (state) =>{
   return state.usersPage.pageSize
}
export const getTatolUsersCount = (state) =>{
   return state.usersPage.tatolUsersCount
}
export const getCurrentPage= (state) =>{
   return state.usersPage.currentPage
}
export const getIsFetching= (state) =>{
   return state.usersPage.isFetching
}
export const getFollowingProgress= (state) =>{
   return state.usersPage.followingProgress
}