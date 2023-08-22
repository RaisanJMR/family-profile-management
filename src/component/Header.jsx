import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const HeaderStyles = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    textTransform: "uppercase"
})
const Header = () => {
    return (
        <AppBar position='static' sx={{ marginBottom: "50px" }}>
            <HeaderStyles>
                <Typography variant="h6" gutterBottom>
                    family profile
                </Typography>
            </HeaderStyles>
        </AppBar>
    )
}

export default Header