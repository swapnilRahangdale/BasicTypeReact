import React from "react";
import './BaseComponent.scss'

const BaseComponent: React.FC<
{
    name:string,
    age:number,
    mob:number,
    email:string        
}                          



> =(newUserData) =>{

                             
    const stringAndNumber :(string | number) [] =['Pratik' ,24, 7098989510, 'sr@.com','    ',
    'Rahul',56, 89451455,'jdk@g.com','     ',
    'Abhilash',36, 894821455,'abhilash@g.com']
   
    return(
       
        <div>
            <p>{stringAndNumber}</p>
            
        </div>

    )

};

export default BaseComponent;
