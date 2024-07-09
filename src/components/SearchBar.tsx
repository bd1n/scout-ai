import TextField from '@mui/material/TextField';
import '../styles/SearchBar.css'
function SearchBar() {
    return(
        <TextField className={'searchBar'} label={"Ask the scouts"} variant={'outlined'} autoComplete='off'></TextField>
    )
}

export default SearchBar;