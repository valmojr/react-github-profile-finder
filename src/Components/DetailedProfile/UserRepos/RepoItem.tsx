import { RepoSearch } from "../../../GitHubType";
import { RepoItemFrame } from "./UserRepos.style";

export default (props: {repo: RepoSearch}) => {
    return (
        <RepoItemFrame data-testid='RepoItemFrame'>
            <h3>{props.repo.name}</h3>
            <h4>{props.repo.description}</h4>
            <h5>{props.repo.language}</h5>
        </RepoItemFrame>
    );
}