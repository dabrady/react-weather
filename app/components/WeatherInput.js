const React = require('react');
const PropTypes = require('prop-types');

class WeatherInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleWeatherUpdate = this.handleWeatherUpdate.bind(this);
  }
  handleWeatherUpdate(newVal) {
    
  }
  render() {
    return (
      <form
        className='location-container'
        style={{flexDirection: this.props.layout}}>
        {this.props.label &&
          <label htmlFor='location'>
            {this.props.label}
          </label>}
        <input
          className='location-field'
          type='text'
          name='location'
          onChange={this.handleWeatherUpdate}
          placeholder='Muncie, IN'
          value={this.state.value} />
        <input
          className='btn btn-success'
          type='button'
          name='location-submit'
          onClick={this.props.onSubmit}
          value={this.props.buttonText} />
      </form>
    );
  }
}

WeatherInput.propTypes = {
  layout: PropTypes.string,
  label: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func
};

WeatherInput.defaultProps = {
  layout: 'row',
  label: 'Enter a city and state',
  buttonText: 'Get Weather'
};

module.exports = WeatherInput;
