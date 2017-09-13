const React = require('react');
const WeatherInput = require('./WeatherInput');

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Main Header</h1>
      </header>
      <div className='content' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <WeatherInput layout='column'/>
      </div>
    </div>
  );
}

module.exports = App;
