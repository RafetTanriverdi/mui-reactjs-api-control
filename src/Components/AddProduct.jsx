import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Button from '@mui/material/Button';
import TableCategories from './TableCategories';



function AddProduct() {


    const [name, setname] = useState("");
    const [description, setdescription] = useState("");



    const handleSubmit = (e) => {
        let data = {
            description: description,
            name: name
        };

        axios.post("https://northwind.vercel.app/api/categories", data)
            .then(response => (response.data))
    }

  




    return (
        <div>
            < form className='product-container' onSubmit={handleSubmit} >

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        defaultValue=""
                        onChange={(e) => setname(e.target.value)}

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        defaultValue=""
                        onChange={(e) => setdescription(e.target.value)}

                    />
                </Box>

                <Button className='btn' variant="contained" size='medium' type='submit' >Add</Button>
            </form>

          
                    <TableCategories/>
        </div>


    );

}

export default AddProduct
