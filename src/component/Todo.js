import React, { useEffect, useState } from "react";
import { EmployeData } from "./EmployeData";
import Table from 'react-bootstrap/Table';

function Todo(){
    const[empData,setEmp]=useState([]);
    const[id,setId]=useState(0);
    const[firstName,setFname]=useState('');
    const[lastName,setLname]=useState('');
    const[age,setAge]=useState('');
    const[setUpdateFlag,setUpdFlag]=useState(false);
    useEffect(()=>{
        setEmp(EmployeData);
    },[]);
    const handleDelete=(id)=>{
       if(window.confirm("Tere ko sach me nikalna he ??")){ 
       const tempEmp=empData.filter(cur=>cur.id!==id)
       setEmp(tempEmp);
       }
    }
    const handleEdit=(id)=>{
        const tempEmp=empData.filter(cru=>cru.id===id);
        setUpdFlag(true);
        setId(id);
        setFname(tempEmp[0].fName);
        setLname(tempEmp[0].lName);
        setAge(tempEmp[0].age);
    }
    const handleSave=(e)=>{
        const dt=[...empData];
        const newObject={
            id:empData.length+1,
            srNo:"",
            fName:firstName,
            lName:lastName,
            age:age
        }
        dt.push(newObject);
        setEmp(dt);
    }
    const handleUpdate=()=>{
        const index=empData.map((temp)=>{
            return temp.id;
        }).indexOf(id);
        const dt=[...empData];
        dt[index].fName=firstName;
        dt[index].lName=lastName;
        dt[index].age=age;
        console.log(dt);
        setEmp(dt);
    }
    const handleClear=()=>{
        setUpdFlag(false);
        setFname('');
        setLname('');
        setAge('');
    }
    
    return(<div className="App">
        <div className="add-update">
            <div>
                <label>First Name
                <input type="text" placeholder="FirstName" onChange={(e)=>setFname(e.target.value)} value={firstName}/>
                </label>
            </div>    
            <div>
                <label>Last Name
                <input type="text" placeholder="lastName" onChange={(e)=>setLname(e.target.value)} value={lastName}/>
                </label>
            </div>
            <div>
                <label>Age
                <input type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)} value={age}/>
                </label>
            </div>
            <div>
                {
                    setUpdateFlag!==true?
                    <button onClick={(e)=>handleSave(e)}>Save</button>
                    :
                    <button onClick={handleUpdate}>Update</button>
                }
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>SrNo.</th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age </th>
                    <th>Action</th>
                </tr>
                {empData.map((item,index)=>{
                    return (<tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.id}</td>
                        <td>{item.fName}</td>
                        <td>{item.lName}</td>
                        <td>{item.age}</td>
                        <td><button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                            <button onClick={()=>{handleEdit(item.id)}}>Edit</button>
                        </td>
                </tr>);
                })}
            </thead>
        </table>
    </div>);
}
export default Todo;
