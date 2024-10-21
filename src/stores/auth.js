import { defineStore } from "pinia";

export const useAuth = defineStore('auth', {
 actions: {
  async login(formdata){
    console.log(formdata);

  }
 }
  
  
});