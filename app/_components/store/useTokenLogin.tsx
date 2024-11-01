import { create } from 'zustand'
import Cookies from "js-cookie"

type TokenStore = {
    token: string;
    setToken: (newToken: string) => void;
  };


  const useTokenLogin = create<TokenStore>((set) => ({
    token: Cookies.get('token') || "",
    setToken: (newToken: string) => {
      set({ token: newToken });
      Cookies.set('token', newToken, { expires: 1/1440 }); 
    },
  }));
  
  export default useTokenLogin;