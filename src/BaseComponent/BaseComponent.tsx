import React from "react";
import './BaseComponent.scss'

const BaseComponent: React.FC<
{
    ComponyName:string,
    EmpName:string,                                  // this are all props ke object or type defination of props
    age:number,                                     //  type
    address:string             
}                          



> =(props) =>{

    const {ComponyName, EmpName, age, address} = props;                          //object    functional object

   
    return(
       
        <div className="title">
                                                            
            <h1>{ComponyName}</h1> <br/>
            <p>{EmpName}</p>
            <p>{age}</p>
            <p>{address}</p>

        </div>

    )

};

export default BaseComponent;
