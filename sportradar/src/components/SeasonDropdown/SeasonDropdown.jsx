import React from 'react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';


export const SeasonDropdown = ({getWantedSeason}) => {
    return (
        <Dropdown as={ButtonGroup}>
          <Button variant="secondary">Seasons</Button>
    
          <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
    
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => getWantedSeason(e.target.outerText)}>Ekstraklasa 20/21</Dropdown.Item>
            <Dropdown.Item onClick={(e) => getWantedSeason(e.target.outerText)}>Ekstraklasa 21/22</Dropdown.Item>
            <Dropdown.Item onClick={(e) => getWantedSeason(e.target.outerText)}>Ekstraklasa 22/23</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}