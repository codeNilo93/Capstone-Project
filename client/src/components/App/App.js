import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Header from '../Header/Header'
import Hello from '../Hello/Hello'
import Login from '../Login/Login'
import CardList from "../CardList/CardList"
import Form from '../Form/Form'
import AdventureMap from '../AdventureMap/AdventureMap'
import Footer from '../Footer/Footer'
import Profile from '../Profile/Profile'




function App({ data }) {

  const [locations, setlocations] = useState(data)

  return (
    <Wrapper>
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
          <CardList locations={locations}/>
        </Route>
        <Route path="/form">
          <Form onCreateNewLocation={handleCreateNewLocation} />
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
    </Wrapper>
  )
  function handleCreateNewLocation(newLocation){
    const newLocations = [newLocation, ...locations]
    setlocations(newLocations)
  }
}

export default App

const Wrapper = styled.section`
height: 100vh;
max-width: 600px;
display: grid;
`