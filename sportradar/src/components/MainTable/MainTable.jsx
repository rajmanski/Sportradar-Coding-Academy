import { Container, Table } from "react-bootstrap";
import { TableRow } from "../TableRow/TableRow";

export const MainTable = ({matchData}) => {
    
  return (
    <Container>
      <Table bordered sm size="sm" responsive hover>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Final Result</th>
            <th>Half Time Result</th>
            <th>Match Date</th>
            <th>Stadium</th>
          </tr>
        </thead>
        <tbody>
            {matchData && matchData.schedules.map((match) => (
                <TableRow match={match}/>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};
