import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDasboard';
import NavBar from '../../features/nav/navBar';
import './/styles.css';

function App() {
  return (
    <>
     <NavBar/>
     <Container className='main'>
     <EventDashboard/>

     </Container>
    </>
  );
}

export default App;
