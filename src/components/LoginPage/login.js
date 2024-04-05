import { Component } from 'react'


import { Link } from 'react-router-dom'


import './login.css'

class  LoginPage extends Component{

    state={
        email:"",
        pass:""
    }

    inputEmail=(e)=>{
        this.setState({email: e.target.value})
    }
    inputPass=(e)=>{
        this.setState({pass: e.target.value})
    }
    onLogin=()=>{
        const {email, pass} =this.state;
        const pass1=(localStorage.getItem("password"))
        const email1=(localStorage.getItem("email"))
        if(email===email1 && pass===pass1){
            alert('You are logged in')
            window.location='/form'
        }else{
            alert('Wrong Email or Password')
        }
    }

    render(){
    
        return(
            <div className="register-container">
                
               
                <div className="register-form">
                    <h3>Login</h3>
                    
                    <div className='l1'>
                        <label className='l1' htmlFor='email'>Email :</label>
                        <input onChange={this.inputEmail} className='l1' id='email' type='email'/>
                    </div>
                    <div className='l1'>
                        <label className='l2' htmlFor='password'>Password :</label>
                        <input onChange={this.inputPass} className='l2' id='password' type='password'/ >
                            <br/>
                            <button onClick={this.onLogin} className='r-btn'>Login</button>
                    </div>
                <p>Don't have account Please</p>
                
                
                    <Link to='/register'><button className='l-btn'>Create Account</button></Link>
                </div>
            </div>
        )
    }
}

export default LoginPage;