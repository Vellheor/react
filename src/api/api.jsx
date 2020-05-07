import * as Axios from 'axios';

const instance = Axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY" : "82cdae22-32fe-4d5e-9535-92906ed357d0"
  }
});


export const userAPI = {
   getUsers(currentPage, pageSize){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then( response => {
         return response.data;
      });
   },

   unfollowUsers(id){
      return instance.delete(`follow/`+id)
      .then( response => {
         return response.data;
      });
   },
   
   followUsers(id){
      return instance.post(`follow/`+id)
      .then( response => {
         return response.data;
      });
   },
   userProfile(id){
      return instance.get(`profile/`+id)
      .then( response => {
         return response.data;
      });
   },
   setUserData(){
      return instance.get(`auth/me`)
      .then( response => {
         return response.data;
      });
   }
}
