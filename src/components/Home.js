import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return <div className='Home'>
      <header>
        <Link to='/'><h1>Messenger</h1></Link>
      </header>
    </div>
  }
}

export default Home
