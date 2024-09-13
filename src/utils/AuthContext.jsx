import { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const Context = createContext();

const AuthContext = ({ children }) => {
    const auth = getAuth()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            setIsLoading(false)
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });
        return () => unsubscribe()
    }, [])

    const values = {
        user: user,
        setUser: setUser
    }

    return <Context.Provider value={values}>
        {!isLoading && children}
    </Context.Provider>


}

export default AuthContext