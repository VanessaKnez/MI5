import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  img
} from 'framework7-react';

export default () => (
  <Page name="profiel">
    {/* Page content */}
      <Row>
          {/* KLIK OP KNOP OM PROFIEL FOTO TE VERANDEREN */}
        <a href="#"><button className="col button button-small button-outline" id="btnVeranderProfielFotoProfielPagina">X</button></a>

        {/* gegevens */}
        {/* username */}
        {/* email adres */}

        {/* knoppen */}
        <a href="#"><button className="col button button-small button-outline" id="btnVeranderWachtwoordProfielPagina">CHANGE PASSWORD</button></a>
        <a href="#"><button className="col button button-small button-outline" id="btnBewaarWijzigingenProfielPagina">SAVE CHANGES</button></a>
        <a href="#"><button className="col button button-small button-outline" id="btnCancelProfielPagina">CANCEL</button></a>

        <a href="/resultaat/"><button className="col button button-small button-outline" id="btnTest">TEST</button></a>
      </Row>
  </Page>
);