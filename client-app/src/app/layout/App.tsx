import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
import { useStore } from './stores/store';
import { useEffect } from 'react';
import ModalContainer from '../common/modals/ModalContainer';
function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();
  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])
  return (

    
    //we are not allowed to return 2 items inside a react component (navbar  and container)
    //this empty tag is a shorcut to fragment , we are returning a single element with 2 children
    

    //ean to pathname einai to homepage phgainei alliows ypoloipa 
    <> 
      <ScrollRestoration />
      <ModalContainer/>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
        {location.pathname === '/' ? <HomePage /> : (
          <>
          <NavBar />
          <Container style={{marginTop:'7em'}}>
            <Outlet />
          </Container>
          </>
        )} 
      
      
    </>  
      
    
  );
}

export default observer(App);
