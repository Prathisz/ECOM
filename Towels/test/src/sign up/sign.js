// SignUp.js
import React, { useState } from 'react';
import './SignUp.css';
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';
const SignUp = () => {
  const [state,setState]=useState("LogIn");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });


  const login = async() =>{
    console.log("Login func exe",formData);
    let responseData;
    await fetch('http://localhost:3000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
  }
  const signup = async() =>{
    console.log("signup func exe",formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Navbar/>
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>{state}</h2>
       {state==="Sign Up"?<label>
          Username:
        <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>:<></>} 
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" onClick={()=>{state==='LogIn'?login():signup()}}>Continue</button>
        {state==="Sign Up"? <p className='login'>Already have an account?? <span onClick={()=>{setState("LogIn")}}>Login</span ></p>:<p className='login'>Create an account? <span onClick={()=>{setState("Sign Up")}} >Click Here</span ></p>

}

      </form>

    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
