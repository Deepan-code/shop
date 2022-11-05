import React from "react";

export const Users = (props) => {
    console.log(props)
    return (
        <>
            <p>User Name: {props.name} relationship: {props.relation} </p>
            {props.children}
        </>
    )
}