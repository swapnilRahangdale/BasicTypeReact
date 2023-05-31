import React from "react";
import './BaseComponent.scss'

const BaseComponent: React.FC<
{
<<<<<<< HEAD
    ComponyName:string,
    EmpName:string,                                  // this are all props ke object or type defination of props
    age:number,                                     //  type
    address:string             
=======
    name:string,
    age:number,
    mob:number,
    email:string        
>>>>>>> e4df7090fa66a329b39488d44cbb538ca935ff92
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
