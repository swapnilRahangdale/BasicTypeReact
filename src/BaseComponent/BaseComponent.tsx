import React from "react";
import './BaseComponent.scss'

const BaseComponent: React.FC<
{
    title:string,
    name?:string            // this are all props ke object or type defination of props
}                          //type



> =(props) =>{

    const {title, name} = props;                          //object    functional object

   
    return(
       
        <div className="title">
                                                            
            <p>{title}</p>
            

        </div>

    )

};

export default BaseComponent;
