import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchButton from '../../Components/Search/SearchButton/SearchButton';
import SearchForm from '../../Components/Search/SearchForm/SearchForm';

const SearchFrame = () => {
    const [search, setSearch] = useState<string>();
    
    const preventRefresh = (event: any) => {
        event.preventDefault();
    }

    return (
        <div data-testid='SearchFrame'>
            <h1>GitHub Profile Finder</h1>
            <SearchForm onSubmit={preventRefresh}>
                <input
                    style={{
                        height: '36px',
                        fontSize: '32px'
                    }}
                    onChange={event => {
                        setSearch(event.target.value)
                    }}
                />
                <Link to={'/search-profile/'+search}>
                <SearchButton/>
                </Link>
            </SearchForm>
        </div>
    )
}

export default SearchFrame;