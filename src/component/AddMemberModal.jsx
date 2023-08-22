import { Button, Modal, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { useFormik } from "formik"
import { familySchema } from "../schemas"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddMemberModal = () => {
    const onSubmit = (values, sctions) => {
        console.log(values)
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            age: "",
            phone: "",
        },
        validationSchema: familySchema,
        onSubmit
    })
    
    const [showPhone, setShowPhone] = useState(false)

    return (
        <Box sx={style}>

            <form onSubmit={handleSubmit} novalidate autoComplete='off'>
                <Box sx={{
                    marginBottom: "20px"
                }}>
                    <TextField error={Boolean(errors.name)}
                        helperText={errors.name && touched.name ? errors.name : " "}
                        type='text' id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} label="name" variant="outlined" />
                </Box>
                <Box sx={{
                    marginBottom: "20px"
                }}>
                    <TextField error={Boolean(errors.age)}
                        helperText={errors.age && touched.age ? errors.age : " "}
                        type='text' id="age" value={values.age} onChange={handleChange} onBlur={handleBlur} label="age" variant="outlined" />
                </Box>
                <Box sx={{
                    marginBottom: "20px"
                }}>
                    <TextField error={Boolean(errors.phone)}
                        helperText={errors.phone && touched.phone ? errors.phone : " "}
                        type='text' id="phone" value={values.age} onChange={handleChange} onBlur={handleBlur} label="phone" variant="outlined" />
                </Box>
                <Box>
                    <Button type='submit' variant="contained">Add member</Button>
                </Box>
            </form>

        </Box>
    )
}

export default AddMemberModal