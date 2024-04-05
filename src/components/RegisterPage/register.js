import { Component } from 'react'

import {Link} from 'react-router-dom'

import './register.css'

class  RegisterPage extends Component{

    state={
        name:"",
        email:"",
        password:""
    }




    
    
    inputName = (e) => {
        this.setState({name : e.target.value})
      };
      inputEmail = (e) => {
        this.setState({email : e.target.value})
      };
      inputPassword = (e) => {
        this.setState({password : e.target.value})
      };
      onSubmit=()=>{
        const{name,email,password}=this.state

        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        
      }
    render(){
        


        return(
            <div className="register-container">
                <div className="register-form">
                    <h3>Register</h3>
                    <div className='l1'>
                        <label className='l1' htmlFor='name' type='text'>Name :</label>
                        <input onChange={this.inputName} className='l1' id='name'/>
                    </div>
                    <div className='l1'>
                        <label className='l1' htmlFor='email'>Email :</label>
                        <input onChange={this.inputEmail} className='l1' id='email' type='email'/>
                    </div>
                    <div className='l1'>
                        <label className='l2' htmlFor='password'>Password :</label>
                        <input onChange={this.inputPassword} className='l2' id='password' type='password'/ >
                            <br/>
                            <button onClick={this.onSubmit} className='r-btn'>Register</button>
                    </div>
                <p>Have account Please</p>
                <Link to='/'><button className='l-btn'>Login</button></Link> 
                </div>
                
           </div>
        )
    }
}

export default RegisterPage