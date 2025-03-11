import React, { useEffect, useState } from 'react';
import './expense.css'
import {createExpenseType, getExpenseType, updateExpenseType} from "../service/ExpenseTypeService";
import {useNavigate, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const ExpenseComponent = () => {
    const{id} = useParams();
    const [name , setName] = useState('');
    const [description, setDescription] = useState('');
    const [registrationRequired, setRegistrationRequired] = useState(false);
    const navigator = useNavigate();
    
    const [errors, setErrors] = useState({
        name: '',
        description: ''
    });

    useEffect(()=>{
        if(id){
            console.log('2222222222222222222222: '+id);
            getExpenseType(id).then((response)=>{
                console.log('--------------1'+JSON.stringify(response.data));
                setName(response.data.name);
                setDescription(response.data.description);
                setRegistrationRequired(response.data.registrationRequired);

            }).catch(error => {
                console.log('aaaaaaaaaaaaa............................'+error)
            });
        }
    },[id])

    function saveExpenseType(e) {
        console.log('....................................................1');
        e.preventDefault();
        const newExpenseType = { name: name, description: description, registrationRequired: registrationRequired };
            console.log('--------------2'+JSON.stringify(newExpenseType));
        if(validateForm()) {
            if(id){
                updateExpenseType(id, newExpenseType).then((response) => {
                    console.log(response.data);
                    navigator('/');
                }).catch(error =>{
                    console.error(error);
                });
            } else {
                createExpenseType(newExpenseType).then((response) => {
                    console.log(response.data);
                    navigator('/');
                });
           }
        }
    }

    function validateForm(){
        let valid = true;
        console.log('Validation Started'+valid);
        const errorsCopy = {... errors}
        if(name.trim()){
           errorsCopy.name = ''
        } else {
           errors.name='Name is required.'
           valid = false
        }

        if(description.trim()){
                   errorsCopy.description = ''
        } else {
           errors.description='Description is required.'
           valid = false
        }
        setErrors(errors);
       // console.log('Validation Completed'+valid);
        return valid
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center text-dark'>Update Expense Type </h2>
        } else {
            return <h2 className='text-center text-dark'>Add Expense Type</h2>
        }

    }

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div class      Name={'card'}>
                    {pageTitle()}
                    <div className={'card-body'}>
                        <form className={'text-left'}>
                            
                            <div className='form-group mb-2'>
                            <label className='form-label; col-sm-2 col-form-label text-sm-left text-dark f-label'>Name:</label>
                            <input
                                type='text'
                                placeholder='Expense Type Name'
                                name='firstName'
                                value={name}
                                className={`form-control ${ errors.name ? 'is-invalid': '' }`}
                                onChange={(e) => setName(e.target.value)}                            >
                            </input>
                            { errors.name && <div className='invalid-feedback'> { errors.name} </div> }
                            </div>
                            <div className={'form-group mb-2'}>
                                <label className='col-sm-2 col-form-label text-sm-left text-dark f-label'>Description</label>
                                <div className={'col-sm-10'}>
                                    <input type={'text'}
                                           placeholder={'Enter description'}
                                           className='form-control'
                                           value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                            </div>
                            <div className={'form-group mb-2'}>
                                <label className='col-sm-2 col-form-label text-sm-left text-dark f-label'>Need Registration?</label>
                                <div className={'col-sm-10'}>
                                    <input type={'checkbox'}
                                           className='form-check-input'
                                           checked={registrationRequired} onChange={(e) => setRegistrationRequired(e.target.checked)} />
                                </div>
                            </div>
                            <div className={'form-group row'}>
                                <div className={'col-sm-10 offset-sm-2'}>
                                    <button className={'btn btn-primary'} onClick={saveExpenseType}>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseComponent;
