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
        <AppBar position='static'>
            <HeaderStyles>
                {/* <Toolbar> */}
                    <Typography variant="h6" gutterBottom>
                        family profile
                    </Typography>
                {/* </Toolbar> */}
            </HeaderStyles>
        </AppBar>
    )
}

export default Header