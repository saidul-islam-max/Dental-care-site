 
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,updateProfile  ,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword ,sendEmailVerification,sendPasswordResetEmail} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/Firebase.initialize';

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [photo,setPhoto] = useState('')
    const [password,setPassword] = useState('')
   

    const auth = getAuth();

    const googleSingIn = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth,googleProvider)
        
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
    },[])
    

    const handleName = (e) =>{
        
        setName(e.target.value)
    }

    const handlePassword = (e) =>{
        
        setPassword(e.target.value)
    }
    const handleEmail = (e) =>{
        
        setEmail(e.target.value)
    }
   
    const handlePhoto = (e) =>{
        
        setPhoto(e.target.value)
    }
   const setUserName = () => {
       updateProfile(auth.currentUser, {displayName: name,photoURL:photo})
       .then(result => {})
   }  
  
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {
           
        })
    }
  
  const handleResetPassword = () => {
  sendPasswordResetEmail(auth,email)
  .then(result => {})
  }

   const handleRegister = (e) => {
    e.preventDefault()
       createUserWithEmailAndPassword(auth,email,password,name)
       
       .then(result => {
           const user=result.user;
         
           setUserName();
           
           emailVerify()
           setUser(user)
       })
       .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        // ..
      });
   }
    
 const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
 }


    return {
         user,
         googleSingIn,
         logOut,
         handleRegister,
         handlePassword,
         handleEmail,
         email,
         password,
         handleLogin,
         handleName,
         handlePhoto,
         handleResetPassword,
         error
    }
};

export default useFirebase;