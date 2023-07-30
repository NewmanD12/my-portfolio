import React from 'react'
import { Outlet } from 'react-router-dom'

// const promos = ['Free shipping for orders $40 and over!', 'Get 30% your first subscription shipment with code: save30', "Our roasters and our customer support will be closed on July 4th. "]


const Layout = () => {
    return (
        <>
            <div id='top-menu'>
                <Outlet /> 
            </div>
        </>
    )
}

export default Layout