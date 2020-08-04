import React from 'react';
const api = {
  key: 'ff8525aff18b5a1d92fb8872c62066a6',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const dateBuilder = d => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date} ${year}`;
  }

  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...' />
        </div>
        <div className='location-box'>
          <div className='location'>
            Lake Oswego, OR
          </div>
          <div className='date'>
            {dateBuilder(new Date())}
          </div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            85 degrees
          </div>
          <div className='weather'>
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
