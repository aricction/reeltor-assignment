//import './App.css';
import './index.css';
import Card from './components/Card';
import SideBar from './components/sideBar';
import Navbar from './components/navbar';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    
      <div style={{marginLeft:"112px"}}>
        <Navbar />
      </div>

     
      <div style={{ display: 'flex', flex: 1, marginTop:"-100px" }}>
      
        <div style={{ width: '250px'}}>
          <SideBar />
        </div>

       
        <div style={{ flex: 1, padding: '20px' }}>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
