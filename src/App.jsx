import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
      <div className="flex-container">
  <Sidebar/>
  <div className="flex-column-container">
    <Navbar/>
    <Projects/>
  </div>
</div>
  );
}

export default App;
