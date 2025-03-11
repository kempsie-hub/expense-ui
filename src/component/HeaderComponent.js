import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import { NavLink } from 'react-router-dom';
import './expense.css'
import { isUserLoggedIn, logout } from '../service/ExpenseTypeService';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {

    const navigator = useNavigate();

    function hanleLogOut(){
        console.log('H1...............');
        logout();
        navigator("/");
    }

    const isAuth  = isUserLoggedIn();
    return (
        <div className='container'>
            <header>
                <nav class='navbar navbar-expand-md navbar-dark bg-dark w-10'>
                    <div>
                        {
                          isAuth && 
                          <a class="navbar-brand" href="http://localhost:3000/">Manage Expense Types</a>
                        }
                    </div>
                    <div className='collapse navbar-collapse'>
                        
                    </div>
                    { 
                        !isAuth && 
                        <ul className='navbar-nav'>
                            <li className='nav-item navbar-brand'>
                                <NavLink to="/register" class="navbar-link">Register</NavLink>
                            </li>
                        </ul>
                    }
                    { 
                        !isAuth && 
                        <ul className='navbar-nav'>
                                <li className='nav-item navbar-brand'>
                                    <NavLink to="/login" class="navbar-link">Login</NavLink>
                                </li>
                        </ul>
                    } 
                    { 
                        isAuth && 
                        <ul className='navbar-nav'>
                                <li className='nav-item navbar-brand'>
                                    <NavLink to="/login" class="navbar-link" onClick={() => hanleLogOut()}>Logout</NavLink>
                                </li>
                        </ul>
                    }     
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent