import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import countries from '../countries.json';
import MenuItem from '@mui/material/MenuItem';
import { MuiTelInput } from 'mui-tel-input'





function AddSupplier() {
  
    const [companyName, setcompanyName] = useState("");
    const [contactName, setcontactName] = useState("");
    const [contactTitle, setcontactTitle] = useState("");
    const [street, setstreet] = useState("");
    const [country, setcountry] = useState();
    const [city, setcity] = useState("");
    const [region, setregion] = useState("");
    const [postalCode, setpostalCode] = useState("");
    const [phone, setphone] = useState("");


    const handleSubmit = (e) => {
       
        let data = {
            companyName: companyName,
            contactName: contactName,
            contactTitle: contactTitle,
            address: {
                country: country,
                city: city,
                street: street,
                region: region,
                postalCode: postalCode,
                phone: phone

            }
        }

        axios.post("https://northwind.vercel.app/api/suppliers", data)
            .then(res => (res.data))
    }

    const handleChange = (newPhone) => {
        setphone(newPhone)
      }

      console.log(countries)
      
    return (
        <div  >
            <form onSubmit={handleSubmit} style={{ width: "80%", margin: "25px auto", }}>

                <Box component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '30ch', },
                        justifyContent: "center", alignItems: "flex-end "

                    }}
                    noValidate
                    autoComplete="off">

                    <TextField
                        required
                        id="filled-required"
                        label="Company Name"
                        defaultValue=""
                        onChange={(e) => setcompanyName(e.target.value)}
                        variant="filled"
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Contact Name"
                        defaultValue=""
                        onChange={(e) => setcontactName(e.target.value)}
                        variant="filled"
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Contact Title"
                        defaultValue=""
                        onChange={(e) => setcontactTitle(e.target.value)}
                        variant="filled"
                    />


                    <TextField
                        required
                        id="filled-select-currency"
                        select
                        label="Select"
                        
                        helperText="Please select your Country"
                        variant="filled"
                        onChange={(e) => setcountry(e.target.value)}
                        
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.id} value={option.country }  selected="Turkey">
                                {option.country}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="filled-required"
                        label="City"
                        defaultValue=""
                        onChange={(e) => setcity(e.target.value)}
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="Region"
                        defaultValue=""
                        onChange={(e) => setregion(e.target.value)}
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="Street"
                        defaultValue=""
                        onChange={(e) => setstreet(e.target.value)}
                        variant="filled"
                    />
                    <TextField
                        id="filled-required"
                        label="Postal Code"
                        defaultValue=""
                        type="number"
                        onChange={(e) => setpostalCode(e.target.value)}
                        variant="filled"
                    />
                    <MuiTelInput value={phone} onChange={handleChange} 
                    variant="filled"
                    defaultCountry='TR'
                    />
                    





                </Box>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>

                    <Button sx={{ width: "150px" }} className='btn' variant="contained" size='medium' type='submit' >Add</Button>
                </div>
            </form>

            
        </div>
    )
}

export default AddSupplier