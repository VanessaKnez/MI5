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
import stndrdProfielFoto from '../img/standaarProfielFoto.png'

export default () => (
  <Page name="home">
    {/* Page content */}
    <div id="divIdAantalMunten">COINS</div>
    <a href="#"><button className="col button button-small button-outline" id="btnProfiel"><img src={stndrdProfielFoto} alt="standaard profiel foto" id="imgStandaardProfielFoto"/></button></a>
    <div id="divLevelVanSpeler">LEVEL x</div>
      <Row>
        <a href="#"><button className="col button button-small button-outline" id="btnMixQuizOverzichtQuizPagina">MIX</button></a>
        <a href="#"><button className="col button button-small button-outline" id="btnYesNoQuizOverzichtQuizPagina">YES/NO</button></a>
        <a href="#"><button className="col button button-small button-outline" id="btnImagesQuizOverzichtQuizPagina">IMAGES</button></a>
        <a href="#"><button className="col button button-small button-outline" id="btnAddQuestionQuizOverzichtQuizPagina">ADD QUESTION</button></a>
        <a href="/koopOpties/"><button className="col button button-small button-outline" id="btnBuyOptionsOverzichtQuizPagina">BUY OPTIONS</button></a>
      </Row>
  </Page>
);