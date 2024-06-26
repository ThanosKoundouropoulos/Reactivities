import { Tab, TabPane } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";
import { Profile } from "../../app/layout/models/profile";
import { observer } from "mobx-react-lite";
import ProfileFollowings from "./ProfileFollowings";
import { useStore } from "../../app/layout/stores/store";
import ProfileActivities from "./ProfileActivities";

interface Props {
    profile: Profile;
}
//AlWAYS USE OBSERVER IN EANY DATA WE LOOK FROM A STORE
export default observer(function ProfileContent({profile}: Props){
const {profileStore} = useStore();
   const panes = [
        {menuItem: 'About', render: () => <TabPane>About Content</TabPane>},
        {menuItem: 'Photos', render: () => <ProfilePhotos profile={profile}/>},
        {menuItem: 'Events', render: () => <ProfileActivities />},
        {menuItem: 'Followers', render: () => <ProfileFollowings/>},
        {menuItem: 'Following', render: () => <ProfileFollowings/>}
   ];
   
   
    return(
        <Tab
            menu={{fluid: true, vertical:true}}
            menuPosition="right"
            panes={panes}
            onTabChange={(_, data) => profileStore.setActiveTab(data.activeIndex)}
        />

    )
})