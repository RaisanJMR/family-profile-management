import { Container, Stack } from '@mui/material'
import React from 'react'
import Header from '../component/Header'
import PersonalDetails from '../component/PersonalDetails'

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='center'
                    alignItems='center'>
                    <PersonalDetails />
                </Stack>
            </Container>
        </>
    )
}

export default Home