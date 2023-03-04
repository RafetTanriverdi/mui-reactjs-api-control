import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import axios from 'axios';

function TableCategories() {
    const [categories, setcategories] = useState([]);
    const [loading, setloading] = useState(true);



    useEffect(() => {
        loadcategories()
    }, [])

    const loadcategories = () => {
        axios("https://northwind.vercel.app/api/categories")
        .then(res => {
            setcategories(res.data);
            setloading(false);
        })
    }


    const deletecategories = (item) => {
        setloading(true);
        axios.delete("https://northwind.vercel.app/api/categories/" + item.id)
        .then(res=>{
            loadcategories()
        })
    }

    

    let columns = [
        {
            headerName: "Id",
            field: "id",
            flex: 1
        },
        {
            headerName: "Name",
            field: "name",
            flex: 1
        },
        {
            headerName: "Description",
            field: "description",
            flex: 1
        },
        {
            headerName: "Delete",
            flex: 1,
            renderCell: (item) => {
                
                return <>
                <Button color='error'  variant="outlined"   onClick={() => {deletecategories(item);}}>Delete</Button>
                </>
            }
        }
    ]
    

    return (
        <>
            <div style={{ height: 900, width: '100%' }}>

                <DataGrid
                    rows={categories}
                    columns={columns}
                    loading={loading}
                    


                />
            </div>
        </>
    )
}

export default TableCategories