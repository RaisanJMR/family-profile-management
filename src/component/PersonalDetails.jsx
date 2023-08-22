import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, TextField, Radio, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import { useFormik } from "formik"
import Button from '@mui/material/Button';
import { userSchema } from "../schemas"
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import dayjs from 'dayjs';


const PersonalDetails = () => {

    const onSubmit = (values, actions) => {
        const { name, email, phone } = values
        const user = {
            name, email, phone
        }
        localStorage.setItem('user', JSON.stringify(user));
        actions.resetForm()
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        validationSchema: userSchema,
        onSubmit
    })


    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null)
    console.log(dayjs(selectedDate))
    // dayjs(value.$d).format('YYYY-MM-DD')
    return (
        <Box>
            <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                <Box sx={{
                    marginBottom: "20px",
                    width: "500px"
                }}>
                    <TextField sx={{ width: "100%" }} error={Boolean(errors.name)}
                        helperText={errors.name && touched.name ? errors.name : " "}
                        type='text' id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} label="name" variant="outlined" />
                </Box>
                <Box sx={{
                    marginBottom: "20px",
                    width: "500px"
                }}>
                    <TextField sx={{ width: "100%" }} error={Boolean(errors.email)}
                        helperText={errors.email && touched.email ? errors.email : " "} type='email' id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} label="email" variant="outlined" />
                </Box>
                <Box sx={{
                    marginBottom: "20px",
                    width: "500px"
                }}>
                    <TextField sx={{ width: "100%" }} error={Boolean(errors.phone)}
                        helperText={errors.phone && touched.phone ? errors.phone : " "} type='text' id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} label="phone" variant="outlined" />
                </Box>
                <Box sx={{
                    marginBottom: "20px"
                }}>
                    <DatePicker label="Date picker" renderInput={(params) => <TextField {...params} />}
                        value={selectedDate}
                        onChange={(newVal) => {
                            setSelectedDate(newVal)
                        }}
                    />
                </Box>
                <Box sx={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <FormControlLabel label="add members" control={<Radio checked={selectedValue === "add members"} value="add members" onChange={(e) => setSelectedValue(e.target.value)} />} />
                    <Button type='submit' variant="contained">save</Button>
                </Box>
                {selectedValue === "add members" && <Box sx={{
                    marginBottom: "20px"
                }}>
                    <Link to={'/add'}>
                        <Button variant="contained">add member
                            <AddIcon />
                        </Button>
                    </Link>
                </Box>}
            </form>
        </Box>
    )
}

export default PersonalDetails