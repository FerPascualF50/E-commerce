import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsuscribeFromAuth = null;

  // cliclo de vida en clases, didMonut(montado), atualizado y unMount(desmontado)

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanges(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapShot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth })
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} /> //mismo nombre currentUser por buenas practicas
        <Routes>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sigin' component={SignInAndSignUpPage} />
        </Routes>
      </div>
    );
  }
}


export default App;
