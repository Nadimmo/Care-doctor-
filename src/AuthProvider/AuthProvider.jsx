/* eslint-disable react/prop-types */
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";
// provider
const googleProvider = new GoogleAuthProvider()
export const Context = createContext('')
const auth = getAuth(app);


const AuthProvider = ({children}) => {

const [user,setUser] = useState([])
const [loader, setLoader] = useState(true)


const signUp = (email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIN = (email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const GoogleLogin= ()=>{
    setLoader(true)
    return signInWithPopup(auth,googleProvider)
}

const outSign = ()=>{
    setLoader(true)
    return signOut(auth)
}

useEffect(()=>{
    const UnSunscribe = onAuthStateChanged(auth,currentUser =>{
        console.log("Observe CurrentUser",currentUser)
        const userEmail = currentUser?.email || user?.email;
        setUser(currentUser)
        const loggedUser = {email: userEmail}
        setLoader(false)
        // withCredentials is very very important
        if(currentUser){
            axios.post('https://car-server-2-copy.vercel.app/jwt',loggedUser, {withCredentials: true})
            .then(result =>{
                console.log(result.data)
            })
            .catch(error =>{
                console.log(error)
            })
        }
        else{
            axios.post('https://car-server-2-copy.vercel.app/logout', loggedUser, {withCredentials: true})
            .then(result => {
                console.log('successfully logout a token', result)
            })
        }
        return ()=> {
            UnSunscribe()
        }
    })
},[])


const authInfo = {
    user,
    loader,
    signUp,
    signIN,
    GoogleLogin,
    outSign,
}
    return (
        <div>
            <Context.Provider value={authInfo}>
                {children}
            </Context.Provider>
        </div>
    );
};

export default AuthProvider;