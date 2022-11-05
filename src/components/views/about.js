import React from "react";
export const About = ({authorName}) => {
if(authorName === "deepan"){
    throw new Error("NOT A AUTHOR")
}

    return (
        <>
            <h4>About Page by {authorName}  </h4>
            <h1>Working good as exp</h1>
        </>
    )
}