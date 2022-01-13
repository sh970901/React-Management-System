import React from 'react'

const CustomerDelete = (props) => {
    
    const deleteCustomer = function(id){
        console.log(props)
        const url = 'http://localhost:5000/api/customers/' +id;
        fetch(url, {
            method: 'DELETE'
        })
        
        props.stateRefresh();
        console.log('gg')
    }
    return (
        <div>
            <button onClick={(e)=>{deleteCustomer(props.id)}}>삭제</button>
        </div>
    )
}

export default CustomerDelete
