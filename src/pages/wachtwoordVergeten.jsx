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
import loginFoto from '../img/login.png'

export default () => (
  <Page name="wachtwoordVergeten">
    {/* Page content */}
    <img src={loginFoto} alt="foto login" id="imgLoginLoginPagina"></img>
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