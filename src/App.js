import { Divider, Stack } from '@mui/material'
import Header from './component/Header'
import PersonalDetails from './component/PersonalDetails'
import Container from '@mui/material/Container'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Stack
          sx={{ width: '40%' }}
          direction='row'
          spacing={2}
          justifyContent='space-between'
          divider={<Divider orientation='vertical' flexItem />}
          alignItems='center'>
          <PersonalDetails />
  
        </Stack>
      </Container>
    </>
  )
}

export default App
