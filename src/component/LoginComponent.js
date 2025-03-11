import React, { useState } from 'react'
import { getLoggedInUser, getToken, isUserLoggedIn, loginAPICall, saveLoggedInUser, storetoken } from '../service/ExpenseTypeService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate();

    async function handleLoginForm(e){

        e.preventDefault();

        const loginObject = {username, password}

        console.log(loginObject)



        await loginAPICall(username, password).then((response) => {
            
            console.log(response.data);

            const token = 'Basic ' + window.btoa(username + ":" + password);

            storetoken(token);
            saveLoggedInUser(username);
            console.log(isUserLoggedIn());
           

           
            console.log(getLoggedInUser)
            console.log(getLoggedInUser);
            navigator("/");
            window.location.reload(false);
        }).catch(error => {
            console.error(error);
        })

    }

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'> Login Form </h2>
                    </div>

                    <div className='card-body'>
                        <form>

                            <div className='row mb-3'>
                                <label className='custom-font text-left col-md-3 control-label'> Username </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='username'
                                        className='form-control'
                                        placeholder='Enter username'
                                        value={username}
                                        onChange={ (e) => setUsername(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='custom-font text-left col-md-3 control-label'> Password </label>
                                <div className='col-md-9'>
                                    <input
                                        type='password'
                                        name='password'
                                        className='form-control'
                                        placeholder='Enter password'
                                        value={password}
                                        onChange={ (e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='form-group mb-3'>
                                <button className='btn btn-primary' onClick={ (e) => handleLoginForm(e)}>Submit</button>

                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default LoginComponent