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
  Button
} from 'framework7-react';
import loginFoto from '../img/login.png'

export default () => (
  <Page name="reegistratie">
    {/* Page content */}
    <img src={loginFoto} alt="foto login" id="imgLoginLoginPagina"></img>
      <form>
        <label>
          <input type="text" placeholder="USERNAME" id="inptLoginRegistratiePagina"/>
        </label>
        <label>
          <input type="text" placeholder="EMAIL ADDRESS" id="inptEmailRegitratiePagina"/>
        </label>
        <label>
          <input type="text" placeholder="PASSWORD" id="inptPasswordRegistratiePagina"/>
        </label>
        <label>
          <input type="text" placeholder="REPEAT PASSWORD" id="inptConformPasswordRegistratiePagina"/>
        </label>
      </form>

      <Row>
        <a href="x"><button className="col button button-small button-outline" id="btnRegistreerRegistratiePagina">REGISTER</button></a>
        <a href="/"><button className="col button button-small button-outline" id="btnCancelRegistratiePagina">CANCEL</button></a>
        <a href="/GDPR/"><button className="col button button-small button-outline" id="btnGDPRlink">WHY DO WE NEED THIS INFORMATION FROM YOU?</button></a>
      </Row>
  </Page>
);