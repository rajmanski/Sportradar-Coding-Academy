import { useEffect, useState } from 'react';
import './App.css';
import { MainTable } from './components/MainTable/MainTable';
import { SeasonDropdown } from './components/SeasonDropdown/SeasonDropdown';

function App() {

  const [matchData, setMatchData] = useState(null);
  const [season, setSeason] = useState('20/21');
  const [apiQuery, setApiQuery] = useState();

  const getApiData = async (season='sr:season:77453') => {
    const options = {
      method: "GET",
      headers: new Headers({ 'content-type': 'application/json',  'Host': "api.sportradar.us"}),
      mode: 'no-cors'
  };
    const response = await fetch(`/soccer/trial/v4/en/seasons/${season}/schedules.json?api_key=skf75wdkhwhs9fwepexhuar3`
    ,options);
    
    const data = await response.json();
    console.log(data);
    setMatchData(data);
  }

  const getWantedSeason = async (value) => {
    setMatchData(null);
    setSeason(value.split(' ')[1]);
    switch(value.split(' ')[1]) {
      case '20/21':
        setApiQuery('sr:season:77453');
        console.log(apiQuery);
        break;
        case '21/22':
        setApiQuery('sr:season:84320');
        console.log(apiQuery);
        break;
        case '22/23':
        setApiQuery('sr:season:94031');
        console.log(apiQuery);
        break;
        default:
          console.log('Error happened');
    }
  }

  useEffect(() => {
    console.log(apiQuery);
    getApiData(apiQuery);
  }, [ apiQuery])


  return (
    <>
    <h1>Ekstraklasa {season}</h1>
    <SeasonDropdown getWantedSeason={getWantedSeason}/>
      {!matchData && (
        <div>Loading....</div>
      )}
      {matchData &&  (
        <MainTable matchData={matchData}/>
      )}
    </>
  );
}

export default App;
