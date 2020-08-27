import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>React App Template</h1>
        </header>
      <main id="mainWrap">
        <section className="gridWrap">
          <h2>Welcome to The Grid.</h2>
          <p>This reactJS template was the result of a challenge from a close friend and mentor, and some curiosity. The purpose of this is to have an up and running ReactJS app, that is as minimal as possible.</p>
          <p>Proceed with caution. This may be a smaller app to start, but wont be as... 'comfy' as create-react-app.</p>
          <div className="theChallenge">
            <p>With that, I have one question...</p>
            <h4>What will YOU build today?</h4>
            </div>
          </section>
        </main>
      </div>
  )
}

export default App
