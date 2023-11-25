import './App.css';
import logo from './asset/logo.png'
import dc from './asset/dc.png'

function App() {
  return (
    <div className="App">
      <header className="Anakapalli-Collectorate">
        <h1 className="AnakapalliCollectorate">Anakapalli Collectorate</h1>
        <img src={logo} height={70} width={80} className="logo"/>
        <div>
        <img src={dc} height={70} width={80} className="dc"/>
        <h3 className="dcname" >Sri Pattanshetti Ravi  IAS</h3>
        <h4 className="dcname1" >Collector & District Magistrate</h4>

        </div>
             
      </header>
      <nav className="nav">
      
    
    <a href="#"className="link">Home</a>

    <div class="dropdown">
    <button class="dropbtn">Dashboards</button>
    <div class="dropdown-content">
      <a href="#item1">Gsws</a>
      <a href="#item2">Re-survey</a>
      <a href="#item3">Medical Department</a>
    </div>
  </div>
    <a href="#"className="link">Meetings </a>
    <a href="#"className="link">Contact</a>
    <a href="#"className="Login">Login</a>

      </nav>
      <div>
  
      <h3 className="h3">District Level VC/Meeting Booking Status as on DD-MM-YYYY</h3>
      </div>
      <div>
        <table className="table"> 
          <tr>
            <th>S.NO</th>
            <th>Booking Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Subject</th>
            <th>Participants</th>
            <th>Department</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
          <tr>
          <td></td>
          </tr>
        </table>
      </div>
    </div>
    
  );
}

export default App;
