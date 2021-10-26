import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components/macro'

import Header from '../Header/Header'
import Hello from '../Hello/Hello'
import Login from '../Login/Login'
import LocationList from "../LocationList/LocationList"
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
          <LocationList locations={locations}/>
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
display: grid;
grid-template-rows: auto 4rem;
grid-template-areas: 'main' 'footer';
`