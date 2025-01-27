import React, { useEffect, useState } from 'react'
import './Login.css'
import lock from "../Assets/456283.png"
import user from "../Assets/2889676.png";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate =useNavigate()

    const [userName ,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const doLogin = async(e)=>{
        // e.preventDefault();
        e.preventDefault();

        console.log(userName,password)

        try {

            // const data = await fetch()
            //  username: "mor_2314",
                    // password: "83r5^_"

            
         const result=   await fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                headers:{
                      "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username: userName,
                    password: password
                })
            })
            console.log(result.status)
                // .then(json=>{console.log(json)})
                //  .error((error)=>{
                //     console.log("this is under the error")
                // })

                if(result.status ===200){
                    sessionStorage.setItem("isLogin",JSON.stringify("loginUser"))
                  navigate("/")
                    return
                }
                alert("Email/Passowrd is worng")
        } catch (error) {
            console.log("there is an error in doing login");
        }
  
    }

    useEffect(()=>{
        const isLoginnn = sessionStorage.getItem("isLogin") ? JSON.parse(sessionStorage.getItem("isLogin")) : null ;
        console.log("this is the islogin" + isLoginnn)

        if(isLoginnn){
           navigate("/")
        }


    },[])


    
  return (
    <div className='absolute  bg-black w-screen h-screen z-50 '>
    <div className="containerr">
         <div className="inner_container">
             <div className="inner_first">
                 <div className="items-container">
                     <h2>Login</h2>
 
                 </div>
                 <div className="input_container">
                     <input type="email" placeholder="user name/email"
                     value={userName}
                     onChange={(e)=>setUserName(e.target.value)}
                     
                     />
                     <img  className="Logos" src={lock}/>
                     
 
                 </div>
 
                 <div className="input_container">
                     <input type="email" placeholder="password"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                     <img className="Logos" src={user}/>
 
                 </div>
 
                 <div className="forgot">
                     <div>
                         <input type="checkbox"/> <span>Remember</span>
                     </div>
                     <h5>Forgot password ?</h5>
                    
 
                 </div>
 
                 <button className='items-center flex gap-1 md:gap-3 btn'
                 onClick={doLogin}
                 >
                     Login <span className='text-white text-2xl'><MdArrowRightAlt/></span>
                 </button>
 
 
                 <p>
                     Don't have an account yet?<span className='ml-3 text-[12px]'>Sign up</span>
                 </p>
                 <p className='text-[9px]'>
                For testing try username:- <span className='text-red-700'>mor_2314</span> password:- <span className='text-red-700'> 83r5^_ </span>
                 </p>
 
                 
 
             </div>
             
             <div className="inner_second">
 
             </div>
 
         </div>
 
     </div>
 
    </div>
  )
}

export default Login