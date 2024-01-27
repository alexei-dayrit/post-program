import './App.css';
import StopLight from './StopLight';

function App() {

  return (
    <div className='app-container'>
      <StopLight />
      <StopLight stopDelay={2000} slowDelay={1000} goDelay={3000}/>
    </div>
  );
}

export default App;
