import React from "react";

export const Loading =({
                     data={
                         title:"Loading data..."
                     }})=>{
    const {title} = data;
    return(
        <div className="text-center">
            <strong>{title}</strong>
            <br/>
            <div className="spinner-border ms-auto" />
        </div>
    )
}