const React = require('react');

function App() {
  return (
    <div id='page'>
      <header>
        <h1>Main Header</h1>
      </header>
      <div id='content'>
        <form>
          <label>Enter a City and State
            <input type='text' name='location' size='15' placeholder='Muncie, IN'/>
          </label>
          <input type='submit' name='get-weather' value='Get Weather'/>
        </form>
      </div>
    </div>
  );
}

module.exports = App;
