import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/partials/Header'
import Sidebar from './components/partials/Sidebar'
import Footer from './components/partials/Footer'

import Genre from './components/pages/Genre'
import Album from './components/pages/Album'
import Artist from './components/pages/Artist'
import Index from './components/pages/Index'

import './App.scss'

const App = props => {
  return (
    <React.Fragment>
      <Router>
        <React.Fragment>
          <Header />
          <Sidebar />
          <div className='wrapper'>
            <Switch>
              <Route path="/genre/:genreId" component={Genre} />
              <Route path="/album/:albumId" component={Album} />
              <Route path="/artist/:artistId" component={Artist} />
              <Route component={Index} />
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    </React.Fragment>
  )
}

export default App
