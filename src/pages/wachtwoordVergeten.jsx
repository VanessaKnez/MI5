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
import logo from '../img/logo.png'

export default () => (
  <Page name="wachtwoordVergeten">
    {/* Page content */}
    <img src={logo} alt="foto login" id="imgLogo"></img>
      <form>
        <label>
          <input type="text" placeholder="EMAIL ADDRESS" id="inptEmailAdresWachtwoordVergetenPagina"/>
        </label>
      </form>

      <Row>
        <a href="/registratie/"><button href="#" className="col button button-small button-outline" id="btnWachtwoordVergetenWachtwoordVergetenPagina">FORGOT PASSWORD</button></a>
        <a href="/"><button className="col button button-small button-outline" id="btnCancelWachtwoordVergetenPagina">CANCEL</button></a>
      </Row>
  </Page>
);