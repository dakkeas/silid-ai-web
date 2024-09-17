import { initializeApp } from 'firebase/app'
import { useContext } from 'react';
import { ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCwhq2pVe0sSCZ9GdiaYW_TX3fzMBElOqE",
    authDomain: "silid-ai-939a6.firebaseapp.com",
    databaseURL: "https://silid-ai-939a6-default-rtdb.firebaseio.com",
    projectId: "silid-ai-939a6",
    storageBucket: "silid-ai-939a6.appspot.com",
    messagingSenderId: "831704041330",
    appId: "1:831704041330:web:548f66b512c763ee68ffeb",
    measurementId: "G-YL22G17R5M"
}



const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)


const signInNewUser = async (
    userData,
    handleIsLoading,
    handleFormErrors,
    navigate
) => {

    signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            // Signed in 
            console.log('signed up1')
            const user = userCredential.user;
            console.log(user)
            // ...
            navigate('/dashboard')

        })
        .catch((error) => {
            console.log(userData)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            errorCode == 'auth/invalid-credential' ? handleFormErrors('password', 'Wrong email or password') : handleFormErrors('password', 'An error occured')
        })
        .finally(() => {
            handleIsLoading(false)
        })


}

const signOutUser = async (navigate) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/');
        console.log("Signed out successfully")
    }).catch((error) => {
        // An error happened.
    });

}

const signUpNewUser = async (
    userData,
    handleFormErrors,
    handleIsLoading,
    navigate
) => {

    console.log(userData)
    // const navigate = useNavigate()

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            console.log('signing up .....')
            // Signed up 
            const user = userCredential.user;
            console.log(user)

            set(ref(db, `users/${user.uid}`), {
                // under the parent node specified above
                // IMPROVE: just pass an object into this function
                ...userData,
                posttest: {
                    score: 0,
                    completed: false
                },
                pretest: {
                    easy: 0,
                    intermediate: 0,
                    difficult: 0,
                    completed: false
                },
                vark: {
                    visual: 0,
                    aural: 0,
                    read: 0,
                    kinesthetic: 0,
                    last_taken: '',
                    completed: false
                }


                // spread the info
            });
            console.log('signing up .....')

            // after signing in is completed...
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            console.log(errorCode)
            console.log(errorMessage)
            errorCode == 'auth/email-already-in-use' ? handleFormErrors('email', 'Email already in use') : handleFormErrors('email', 'An error occured')
        })
        .finally(() => {
            handleIsLoading(false)

        })
    console.log('successfully written your user!')
}


const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            console.log("uid", uid)
        } else {
            // User is signed out
            // ...
            console.log("user is logged out")
            permission = 'no user is found'
        }
    });
}

const checkAuthPermission = (
    handleUserPermission,
    handleIsLoading
) => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

        if (user) {
            console.log('checking auth permission... valid')
            console.log(user)
            handleUserPermission(user.uid)
        } else {
            console.log('checking auth permission.. none')
            handleUserPermission(null)
        }
        handleIsLoading(false)
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();

}

const fetchUserData = (
    handleUserData,
    handleIsLoading
) => {
    const userDataRef = ref(db, `user/${user.uid}`);

    onValue(userDataRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            handleFetchUserData(data)
            console.log(userData)
            setIsLoading(false)
        } else {
            setIsLoading(false)
            console.log('error fetching data...')
        }

    });
}


const writePreTestResults = async (
    result,
    handleIsLoading,
    useruid
) => {
    console.log('writing pretest results...')

    set(ref(db, `users/${useruid}/pretest`), {
        // under the parent node specified above
        // IMPROVE: just pass an object into this function
        ...result,
        completed: true
        // spread the info
    });

    handleIsLoading(false)
    console.log('finished writing pretest results...')


}


const writePostTestResults = async (
    result,
    handleIsLoading,
    useruid
) => {
    console.log('writing posttest results...')

    set(ref(db, `users/${useruid}/posttest`), {
        // under the parent node specified above
        // IMPROVE: just pass an object to this function
        ...result,
        completed: true
        // spread the info
    });

    handleIsLoading(false)
    console.log('finished writing posttest results...')


}


const writeVarkTestResults = async (
    result,
    handleIsLoading,
    useruid
) => {
    console.log('writing posttest results...')

    set(ref(db, `users/${useruid}/vark`), {
        // under the parent node specified above
        // IMPROVE: just pass an object into this function
        ...result,
        completed: true
        // spread the info
    });

    handleIsLoading(false)
    console.log('finished writing posttest results...')
    console.log(result)
}





export {
    signUpNewUser,
    signInNewUser,
    signOutUser,
    checkAuthState,
    checkAuthPermission,
    writePreTestResults,
    writePostTestResults,
    writeVarkTestResults
}




