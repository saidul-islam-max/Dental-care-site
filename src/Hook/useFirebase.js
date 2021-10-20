 
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/Firebase.initialize';

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    const auth = getAuth();

    const googleSingIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then((result) => {
            console.log(result.user)
         setUser(result.user)
        })
        .catch((error)=>{
            setError(error.message)
        })
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

    const handlePassword = (e) =>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    const handleEmail = (e) =>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
   

   const handleRegister = (e) => {
    e.preventDefault()
       createUserWithEmailAndPassword(auth,email,password,name)
       
       .then(result => {
           const user=result.user;
           console.log(user)
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
         error
    }
};

export default useFirebase;