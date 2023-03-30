import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/models/activity';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import ActivityDetails from './details/ActivityDetails';

interface Props{
    //pername syanrthseis apo to app.tsx kai prepei na dhlwsoume oti kati epistrefoun dld twra tipota
    activities: Activity[];
    selectedActivity:   Activity | undefined;
    selectActivity: (id: string) => void;
    //we pass cancel to activity details
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm:() => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string)    => void;
}

export default function ActivityDashboard({activities, selectActivity
    ,selectedActivity,cancelSelectActivity,
    editMode,openForm,closeForm,createOrEdit,deleteActivity}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}
                 selectActivity={selectActivity}
                 deleteActivity={deleteActivity}
                 />
            </Grid.Column>
            <Grid.Column width='6'>
                {/* Den theloume ta details otan eiamste se edit mode */}
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}  
                />}
                {/*we only want to display activity form if we are in edit mode */}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>}
            </Grid.Column>
        </Grid>
    )
}