import './App.css';
import './components/sidebar/SideBar.css'
import './components/main.css'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
