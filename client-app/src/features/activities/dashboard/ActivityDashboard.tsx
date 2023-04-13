import { Grid } from 'semantic-ui-react';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import ActivityDetails from './details/ActivityDetails';
import { useStore } from '../../../app/layout/stores/store';
import { observer } from 'mobx-react-lite';



export default observer(function ActivityDashboard(){
    
        const {activityStore} = useStore();
        const {selectedActivity, editMode} = activityStore;
        return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {/* Den theloume ta details otan eiamste se edit mode */}
                {selectedActivity && !editMode &&
                <ActivityDetails />}
                {/*we only want to display activity form if we are in edit mode */}
                {editMode &&
                <ActivityForm />}
            </Grid.Column>
        </Grid>
    )
})