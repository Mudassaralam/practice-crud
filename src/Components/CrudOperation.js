import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit , FaRegTrashAlt} from 'react-icons/fa'

function CrudOperation(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [list,setList] = useState([]);
    
    const formhandler = (e)=>{
            e.preventDefault();
            console.log(name,email);
            const data = {name,email};
            if(name && email){
                setList((li)=>[...li,data]);
                setName('');
                setEmail('');
            }
    }
    const removeitem = (index)=>{
        // console.log(index);
        setList(list.filter((o, i) => index !== i))          
    }
    const editAbleitem = ()=>{
       
    }
    return(
        <>
        <div className='container'>
        <div className='row'>
        <div className='col-md-8 offset-2'>
            <h1>Crud Operations</h1>
            <form onSubmit={formhandler}>
                <input type='text' placeholder='Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                <input type='email' placeholder='Email' className='form-control'     value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <button type='submit' className='btn btn-primary'>Add</button>
                
            </form>
            </div>
            </div>
            </div>
            {/* {
                list.map((e,index)=>{
                    return(
                        <div>
                            <p>{e.name}</p>
                            <p>{e.email}</p>

                        </div>
                    )
                })
            } */}
            <Table variant='dak'>
                <thead>
                    <tr>
                        <td># Sr No</td>
                        <td>Name</td>
                        <td>Email Address</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td style={{cursor:'pointer'}}><FaEdit onClick={editAbleitem}/></td>
                                    <td style={{cursor:'pointer'}}><FaRegTrashAlt onClick={() => removeitem(index)}/></td>
                                    {/* <td style={{cursor:'pointer'}}><FaRegTrashAlt /></td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default CrudOperation;