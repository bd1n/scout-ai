import { AppBar, Button, Toolbar } from '@mui/material';
import '../styles/Header.css'
function Header(){

    return(
        <AppBar className='header' position="static" sx={{bgcolor: 'white', color: 'black'}}>
            <Toolbar>
                <h2>Scout AI</h2>
                <div className='buttons'>
                    <Button sx={{backgroundColor: 'white', color: 'black', paddingRight: '20px'}}>Log In</Button>
                    <Button sx={{backgroundColor: 'black', color: 'white'}}>Sign Up</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

