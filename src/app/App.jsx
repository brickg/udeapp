import { Button } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Re-events</h1>
     <button className='ui icon red button'>
      <i className='user icon'/> CSS Button
     </button>
     <Button icon='user' content='React Button' color='green' />
    </div>
  );
}

export default App;
