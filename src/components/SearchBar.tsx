import TextField from '@mui/material/TextField';
import '../styles/SearchBar.css'
import { useState } from 'react';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { getPlayerByName } from '../backendTest';

function SearchBar() {
    const [queryText, setQueryText] = useState('');

    const handleSubmit = async () =>{
        await getPlayerByName(queryText);
        //Set loading animation
        setQueryText('');
    }

    return(
        <div>
            <TextField className={'searchBar'} label={"Ask the scouts"} variant={'outlined'} autoComplete='off' value={queryText} onInput={(e) => setQueryText((e.target as HTMLTextAreaElement).value)}></TextField>
            <Button className={'submitSearch'} sx={{backgroundColor: 'black', height: '56px', color: 'white', "&.MuiButtonBase-root:hover": {bgcolor: "grey"}}} onClick={() => handleSubmit()}><Search/></Button>
        </div>
    )
}

export default SearchBar;