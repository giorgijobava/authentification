import './App.css';
import AppRoutes from './AppRoutes';
import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <div className="App">
          <NavBar />
          <AppRoutes />
        </div>
  );
}

export default App;
