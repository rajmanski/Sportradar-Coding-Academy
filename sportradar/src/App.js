import { useEffect, useState } from 'react';
import './App.css';
import { MainTable } from './components/MainTable/MainTable';

function App() {

  const [matchData, setMatchData] = useState(null);

  const getApiData = async () => {
    const options = {
      method: "GET",
      headers: new Headers({ 'content-type': 'application/json',  'Host': "api.sportradar.us"}),
      mode: 'no-cors'
  };
    const response = await fetch('/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=skf75wdkhwhs9fwepexhuar3'
    ,options);
    const data = await response.json();
    console.log(data);
    setMatchData(data);
  }

  useEffect(() => {
    getApiData();
  }, [])


  return (
    <>
    <h1>Ekstraklasa 2020/2021</h1>
      {matchData &&  (
        <MainTable matchData={matchData}/>
      )}
    </>
  );
}

export default App;
