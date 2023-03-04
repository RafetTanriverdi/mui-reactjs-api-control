import React, { useState, useEffect } from 'react'
import { DataGrid, renderCell } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function Datatable() {
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);



    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        axios("https://northwind.vercel.app/api/products")
        .then(res => {
            setproducts(res.data);
            setloading(false);
        })
    }


    const deleteProducts = (item) => {
        setloading(true);
        axios.delete("https://northwind.vercel.app/api/products/" + item.id)
        .then(res=>{
            loadProducts();
            setOpen(false);
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
            headerName: "Unit Price",
            field: "unitPrice",
            flex: 1
        },
        {
            headerName: "Units In Stock",
            field: "unitsInStock",
            flex: 1
        },
        {
            headerName: "Quantity Per Unit",
            field: "quantityPerUnit",
            flex: 1
        },
        {
            headerName: "Delete",
            flex: 1,
            renderCell: (item) => {
                
                return <>
                <Button color='error'  variant="outlined"   onClick={() => { handleClickOpen();}}>Delete</Button>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are you sure you want to delete this data?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                  This is an irreversible action
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={()=>{ deleteProducts(item);}} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
                </>
            }
        }
    ]
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

   
    return (
        <>
            <div style={{ height: 900, width: '100%' }}>

                <DataGrid
                    rows={products}
                    columns={columns}
                    loading={loading}
                    


                />
            </div>
        </>
    )
}

export default Datatable