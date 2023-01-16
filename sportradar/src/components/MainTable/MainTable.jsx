import { Container, Table } from "react-bootstrap";

export const MainTable = ({matchData}) => {
    
  return (
    <Container>
      <Table bordered sm reponsive="sm">
        <thead>
          <tr>
            <th>Match</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
            {matchData.schedules.map((match) => (
                <tr>
                <td>{match.sport_event.competitors[0].name} vs {match.sport_event.competitors[1].name}</td>
                <td>{match.sport_event_status.home_score}:{match.sport_event_status.away_score}</td>
              </tr>
            ))}
          
        </tbody>
      </Table>
    </Container>
  );
};
