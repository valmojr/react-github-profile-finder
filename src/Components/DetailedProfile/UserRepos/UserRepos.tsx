import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { RepoSearch } from "../../../GitHubType";
import RepoItem from "./RepoItem";
import { UserRepoFrame } from "./UserRepos.style";
import axios from 'axios';

export default (props: {user: string}) => {
    const { user } = useParams<string>();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [repoSerch, setRepoSearch] = useState<RepoSearch[]>();

    useEffect(() => {
        (async ()=>{
            try {
                const url = `https://api.github.com/users/${user?.toString()}/repos`;
                const res = await axios.get(url);
                setRepoSearch(await res.data);
            } catch (error) {
                console.log(`Error while searching for ${user}: ${error}`);
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [user])
    
    if (loading) return (
        <UserRepoFrame>
            <h3>Retrieving Repos</h3>
        </UserRepoFrame>
    )
    if (error) return (
        <UserRepoFrame>
            <h2>Error while getting {user} repos</h2>
        </UserRepoFrame>
    )
    if (repoSerch?.length === 0) return <h1 >There's no Repos!</h1>
    return(
        <UserRepoFrame data-testid='repo-search'>
            <h4>Repos:</h4>
            {
                repoSerch?.map((repo, index) => <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><RepoItem repo={repo} key={index}/></a>)
            }
        </UserRepoFrame>
    );
}