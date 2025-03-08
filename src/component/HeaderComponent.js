import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'

const HeaderComponent = () => {
    return (
        <div className='container'>
            <header>
                <nav class='navbar navbar-dark bg-dark w-10'>
                    <a class="navbar-brand" href="#">Manage Expense Types</a>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent