import { create } from "zustand";
import Cookies from "js-cookie";

export const useTendencia = create((set) => ({

    tendenciaRealPeso: Cookies.get('tendenciaRealPeso') || null,

    setTendenciaRealPeso: (tendenciaRealPeso) => {
        set({ tendenciaRealPeso });
        Cookies.set('tendenciaRealPeso', tendenciaRealPeso, { expires: 2 }); 
    },
}));