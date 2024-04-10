import { auth, provider } from "../../config/firebase-config";
import {signInWithPopup} from 'firebase/auth';
import { NavigateFunction, useNavigate } from "react-router-dom";


export const Auth = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => { 
        const results = await signInWithPopup(auth, provider);
        console.log(results);
        const authInfo = {
         userID: results.user.uid,
         name: results.user.displayName,
         photo: results.user.photoURL,
         isAuth: true
        }
     
        localStorage.setItem('auth', JSON.stringify(authInfo));
        navigate('/expense-tracker');
     }

    return (
    <div className="login-page">
        <p>Sign in to continue</p>
        <button className="google-sign-in-button" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
)}