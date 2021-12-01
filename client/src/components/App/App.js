import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { saveToLocal, loadFromLocal } from '../localStorage/localStorage'

import Header from '../Header/Header'
import Login from '../Login/Login'
import LocationList from '../LocationList/LocationList'
import Form from '../Form/Form'
import AdventureMap from '../Map/AdventureMap/AdventureMap'
import Footer from '../Footer/Footer'

function App({ data }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeUser, setActiveUser] = useState('')

  function handleLogin(username) {
    setIsLoggedIn(!isLoggedIn)
    setActiveUser(username)
  }

  const [locations, setlocations] = useState(
    loadFromLocal('localActivities') ?? data
  )
  localStorage.clear()

  return (
    <Wrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {!isLoggedIn ? (
              <Login onLogin={handleLogin} />
            ) : (
              <LocationList letActiveUser={activeUser} locations={locations} />
            )}
          </Route>
          <Route exact path="/home">
            <LocationList locations={locations} />
          </Route>
          <Route path="/form">
            <Form onCreateNewLocation={handleCreateNewLocation} />
          </Route>
          <Route path="/adventure">
            <AdventureMap locations={locations} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Wrapper>
  )
  function handleCreateNewLocation(newLocation) {
    const newLocations = [newLocation, ...locations]
    setlocations(newLocations)
    saveToLocal('localActivities', newLocations)
  }
}

export default App

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 4rem;
  grid-template-areas: 'main' 'footer';
`
