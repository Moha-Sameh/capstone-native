import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
  signUp = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.user = res.data;
    } catch (error) {
      console.log("AuthStore -> signUp -> error", error);
    }
  };
  signIn = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = decode(res.data.token);
      console.log(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signIn -> error", error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
