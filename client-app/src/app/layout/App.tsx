import { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from './stores/store';
import { observer } from 'mobx-react-lite';
function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  return (
      //we are not allowed to return 2 items inside a react component (navbar  and container)
      //this empty tag is a shorcut to fragment , we are returning a single element with 2 children
      <>
        <NavBar />
        <Container style={{marginTop:'7em'}}>
          <ActivityDashboard />
        </Container>
        
        </>  
      
    
  );
}

export default observer(App);
