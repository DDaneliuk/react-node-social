import React from 'react';
import {useParams} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";

const ProfilePageParams = () => {
    let params = useParams();
    return (
        <ProfileContainer params={params}/>
    )
}

export default ProfilePageParams
