import React from "react";
import { PrimaryNavigation } from '../styled/styledComponents'
import { AppRoutes } from "../../routes/routes"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
            <PrimaryNavigation>
                <NavLink className="navigationstyle"  to={AppRoutes.home}>Home </NavLink>
                <NavLink className="navigationstyle" to={AppRoutes.products}>Products </NavLink>
                <NavLink className="navigationstyle" to={AppRoutes.services}>Services </NavLink>
                <NavLink className="navigationstyle" to={AppRoutes.about}>About Us </NavLink>
            </PrimaryNavigation>
        </>
    )
}