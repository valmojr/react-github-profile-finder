import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/ResultedProfiles/LoadingSpinner';
import { DetailedUserSearch } from '../../GitHubType';
import UserRepos from '../../Components/DetailedProfile/UserRepos/UserRepos';
import axios from 'axios';
import { DetailedProfileStyledFrame } from '../../Components/DetailedProfile/DetailedProfileFrame.style';
import ProfileDetails from '../../Components/DetailedProfile/ProfileDetails';

export default () => {
    const { user } = useParams<string>();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [userSearch, setUserSearch] = useState<DetailedUserSearch>();

    useEffect(() => {
        (async ()=>{
            try {
                const url = `https://api.github.com/users/${user}`;
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

    if (loading) return <LoadingSpinner data-testid='Loading-Spinner-test-id'/>
    if (error) return <h1>Error while searching for {user}</h1>
    if (userSearch?.login === undefined) return <h1>Nothing Found</h1>
    return <ProfileDetails user={userSearch}/>
}