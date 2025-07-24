import './index.css';
import HomePage from './pages/Home-Page';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>
    </>
  )
}

export default App;
