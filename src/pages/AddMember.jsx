import React from 'react'
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material'
import Header from '../component/Header'
import AddMemberModal from '../component/AddMemberModal'
import Details from '../component/Details'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddMember = () => {
    return (
        <>
            <Header />
            <Container>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "30px" }}>
                    <Link to={"/"}>
                        <Button sx={{display:"flex",alignItems:"center", justifyContent: "space-between"}} variant="outlined">
                            <ArrowBackIcon /> 
                        </Button>
                    </Link>
                    <Typography variant="h4" component="h4">
                        View/Add your members
                    </Typography>
                </Box>
                <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='space-between'
                    divider={<Divider orientation='vertical' flexItem />}
                    alignItems='start'>
                    <AddMemberModal />
                    <Details />
                </Stack>
            </Container>
        </>
    )
}

export default AddMember