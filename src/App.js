import {BrowserRouter} from "react-router-dom";
import './styles/app.scss';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
