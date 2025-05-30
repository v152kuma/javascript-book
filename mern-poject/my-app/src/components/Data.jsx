import { Card, CardHeader } from '@mui/material';
import React from 'react';
import { useEffect } from "react";
import  { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';



const Data = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        async function fetchTodos() {
            setLoading(true);
            await fetch('https://dummyjson.com/todos')
                .then(response => response.json())
                .then(data => setTodos(data.todos))
                .catch(error => console.error('Error fetching todos:', error)
                 .finally(() => setLoading(false)));
        }
        
        fetchTodos();

    }, []); 

    console.log(todos);

    const columnns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'todo', headerName: 'Todo', width: 150 },
        { field: 'completed', headerName: 'Completed', width: 120 },
        { field: 'userId', headerName: 'User ID', width: 120 }
    ];
    return (
        <Card sx={{padding: 5}}>
            {/* Render your todos here */}
            <CardHeader title="Todos List" />
            <DataGrid 
                loading={false}
                rows={todos} 
                columns={columnns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                
            />
        </Card>
    )
}

export default Data;