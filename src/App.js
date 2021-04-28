import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './styles/app.scss';
import Friend from './pages/friend';
import Chat from './pages/chat';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Profile from './component/Profile/Profile';
class App extends React.Component {
  state = {

  }
  render () {
    const {on} = this.props;
    return (
      <BrowserRouter>
        <div className="app">
          <Header
            // title={(location.pathnme === "/chat") ? '채팅' : '친구'}
          />
          <Switch>
            <Route exact path="/" render={(props) => <Friend {...props}/> }/>
            <Route path="/chat" component={Chat} />
            <Route path="/profile/detail" component={Profile} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
