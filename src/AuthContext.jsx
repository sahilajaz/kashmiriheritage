import {createContext , useState , useEffect} from 'react'
import {auth} from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
   const[user , setUser] = useState(null)

   useEffect(() => {
    const unScribe = onAuthStateChanged(auth , (user) => {
        if(user) {
            setUser(user)
        }
    })
    return () => unScribe()
   } , [])

   return (
    <AuthContext.Provider value={{user}}>
     {children}
    </AuthContext.Provider>
   )
}