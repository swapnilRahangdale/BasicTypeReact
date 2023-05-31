
import React, { useState } from 'react';
import styless from './UserManagment.module.scss'

type companyType = 'Arc' | 'TCS' | 'VIGO';

type userType = {
    name : string,
    age : number,
    company : companyType
    
}

const UserManagment:React.FC<{

    isLogin : boolean

}> = (isLogin) => {

    const[name, setName] = useState<string>('');

    const [age, setAge] = useState<number>(0);

    const [company, setCompany] = useState<companyType>('TCS')


    const userArr :userType[] = [
        {
        name : 'Tejas',
        age : 25,
        company : 'TCS'

    }
     ];

    const [userData, setUserData] = useState<userType[]>(userArr)

    const saveUserData = ():void =>{

        console.log(name,age,company);

        const newArr = [...userData, {name,age,company}]

        setUserData(newArr)

        console.log('userArr',userArr);
        

    };

   

    const classValue = isLogin ? 'main-container' : 'mainContainerLogout';

    const userArrData = userData.map(user =>{
        return (
            <div>

                <p>Neme :{user.name}</p>
                <p>Age : {user.age}</p>
                <p>Company: {user.company}</p>

            </div>
        )
    })

    return(

        <div className= { styless[classValue]}>

         <p>User Manegment</p>

         <input type = "text" name = "name" 
          value = {name}
          onChange={e => setName(e.target.value)}/>

         <input type = "number" name = "age"
          value = {age}
          onChange = {(e) => setAge(parseFloat(e.target.value))}/>

          <input type = "text" name = "company"
          value = {company}
          onChange = {(e) =>{ 

            const newValue:any = e.target.value;

            setCompany(newValue)
          }} />

         <button onClick={saveUserData}>Save</button>

         {userArrData}

        </div>                                                         // return method hoti hai 

    )
};

export default UserManagment;