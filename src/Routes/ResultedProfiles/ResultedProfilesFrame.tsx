import { useEffect , useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserSearch } from '../../GitHubType';
import LoadingSpinner from '../../Components/ResultedProfiles/LoadingSpinner';
import ResultedItem from '../../Components/ResultedProfiles/ResultedItem/ResultedItem';
import axios from 'axios';

export default () => {
    const { user } = useParams<string>();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [userSearch, setUserSearch] = useState<UserSearch>();

    useEffect(() => {
        (async ()=>{
            try {
                const url = 'https://api.github.com/search/users?q=' + user;
                const res = await axios.get(url);
                setUserSearch(await res.data);
            } catch (error) {
                console.log(`Error while searching for ${user}: ${error}`);
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [user])
    
    if (loading) return <LoadingSpinner/>
    if (error) return <h1>Error while searching for {user}</h1>
    if (userSearch?.incomplete_results === true) return <h1>Nothing Found</h1>
    return(
        <div data-testid='resulted-profiles'>
            {userSearch?.items.map((user, index) => {
                return (
                    <Link to={'/detailed-profile/'+user.login}>
                        <ResultedItem key={index} user={user}/>
                </Link>
            )})}
        </div>
    );
}