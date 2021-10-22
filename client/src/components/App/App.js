import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header/Header'
import Hello from '../Hello/Hello'
import Login from '../Login/Login'
import CardList from "../CardList/CardList"
import Form from '../Form/Form'
import AdventureMap from '../AdventureMap/AdventureMap'
import Footer from '../Footer/Footer'
import Profile from '../Profile/Profile'


function App({ data }) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Hello />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <CardList locations={data} />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/adventure">
          <AdventureMap />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
