import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
//This file is the store that is goin to store our stores 
interface Store {
    activityStore: ActivityStore //classes can be used as types 
}

export const store: Store ={
    activityStore: new ActivityStore()//instance

}

export const StoreContext = createContext(store);//the stores we weill be adding in the store weill be available here 

//this hook will allow us to use stores inside our componente
export function useStore() {
    return useContext(StoreContext);
}