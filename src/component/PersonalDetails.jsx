import { Box, TextField, Radio, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import { useFormik } from "formik"
import Button from '@mui/material/Button';
import { userSchema } from "../schemas"
import AddMemberModal from './AddMemberModal'
import { Modal, Typography } from '@mui/material'


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

    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setModal(true)
        setOpen(true)
    };

    const handleClose = () => setOpen(false);



    return (
        <Box sx={{ marginTop: "20px" }}>
            <form onSubmit={handleSubmit} noValidate autoComplete='off'>
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
                    <TextField error={Boolean(errors.email)}
                        helperText={errors.email && touched.email ? errors.email : " "} type='email' id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} label="email" variant="outlined" />
                </Box>
                <Box sx={{
                    marginBottom: "20px"
                }}>
                    <TextField error={Boolean(errors.phone)}
                        helperText={errors.phone && touched.phone ? errors.phone : " "} type='text' id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} label="phone" variant="outlined" />
                </Box>
                <Box sx={{
                    marginBottom: "20px"
                }}>
                    <FormControlLabel label="add members" control={<Radio checked={selectedValue === "add members"} value="add members" onChange={(e) => setSelectedValue(e.target.value)} />} />
                </Box>
                {selectedValue === "add members" && <Box sx={{
                    marginBottom: "20px"
                }}>
                    <Button type='submit' onClick={handleOpen} variant="contained">Add member</Button>
                </Box>}
            </form>
            {modal && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AddMemberModal />
                </Modal>

            )}
        </Box>
    )
}

export default PersonalDetails