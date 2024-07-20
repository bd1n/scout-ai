import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

function Home(){
    return(
        <div>
            <Header/>
            <div className='home-background'>
                <SearchBar/>
            </div>
        </div>
    )

}

export default Home