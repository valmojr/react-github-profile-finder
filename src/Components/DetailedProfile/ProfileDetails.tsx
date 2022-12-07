import { DetailedProfileStyledFrame } from "./DetailedProfileFrame.style";
import UserRepos from "./UserRepos/UserRepos";

export default (props: any) => {
    return (
        <DetailedProfileStyledFrame data-testid='detailed-profile'>
            <img
            src={props.user.avatar_url}
            style={{
                height:'200px',
                borderRadius:'50%'
                }}
            />
            <h2>{props.user.name}</h2>
            <p className='userbio'>{props.user.bio}</p>
            <p className='userlocation'>{props.user.location}</p>
            <UserRepos user={props.user.name}/>
        </DetailedProfileStyledFrame>
    );
}