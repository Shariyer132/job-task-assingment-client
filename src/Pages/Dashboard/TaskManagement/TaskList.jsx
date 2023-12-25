import axios from 'axios';
import React from 'react';

const TaskList = ({ task, refetch}) => {
    const { Name, _id} = task;

    const handleUpdateStatus = (status) =>{
        console.log(status);
        axios.patch(`http://localhost:5000/tasks/${_id}`,{status})
        .then(res=>{
            console.log(res.data);
            refetch()
        })
    }
    console.log(task, 'helo');

    return (
        <tr>
            <td>{Name} </td>
            <td></td>
            <td>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn no-animation btn-ghost btn-sm">{task.status}</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            task.status === 'TO DO' && <>
                                <button onClick={()=>{handleUpdateStatus('ON GOING')}} className='btn btn-sm mb-1'>ON GOING</button>
                                <button className='btn btn-sm' onClick={()=>handleUpdateStatus('COMPLETE')}>COMPLETE</button>
                            </> ||
                           task.status === 'ON GOING' && <>
                                <button onClick={()=>{handleUpdateStatus('TO DO')}} className='btn btn-sm mb-1'>TO DO</button>
                                <button onClick={()=>handleUpdateStatus('COMPLETE')} className='btn btn-sm'>COMPLETE</button>
                            </> ||
                            task.status === 'COMPLETE' && <>
                                <button className='btn btn-sm mb-1' onClick={()=>handleUpdateStatus('TO DO')}>TO DO</button>
                                <button onClick={()=>handleUpdateStatus('ON GOING')} className='btn btn-sm'>ON GOING</button>
                            </>
                        }
                    </ul>
                </div>
            </td>
        </tr>

    );
};

export default TaskList;