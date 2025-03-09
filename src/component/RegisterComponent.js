import React, { useState } from 'react'
import './expense.css'
import { registerUser } from '../service/ExpenseTypeService'
export const RegisterComponent = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  function handleRegistrationForm(e){
    e.preventDefault()
    const registerDTO = {name, username, email, password} 
    console.log(registerDTO);

    registerUser(registerDTO).then((response) => {
        console.log(response.data);

    }).catch(error => console.log('error registering user: '+error))
    

  }

  return (
    <div className='container'>
        <br/><br />    
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <form>
                    <div className='card-header'>
                        <h4 className='custom-font text-dark'>User Registration Form</h4>
                    </div>
                    <div className='card-body'>
                        <div className='row mb-3'>
                            <label className='custom-font text-left col-md-3 control-label'>Name</label>
                            <div className='col-md-9'>
                                <input type='text' 
                                name='name' 
                                className='form-control'
                                placeholder='Enter Name'
                                onChange={(e)=> setName(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='custom-font text-left col-md-3 control-label'>User Name</label>
                            <div className='col-md-9'>
                                <input type='text' 
                                name='userName' 
                                className='form-control'
                                placeholder='Enter User Name'
                                onChange={(e)=> setUsername(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='custom-font text-left col-md-3 control-label'>Email</label>
                            <div className='col-md-9'>
                                <input type='text' 
                                name='email' 
                                className='form-control'
                                placeholder='Enter Email'
                                onChange={(e)=> setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='custom-font text-left col-md-3 control-label'>Password</label>
                            <div className='col-md-9'>
                                <input type='password' 
                                name='password' 
                                className='form-control'
                                placeholder='Enter Password'
                                onChange={(e)=> setPassword(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <button className='btn btn-primary' onClick={(e) => handleRegistrationForm(e)}>Submit</button>
                        </div>
                    </div>
                    
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}
