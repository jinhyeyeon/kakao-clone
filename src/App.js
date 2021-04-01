import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './styles/app.scss';
import Friend from './pages/friend';
import Chat from './pages/chat';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Friend} />
          <Route path="/chat" component={Chat} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
