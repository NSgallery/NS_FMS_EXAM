import { useEffect, useState } from 'react';
import axios from 'axios';

function Tasks() {

    const [task, setTask] = useState([]);

    useEffect(
        () => {fetchTasks();}, []
    );

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/tasks');
            setTask(response.data);

        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className='col-sm-6 offset-sm-3'>
            <h1>Tasks</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ชื่อเรื่อง</td>
                        <td>คำอธิบาย</td>
                        <td>สถานะ</td>
                        <td>รหัสผู้ใช้งาน</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        task.data?.map(pd => (
                            <tr key={pd.id}>
                                <td>{pd.tname}</td>
                                <td>{pd.detail}</td>
                                <td>{pd.status}</td>
                                <td>{pd.id_user}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    );
}

export default Tasks;