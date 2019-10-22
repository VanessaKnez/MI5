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
  <Page name="optiesKopen">
    {/* Page content */}

      <Row>
        <a href="#"><button className="col button button-small button-outline" id="btnShieldOptionOptiesKopenPagina">SHIELD</button></a>
        <a href="#"><button className="col button button-small button-outline" id="btnThunderOptionOptiesKopenPagina">THUNDER</button></a>
        <a href="#"><button className="col button button-small button-outline" id="btnOponentMinus10SecOptionOptiesKopenPagina">OPONENT -10 SEC</button></a>
        <a href="/overzQuiz/"><button className="col button button-small button-outline" id="btnCancelOptiesKopenPagina">CANCEL</button></a>
      </Row>
  </Page>
);