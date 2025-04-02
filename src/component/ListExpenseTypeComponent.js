import React, { useEffect,useState } from 'react';
import {getExpenseTypes, getToken, isUserLoggedIn} from '../service/ExpenseTypeService';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from "react-router-dom";

const ListExpenseTypeComponent = () => {
    const [expenseTypes, setExpenseTypes] = useState([])

    const navigator = useNavigate();

    

    const deleteExpenseType = async(expenseTypeId)  =>  {
       console.log('deleting....'+expenseTypeId)
            try{
            const result = await fetch(`http://localhost:8081/api/expense-types/${expenseTypeId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': getToken()
                }
            });
            
             if (!result.ok) {
                        throw new Error('Error deleting expense type');
             }
    
            const data = await result.data;
            console.log('expense type deleted successfully' +data);
            window.location.reload(false);
            navigator('/');

            } catch(error){
                console.log(JSON.stringify(error));
            }
    
    }


    useEffect(()=> {
        const isAuth = isUserLoggedIn();
        console.log('isAUth...........'+ isAuth);
        isAuth && getAllExpenseTypes();
    },[]);

    function getAllExpenseTypes(){
        getExpenseTypes().then((response)=>{
            setExpenseTypes(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    function addNewExpenseType() {
        navigator('/add-expense-type');
    }

    function updateExpenseType(id){
        console.log('11111111111111111111111111111111111111111111111111');
        navigator(`/edit-expense-type/${id}`)
    }

    function deleteExpenseTypeById(id){
        deleteExpenseType(id);
    }

   return (
            <div className='container'>
                  <button className={'btn btn-primary mb-2'} onClick={addNewExpenseType}>Add Expense Type</button>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th><th>Description</th><th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                expenseTypes.map(expenseType => 
                                    <tr key={expenseType.id}>
                                        <td>{expenseType.name}</td>
                                        <td>{expenseType.description}</td>
                                        <td>
                                            <button className='btn btn-info' onClick={()=>{updateExpenseType(expenseType.id)}}>update</button>
                                            <button className='btn btn-info' onClick={()=>{deleteExpenseTypeById(expenseType.id)}}>delete</button>
                                        </td>
                                    </tr>        
                                    )
                            }
                            
                        </tbody>    
                    </table>
                
            </div>
        
        );

}
export default ListExpenseTypeComponent