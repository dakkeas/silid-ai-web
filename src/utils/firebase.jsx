import { initializeApp } from 'firebase/app'
import { ref, set } from "firebase/database";

const initFirebase = () => {
    // initializes firebase

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

    return app
}


const createNewUser = (
    db,
    userId,
    userData
) => {
    console.log(userId)
    console.log(userData)
    set(ref(db, `users/${userData.learningPreference}/${userId}`), {
        // under the parent node specified above
        // IMPROVE: just pass an object into this function
        ...userData,
        // spread the info
    });
    console.log('successfully written your user!')
}


export { initFirebase, createNewUser }


