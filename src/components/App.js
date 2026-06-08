import React, { useEffect, useRef, useState } from "react";

let data=[
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]



const App=()=>{
      let[checkE,setCheckE]=useState('');
        let[checkP,setCheckP]=useState('');
;

        useEffect(()=>{
      let id= setTimeout(()=>{
             handleTime();
       },3000)

       return(()=>{
        clearTimeout(id);
       })
        },[])

    let user={
        email:useRef(),
        pass:useRef()
    }
    let{email,pass}=user;



        function handleSubmit(e){
            e.preventDefault();
            handleTime()
        }

  function handleTime(){





        if(!email.current.value || !pass.current.value)
        {
            return;
        }

        let dst=data.find(da=> da.email==email.current.value);
        if(!dst)
        {
              setCheckE("User not found")

            return;
        }
        if(parseInt(dst.password)!=(pass.current.value))
        {
           setCheckP("Password Incorrect")
            return;
        }
        else{
            setCheckE('')
            setCheckP('')
            console.log(dst);
        }

    }

    return(
        <div>
    <form onSubmit={handleSubmit}>
<input type="email" id="input-email" placeholder="Enter Email"  ref={email}/>
<br/>
<input type="password" id="input-password" placeholder="Enter Password" ref={pass}/>
<br/>
<button type="submit" id="submit-form-btn" >LogIn</button>

    </form>

    {
      <p id="user-error" style={{color:"red"}}>{checkE}</p>
    }

      {  <p id="password-error" style={{color:"red"}}>{checkP}</p>  }









        </div>
    )
}

export default App







// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {

    
//     let users = [
//     {
//         id: 1,
//         name: "ABC",
//         email: "abc@gmail.com",
//         password: "12"
//     },
//     {
//         id: 2,
//         name: "DEF",
//         email: "def@gmail.com",
//         password: "1234"
//     },
//     {
//         id: 3,
//         name: "GHI",
//         email: "ghi@gmail.com",
//         password: "123456"
//     }
// ];

//    let [userDataE,setUserDataE] = useState('');
//    let [userDataP,setUserDataP] = useState('');

//     let emailRef = useRef("");
//     let passRef = useRef("");

    

//  useEffect(()=>{

//     let id =  setTimeout(() => {

//         AftertimeShowdata()
        
//     }, 3000)


//     return(()=>{
//         clearTimeout(id);
//     })

//  },[])


//  function AftertimeShowdata(){

//     let user = users.find(obj=>obj.email === emailRef.current.value);

//     // if(user.email === emailRef.current.value && user.password == passRef.current.value){
//     //     console.log(user);
//     //     return;
//     // }
//     console.log(user)
//     if(!user){
//         setUserDataE("User not found");
//         return;
//     }
//     if(user.password!=passRef.current.value){
//         setUserDataP('Password Incorrect');
//             return;
//     }

//  }



// function handleSubmit(e){
//     e.preventDefault();
    
//    AftertimeShowdata()


// }



//   return (
//     <div>
//         <form onSubmit={handleSubmit}>

//             <input 
//             type='email'
//              id='input-email'
//              ref={emailRef}
//               placeholder='Enter the mail'
//               />

//             <input 
//             type='password'
//             id='input-password'
//             ref={passRef}
//              placeholder='Enter the pass'
//              />
//             <button type='submit' id='submit-form-btn' >submit</button>

//         </form>
     
//        <div>
//          {<p id='user-error'>{userDataE}</p>}
//         {<p id='password-error'>{userDataP}</p>}
//        </div>


      
//     </div>
//   )
// }

// export default App
