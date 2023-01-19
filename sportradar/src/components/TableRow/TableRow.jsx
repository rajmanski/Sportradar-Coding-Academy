import { useNavigate } from "react-router-dom";

export const TableRow = ({match}) => {

    const homeTeamName = match.sport_event.competitors[0].name;
    const awayTeamName = match.sport_event.competitors[1].name;
    const homeTeamScore = match.sport_event_status.home_score;
    const awayTeamScore = match.sport_event_status.away_score;
    const stadium = match.sport_event.venue.name;
    const date = match.sport_event.start_time;
    const matchDate = date.split('T')[0];
    const navigate = useNavigate();
    let result = '';
    let halfTimeResult = ';'

    if ((homeTeamScore !== undefined) && (awayTeamScore !== undefined)) {
        result = `${homeTeamScore} : ${awayTeamScore}`;
        halfTimeResult = `${match.sport_event_status.period_scores[0].home_score} : ${match.sport_event_status.period_scores[0].away_score}`
    } else {
        result = 'Match postponed';
        halfTimeResult = 'Match postponed';
    }

    const handleClick = () => {
        navigate(`/match/${match.sport_event.id}`)
    }

    

    return (
        <tr onClick={handleClick}>
        <td style={{'backgroundColor': homeTeamScore > awayTeamScore ? '#6ad48b' : homeTeamScore === awayTeamScore ? '#d49b6a' : '#d46f6a'}}>{homeTeamName}</td>
        <td style={{'backgroundColor': homeTeamScore > awayTeamScore ? '#d46f6a' : homeTeamScore === awayTeamScore ? '#d49b6a' : '#6ad48b'}}>{awayTeamName}</td>
        <td>{result}</td>
        <td>{halfTimeResult}</td>
        <td>{matchDate}</td>
        <td>{stadium}</td>
      </tr>
    )
}