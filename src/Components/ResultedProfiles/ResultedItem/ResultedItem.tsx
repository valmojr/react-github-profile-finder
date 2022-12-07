import { GithubUser } from '../../../GitHubType';
import { ResultedItemFrame } from './ResultedItem.style';

export default (props: {user: GithubUser}) => {
    const { user } = props;
    return (
        <div data-testid='ResultedItem'>
        <ResultedItemFrame
            initial={{
                opacity: 0,
                y: 10,
                boxShadow:'1px 2px 7px 2px #222'
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.2,
                ease: "easeInOut",
            }}
            whileHover={{
                scale:1.1,
                boxShadow:'2px 3px 13px 3px #222'
            }}
            whileTap={{
                scale:0.9
            }}
        >
            <img src={user.avatar_url} alt={user.avatar_url}/>
            <h2>{user.login}</h2>
        </ResultedItemFrame>
        </div>
    );
}