import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
function App() {
  const location = useLocation();
  return (

    
    //we are not allowed to return 2 items inside a react component (navbar  and container)
    //this empty tag is a shorcut to fragment , we are returning a single element with 2 children
    

    //ean to pathname einai to homepage phgainei alliows ypoloipa 
    <> 
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
