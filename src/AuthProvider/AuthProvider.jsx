import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import useAxiosSecure from './../hooks/useAxiosSecure';
export const AuthContext=createContext() 



const AuthProvider = ({children}) => { 
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [mode,setMode]=useState(false)
const axios=useAxiosSecure()

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                const email={email:currentUser.email}
                axios.post('/jwt',email)
                .then((res)=>{})

            }
            setLoading(false)
          });

          return ()=>{
            unSubscribe()
          }

    },[axios])

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const registerUserWithEmailPassword = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmailPassword = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const update = (currentUser,willUpdate)=>{
        return updateProfile(currentUser,willUpdate)

    }
    const logOutUser = ()=>{
        return signOut(auth)
    }

    const authInfo={
       user,
       setUser,
       registerUserWithEmailPassword,
       logInWithEmailPassword,
       signInWithGoogle,
       update,
       logOutUser,
       loading,
       mode,
       setMode
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;