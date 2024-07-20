import TextField from '@mui/material/TextField';
import '../styles/SearchBar.css'
import { useState } from 'react';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { getPlayerByName } from '../backendTest';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [queryText, setQueryText] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async () => {
        try{
            const queryResult = await getPlayerByName(queryText);
            navigate(`/playerpage/${queryResult.name.replace(/\s/g, '')}`)
        }
        catch(e){
            console.log(e)
            alert('Player does not exist')
        }
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