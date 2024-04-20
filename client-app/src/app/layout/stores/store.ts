import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import { profile } from "console";
import CommentStore from "./commentStore";
//This file is the store that is goin to store our stores 
interface Store {
    activityStore: ActivityStore //classes can be used as types 
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    profileStore: ProfileStore;
    commentStore: CommentStore;

}

export const store: Store ={
    activityStore: new ActivityStore(),//instance
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore(),
    commentStore: new CommentStore()
}

export const StoreContext = createContext(store);//the stores we weill be adding in the store weill be available here 

//this hook will allow us to use stores inside our components
export function useStore() {
    return useContext(StoreContext);
}