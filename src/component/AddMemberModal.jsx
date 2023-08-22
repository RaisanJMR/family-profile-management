import { Button, Modal, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useFormik } from "formik"
import { familySchema } from "../schemas"

const AddMemberModal = () => {

    const onSubmit = (values, actions) => {
        const { name, age, phone } = values

        const newMember = {
            id: Math.ceil(Math.random() * 1000), name, age, phone: age <= 18 ? "no phone" : phone
        }
        console.log(newMember)
        const existingMembers = JSON.parse(localStorage.getItem("members")) || [];
        const updatedMembers = [...existingMembers, newMember];
        localStorage.setItem("members", JSON.stringify(updatedMembers));
        actions.resetForm()
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


    return (
        <>
            <Box>
                <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                    <Box sx={{
                        marginBottom: "20px"
                    }}>
                        <TextField sx={{ width: "350px" }} error={Boolean(errors.name)}
                            helperText={errors.name && touched.name ? errors.name : " "}
                            type='text' id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} label="name" variant="outlined" />
                    </Box>
                    <Box sx={{
                        marginBottom: "20px"
                    }}>
                        <TextField sx={{ width: "350px" }} error={Boolean(errors.age)}
                            helperText={errors.age && touched.age ? errors.age : " "}
                            type='text' id="age" value={values.age} onChange={handleChange} onBlur={handleBlur} label="age" variant="outlined" />
                    </Box>
                    {values.age >= 18 && <Box sx={{
                        marginBottom: "20px"
                    }}>
                        <TextField sx={{ width: "350px" }} error={Boolean(errors.phone)}
                            helperText={errors.phone && touched.phone ? errors.phone : " "}
                            type='text' id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} label="phone" variant="outlined" />
                    </Box>}
                    <Box>
                        <Button type='submit' variant="contained">Add member</Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default AddMemberModal