// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import menu from './assets/menu-top-xs.png'
import logoIronhack from './assets/ironhack-logo.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'


function App() {


  return (
    <>
  <div className='global-container'>
        <div className='dark-square'>

            <div className='content-dark-square'>
                <nav className='nav-bar-logo'>
                    <img src={logoIronhack} alt="logo_ironhack"/>
                    <img className='menu-nav-bar' src={menu} alt="menu"/>
                </nav>

                <div className='title'>
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                </div>

                <div>
                    <button className='btn-awesome'>Awesome!</button>
                </div>
            </div>

        </div>

        <div className='footer'>

            <div className='ul-container'>
                <ul>
                  <li className='li-image'><img src={icon1} alt=''/></li>
                  <li className='li-title'>Declarative</li>
                  <li className='li-text'>React makes it painless to crate interactive UIs.</li>
                </ul>
            </div>

            <div className='ul-container'>
                <ul>
                  <li className='li-image'><img src={icon2} alt=''/></li>
                  <li className='li-title'>Component</li>
                  <li className='li-text'>Build encapsulated components that manage their state.</li>
                </ul>
            </div>

            <div className='ul-container'>
                <ul>
                  <li className='li-image'><img src={icon3} alt=''/></li>
                  <li className='li-title'>Single-Way</li>
                  <li className='li-text'>A set of immutable values are passed to the component's.</li>
                </ul>
            </div>

            <div className='ul-container'>
                <ul>
                  <li className='li-image'><img src={icon4} alt=''/></li>
                  <li className='li-title'>JSX</li>
                  <li className='li-text'>Statically-typed, designed to run on modern browsers.</li>
                </ul>
            </div>

        </div>

  </div>

    </>
  )
}

export default App
