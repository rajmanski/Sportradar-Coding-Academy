import { useEffect, useState } from 'react';
import { Route, Routes,  } from 'react-router-dom';
import { MainTable } from '../MainTable/MainTable';
import { SeasonDropdown } from '../SeasonDropdown/SeasonDropdown';


export const HomePage = () => {

  const [matchData, setMatchData] = useState(null);
  const [season, setSeason] = useState('20/21');
  const [apiQuery, setApiQuery] = useState();

  //Function that download season data from API (defaultSeason=2020/2021)
  const getSeasonData = async (season='sr:season:77453') => {
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

  //Function that check which season was clicked on dropdown menu
  const getWantedSeason = async (value) => {
    setMatchData(null);
    setSeason(value.split(' ')[1]);
    switch(value.split(' ')[1]) {
      case '20/21':
        setApiQuery('sr:season:77453');
        break;
        case '21/22':
        setApiQuery('sr:season:84320');
        break;
        case '22/23':
        setApiQuery('sr:season:94031');
        break;
        default:
          console.log('Error happened');
    }
  }

  //useEffect, which downloads API season data on the start and rerun after everydropdown menu click
  useEffect(() => {
    getSeasonData(apiQuery);
  }, [ apiQuery])

  return (
    <>
    <h1 onClick={() => console.log('lalal')}>Ekstraklasa {season}</h1>
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


