import React, { useEffect,useState } from 'react';
import {getExpenseTypes} from '../service/ExpenseTypeService';
import 'bootstrap/dist/css/bootstrap.min.css'

const ExpenseTypeComponent = () => {
    const [expenseTypes, setExpenseTypes] = useState([])
    useEffect(()=> {
        getExpenseTypes().then((response)=>{
            setExpenseTypes(response.data);
        }).catch(error => {
            console.log(error);
        });
    },[]);

   return (
            <div className='container'>
              
                <h3 className='text-center card-header'>Expense Types</h3>
               
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th><th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                expenseTypes.map(expenseType => 
                                    <tr key={expenseType.id}>
                                        <td>{expenseType.name}</td>
                                        <td>{expenseType.description}</td>
                                    </tr>        
                                    )
                            }
                            
                        </tbody>    
                    </table>
                
            </div>
        
        );

}
export default ExpenseTypeComponent