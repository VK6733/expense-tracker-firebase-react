
import {auth,provider} from "../../config/firebase-config"
import{signInWithPopup} from "firebase/auth"
import{useNavigate,Navigate} from 'react-router-dom'
import "./styles.css";
export const Auth=()=>{
    let navigate=useNavigate()
    const signInWithGoogle=async()=>{
        const result=await signInWithPopup(auth,provider) 
        const authInfo={
            userID:result.user.uid,
            name:result.user.displayName,
            profilePhoto:result.user.photoURL,
            isAuth:true
        }
        localStorage.setItem("auth",JSON.stringify(authInfo))
        navigate("/expense-tracker")
    }

    return <div className="login-page">

       <p>Sign In with google to continue</p>
       <button className="login-with-google" onClick={signInWithGoogle}>{" "}Sign in with Google</button>
    </div>
}