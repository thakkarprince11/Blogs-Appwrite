import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({ children, authentication = true }) {
    //
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {

        // true && false !== true means both will be true so redirect to login page
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }
        // false && true !== false means both will be false so redirect to home page
        else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
        //
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected
