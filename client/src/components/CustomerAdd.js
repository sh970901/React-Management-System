import React from 'react'
import { post } from 'axios';
import { useState } from 'react';

const CustomerAdd = (props) => {



    const [file, setFile] = useState(null)
    const [userName, setUserName]= useState("")
    const [birthday, setBirthday]= useState("")
    const [gender, setGender] = useState("")
    const [job, setJob] = useState("")
    const [fileName, setFileName] = useState("")

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.value);
    }
    const handleName = (e) => {
        e.preventDefault();
        setUserName(e.target.value)
    }

    const handleBirthday = (e) => {
        e.preventDefault();
        setBirthday(e.target.value)
    }

    const handleGender = (e) => {
        e.preventDefault();
        setGender(e.target.value)
    }
    const handleJob = (e) => {
        e.preventDefault();
        setJob(e.target.value)
    }



    const handleFormSubmit = (e) => {
        e.preventDefault()
        addCustomer()
            .then((response) => {
                console.log(response);
                props.stateRefresh();
            })  
        setFile(null)
        setFileName("")
        setBirthday("")
        setGender("")
        setUserName("")
        setJob("")
        console.log('gg')
        
        // window.location.reload();
    }
     

    const addCustomer = () => {
        
            const url = 'http://localhost:5000/api/customers'
            const formData = new FormData();
            formData.append('image', file);
            formData.append('name', userName);
            formData.append('birthday', birthday);
            formData.append('gender', gender);
            formData.append('job', job);
            console.log(formData)
            

            const config = {
                headers: {
                    
                    'content-type': 'multipart/form-data'
                    
                }
            }
            return post(url, formData, config);
        }
        return (
            <div>
                <form onSubmit={handleFormSubmit}>
                    <h1>인원 추가</h1>
                    프로필 이미지: <input type="file" name="file" file={file} value={fileName} onChange={handleFile} /><br />
                    이름: <input type="text" name="userName" value={userName} onChange={handleName}></input><br></br>
                    생년원일: <input type="text" name="birthday" value={birthday} onChange={handleBirthday}></input><br></br>
                    성별: <input type="text" name="gender" value={gender} onChange={handleGender}></input><br></br>
                    직업: <input type="text" name="job" value={job} onChange={handleJob}></input><br></br>
                    <button type="submit">추가하기</button>
                </form>
            </div>
        )
    }
export default CustomerAdd










// state = {
    //     file: null,
    //     userName: '',
    //     birthday: '',
    //     gender: '',
    //     job: '',
    //     fileName: ''
    // }
    // handleFormSubmit = (e) => {
    //     e.preventDefault()
    //     addCustomer()
    //     .then((response)=>{
    //         console.log(response.data);
    //     })
    // }

    // handleFileChange = (e) => {
    //     setState({
    //         file: e.target.files[0],
    //         fileName: e.target.value 
    //     })
    // }
    // handleValueChange = (e) => {
    //     let nextState = {};
    //     nextState[e.target.name] =e.target.value
    //     setState(nextState)
    // }
