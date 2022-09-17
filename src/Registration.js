import React, { useState } from 'react';
import './Registration.css'





function Registration() {
    const[empid, setEmpId]=useState("");
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[mobileNo, setMobileNo]=useState("");
    const[dateOfJoin, setDateOfJoin]=useState("");
    const[department, setDepartment]=useState("");
    const[managerId, setManagerId]=useState("");

    const handleInputChange=(e)=>{
        const{id, value} = e.target;
        if(id==="empid"){
            setEmpId(value);
        }
        if(id==="name"){
            setName(value);
        }
        if(id==="email"){
            setEmail(value);
        }
        if(id==="password"){
            setPassword(value);
        }
        if(id==="mobileNo"){
            setMobileNo(value);
        }
        if(id==="dateOfJoin"){
            setDateOfJoin(value);
        }
        if(id==="department"){
            setDepartment(value);
        }
        if(id==="managerId"){
            setManagerId(value);
        }
        
    }
    const handleSubmit=()=>{
        console.log(empid,name,email,password,mobileNo,dateOfJoin,department,managerId);
    }
    
    
    
    
        return (
            <body>
                <form className="form">
                    <h1>Register</h1>
                    <div className="empid">
                            <label><b>Employee Id</b></label><br></br>
                            <input className="form-input" value={empid} onChange={(e)=> handleInputChange(e)} type="text" id="empid" required placeholder="Emp Id"></input>
                        </div>

                        <div className="name">
                            <label><b>Name</b></label><br></br>
                            <input className="form-input" value={name} onChange={(e)=> handleInputChange(e)} type="text" id="name" required placeholder="Name"></input>
                        </div>

                        <div className="email">
                            <label><b>Email Id</b></label><br></br>
                            <input className="form-input" value={email} onChange={(e)=> handleInputChange(e)} type="email" id="email" required placeholder="Email Id"></input>
                        </div>

                        <div className="password">
                            <label><b>Password</b></label><br></br>
                            <input className="form-input" value={password} onChange={(e)=> handleInputChange(e)} type="password" id="password" required placeholder="Password"></input>
                        </div>

                        <div className="mobileNo">
                            <label><b>Mobile Number</b></label><br></br>
                            <input className="form-input" value={mobileNo} onChange={(e)=> handleInputChange(e)} type="text" id="mobileNo" required placeholder="Mobile Number"></input>
                        </div>

                        <div className="dateOfJoin">
                            <label><b>Date Of Join</b></label><br></br>
                            <input className="form-input" value={dateOfJoin} onChange={(e)=> handleInputChange(e)} type="date" id="dateOfJoin" required placeholder="Date Of Join"></input>
                        </div>

                        <div className="department">
                            <label><b>Department</b></label><br></br>
                            <input className="form-input" value={department} onChange={(e)=> handleInputChange(e)} type="text" id="department" required placeholder="Department"></input>
                        </div>

                        <div className="managerId">
                            <label><b>Manager Id</b></label><br></br>
                            <input className="form-input" value={managerId} onChange={(e)=> handleInputChange(e)} type="text" id="managerId" required placeholder="Manager Id"></input>
                        </div>
                        <br></br>
                        <div className='footer'>

                        <button onClick={()=>handleSubmit} type="submit" class="btn">Signup</button>

                        </div>
                        <br></br>

                        <span>Already have an account? Login</span>
                  

                </form>
            </body>
        )
    }
  
export default  Registration