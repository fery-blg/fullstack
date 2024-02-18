import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUser = create(persist(
    (set, get) => ({
        user: 0,
        setUser: (data) => set({ user: data })
    }),
    {
        name: 'userStore',
        storage: createJSONStorage(() => localStorage),
    }))