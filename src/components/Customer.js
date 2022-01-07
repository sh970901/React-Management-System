import React from 'react'

const Customer = (props) => {
    console.log(props)
    return (
        <div>
            <CustomerProfile id = {props.id} image = {props.image} name={props.name}></CustomerProfile>
            <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job}></CustomerInfo>
        </div>
    )
}

const CustomerProfile = (props) => {
    return (
        <div>
            <img src = {props.image} alt='profile'/>
            <h2>{props.name}: {props.id}</h2>
        </div>
    )
}

const CustomerInfo = (props)=>{
    return(
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}

export default Customer
