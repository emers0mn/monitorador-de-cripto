import { create } from 'zustand'
import Cookies from "js-cookie"

export const useCriptoStore = create((set) => ({
    
    dolarBlue: Cookies.get('dolarBlue') || null,
    dolarCripto: Cookies.get('dolarCripto') || 0,
    dolarReal: Cookies.get('dolarReal') || 0,

    setDolarBlue: (dolarBlue) => {
        set({ dolarBlue });
        Cookies.set('dolarBlue', dolarBlue, { expires: 1/1440 }); 
    },
    setDolarCripto: (dolarCripto) => {
        set({ dolarCripto });
        Cookies.set('dolarCripto', dolarCripto, { expires: 1/1440 }); 
    },
    setDolarReal: (dolarReal) => {
        set({ dolarReal });
        Cookies.set('dolarReal', dolarReal, { expires: 1/1440 }); 
    }
}))