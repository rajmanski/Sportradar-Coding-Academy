import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MatchData.module.css";

export const MatchData = () => {
  const [showSquads, setShowSquads] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const [matchData, setMatchData] = useState(null);
  const league = matchData?.sport_event.sport_event_context.season.name;
  const date = matchData?.sport_event.start_time.split("T")[0];
  const homeTeam = matchData?.sport_event.competitors[0].name;
  const awayTeam = matchData?.sport_event.competitors[1].name;
  const stadiumInfo =
    matchData?.sport_event.venue.name +
    ", " +
    matchData?.sport_event.venue.city_name +
    ", " +
    matchData?.sport_event.venue.country_name;
  const result =
    matchData?.sport_event_status.home_score +
    " : " +
    matchData?.sport_event_status.away_score;
  const homeStats = matchData?.statistics.totals.competitors[0].statistics;
  const awayStats = matchData?.statistics.totals.competitors[1].statistics;
  const homeSquad = matchData?.statistics.totals.competitors[0].players;
  const awaySquad = matchData?.statistics.totals.competitors[1].players;

//   if (homeStats.offsides === undefined || !homeStats.offsides) {
//     homeStats.offsides = 0;
//   }
//   if (awayStats.offsides === undefined) {
//     awayStats.offsides = 0;
//   }


  const handleBackHome = () => {
    navigate('/')
  }

  const getMatchData = async (id) => {
    const options = {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
        Host: "api.sportradar.us",
      }),
      mode: "no-cors",
    };
    const response = await fetch(
      `/soccer/trial/v4/en/sport_events/${id}/timeline.json?api_key=skf75wdkhwhs9fwepexhuar3`,
      options
    );

    const data = await response.json();
    setMatchData(data);
  };

  useEffect(() => {
    getMatchData(params.id);
  }, []);

  return (
    <div className={styles.page}>
      {matchData && (
        <div className={styles.container}>
          <div className={styles.mainInfo}>
            <h3>{league}</h3>
            <h6>
              {date}, {stadiumInfo}
            </h6>
            <h2>{`${homeTeam} vs ${awayTeam}`}</h2>
            <h1>{result}</h1>
          </div>
          <div className={styles.statistics}>
            <div className={styles.row}>
                <div className={styles.categoryWrapper}>
                    <img src={require('../../images/possession.png')} alt="Ball possession icon" />
                <p>Ball possession</p>
                </div>
                <div className={styles.stats}>
                    <p>{homeStats.ball_possession} %</p>
                    <p>{awayStats.ball_possession} %</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.categoryWrapper}>
                    <img src={require('../../images/foul.png')} alt="Foul icon" />
                <p>Fouls commited</p>
                </div>
                <div className={styles.stats}>
                    <p>{homeStats.fouls}</p>
                    <p>{awayStats.fouls}</p>
                </div>
            </div>
            <div className={styles.row}>
            <div className={styles.categoryWrapper}>
                <img src={require('../../images/offside.png')} alt="Offside icon" />
                <p>Offsides</p>
            </div>
                <div className={styles.stats}>
                    <p>{homeStats.offsides}</p>
                    <p>{awayStats.offsides}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.categoryWrapper}>
                    <img src={require('../../images/redcard.png')} alt="Red card icon" />
                    <p>Red cards</p>
                </div>
                <div className={styles.stats}>
                    <p>{homeStats.red_cards}</p>
                    <p>{awayStats.red_cards}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.categoryWrapper}>
                    <img src={require('../../images/yellowcard.png')} alt="Yellow card icon" />
                    <p>Yellow cards</p>
                </div>
                <div className={styles.stats}>
                    <p>{homeStats.yellow_cards}</p>
                    <p>{awayStats.yellow_cards}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.categoryWrapper}>
                    <img src={require('../../images/shot.png')} alt="Shot icon" />
                    <p>Shots</p>
                </div>
                <div className={styles.stats}>
                    <p>{homeStats.shots_total}</p>
                    <p>{awayStats.shots_total}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.categoryWrapper}>
                    <img src={require('../../images/subs.png')} alt="Substitutions icon" />
                    <p>Substitiutons</p>
                </div>
                <div className={styles.stats}>
                    <p>{homeStats.substitutions}</p>
                    <p>{awayStats.substitutions}</p>
                </div>
            </div>
          </div>
          <button className={styles.btn} onClick={() => setShowSquads(!showSquads)}>
            Show squads
          </button>
          <div className={styles.backToHome} onClick={handleBackHome}>
            <img src={require('../../images/back.png')} alt="Go to home page icon" />
          </div>
          {showSquads && (
            <div className={styles.squads}>
              <div className={styles.playerColumn}>
                {homeSquad.map((player) => (
                  <div className={styles.player} key={player.id}>
                    <img src={require('../../images/player.png')} alt="Player icon" />
                    <p className={styles.player}>{player.name}</p>
                  </div>
                ))}
              </div>
              <div className={styles.playerColumn}>
                {awaySquad.map((player) => (
                  <div className={styles.player} key={player.id}>
                    <img src={require('../../images/player.png')} alt="Player icon" />
                    <p className={styles.player}>{player.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
