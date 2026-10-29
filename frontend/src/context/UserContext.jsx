import React, { createContext, useState } from 'react'

export const UserStore = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <UserStore.Provider value={{user, setUser}}>{children}</UserStore.Provider>
    )
}

export default UserContext
