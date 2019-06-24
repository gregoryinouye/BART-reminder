import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';

import StationForm from './StationForm.jsx';
import StationSchedule from './StationSchedule.jsx';
import UserLogin from './UserLogin.jsx';

import { BART_API_KEY } from '../../server/API_keys.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      etd: {},
      isLoggedIn: false,
      minToStation: 0,
      phoneNumber: '',
      station: '',
      stationName: '',
      stationList: [{"name":"12th St. Oakland City Center","abbr":"12TH"},{"name":"16th St. Mission","abbr":"16TH"},{"name":"19th St. Oakland","abbr":"19TH"},{"name":"24th St. Mission","abbr":"24TH"},{"name":"Antioch","abbr":"ANTC"},{"name":"Ashby","abbr":"ASHB"},{"name":"Balboa Park","abbr":"BALB"},{"name":"Bay Fair","abbr":"BAYF"},{"name":"Castro Valley","abbr":"CAST"},{"name":"Civic Center/UN Plaza","abbr":"CIVC"},{"name":"Coliseum","abbr":"COLS"},{"name":"Colma","abbr":"COLM"},{"name":"Concord","abbr":"CONC"},{"name":"Daly City","abbr":"DALY"},{"name":"Downtown Berkeley","abbr":"DBRK"},{"name":"Dublin/Pleasanton","abbr":"DUBL"},{"name":"El Cerrito del Norte","abbr":"DELN"},{"name":"El Cerrito Plaza","abbr":"PLZA"},{"name":"Embarcadero","abbr":"EMBR"},{"name":"Fremont","abbr":"FRMT"},{"name":"Fruitvale","abbr":"FTVL"},{"name":"Glen Park","abbr":"GLEN"},{"name":"Hayward","abbr":"HAYW"},{"name":"Lafayette","abbr":"LAFY"},{"name":"Lake Merritt","abbr":"LAKE"},{"name":"MacArthur","abbr":"MCAR"},{"name":"Millbrae","abbr":"MLBR"},{"name":"Montgomery St.","abbr":"MONT"},{"name":"North Berkeley","abbr":"NBRK"},{"name":"North Concord/Martinez","abbr":"NCON"},{"name":"Oakland International Airport","abbr":"OAKL"},{"name":"Orinda","abbr":"ORIN"},{"name":"Pittsburg/Bay Point","abbr":"PITT"},{"name":"Pittsburg Center","abbr":"PCTR"},{"name":"Pleasant Hill/Contra Costa Centre","abbr":"PHIL"},{"name":"Powell St.","abbr":"POWL"},{"name":"Richmond","abbr":"RICH"},{"name":"Rockridge","abbr":"ROCK"},{"name":"San Bruno","abbr":"SBRN"},{"name":"San Francisco International Airport","abbr":"SFIA"},{"name":"San Leandro","abbr":"SANL"},{"name":"South Hayward","abbr":"SHAY"},{"name":"South San Francisco","abbr":"SSAN"},{"name":"Union City","abbr":"UCTY"},{"name":"Walnut Creek","abbr":"WCRK"},{"name":"Warm Springs/South Fremont","abbr":"WARM"},{"name":"West Dublin/Pleasanton","abbr":"WDUB"},{"name":"West Oakland","abbr":"WOAK"}],
      time: '',
      trainEtd: '',
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
    this.setReminder = this.setReminder.bind(this);
  }

  calculateRealEtd(retrievalTime, minToDeparture) {
    return moment(retrievalTime.slice(0, 8), 'hh:mm:ss').add(minToDeparture, 'minutes');
  }

  getEstimatedDepartureTimes() {
    axios.get('http://api.bart.gov/api/etd.aspx', {
      params: {
        cmd: 'etd',
        orig: this.state.station,
        key: BART_API_KEY,
        json: 'y',
      }
    }).then(res => {
      const etd = {};
      const { time, station } = res.data.root;
      const stationName = station[0].name;
      station[0].etd.forEach(route => etd[route.destination] = route.estimate.map(train => train.minutes));
      this.setState({ etd, time, stationName });
    }).catch(error => console.log(error));
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleLogOut(e) {
    this.setState({ isLoggedIn: false, username: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.getEstimatedDepartureTimes();
  }
  
  handleUsernameSubmit(e) {
    const { username } = this.state;
    e.preventDefault();
    e.stopPropagation();
    axios.get(`/users/${username}`)
    .then(query => {
      const { id, phoneNumber, minToStation } = query.data[0];
      this.setState({ isLoggedIn: true, id, phoneNumber, minToStation });
    })
    .catch(error => console.log(error));
  }

  setReminder(e) {
    e.preventDefault();
    const { stationName, trainEtd, minToStation, time } = this.state;
    const realEtd = this.calculateRealEtd(time, trainEtd);
    if (trainEtd === 'Leaving') {
      alert(`You won't make this train since it is already leaving the station. Please select a later train.`);
    } else if (moment(realEtd).diff(moment().add(minToStation, 'minutes'), 'minutes') <= 0) {
      alert(`You won't make this train since it takes you ${minToStation} min to get to the station. Please select a later train.`);
    } else {
      // post reminder to server
      // setTimeout(alert('test1'), Number(moment(realEtd).subtract(5, 'm').fromNow(true).split(' ')[0])*60000)
      // setTimeout(alert('test2'), Number(moment(realEtd).subtract(2, 'm').fromNow(true).split(' ')[0])*60000)
    }
  }

  render() {
    return (
      <div>
        <br></br>
        {this.state.isLoggedIn ? (
          <div>
            <div>
              <div><button type="button" value="Logout" onClick={this.handleLogOut}>Log out as {this.state.username}</button></div>
              <div>Reminders will be sent to {this.state.phoneNumber.length > 0 ? 'your phone number on file' : 'OUTER SPACE since you did not enter a phone number'}.</div>
              <div>Reminder will include {this.state.minToStation} min to reach the station.</div>
            </div>
            <br></br>
            <StationForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} stationList={this.state.stationList}/>
            <br></br>
            {Object.keys(this.state.etd).length > 0 ? 
              <StationSchedule
                etd={this.state.etd}
                handleChange={this.handleChange}
                setReminder={this.setReminder}
                stationName={this.state.stationName}
                time={this.state.time} /> : null}
            <br></br>
            
          </div>
        ) : <UserLogin handleChange={this.handleChange} handleSubmit={this.handleUsernameSubmit} />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
