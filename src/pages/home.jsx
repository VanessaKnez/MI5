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
  <Page name="home">
    {/* Page content */}
    <img src={loginFoto} alt="foto login" id="imgLoginLoginPagina"></img>
      <form>
        <label>
          <input type="text" placeholder="LOGIN" id="inptLoginLoginPagina"/>
        </label>
        <label>
          <input type="text" placeholder="PASSWORD" id="inptPswdLoginPagina"/>
        </label>
      </form>

      {/* gekopieerd van w3schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox */}
      <label className="container">
          <input type="checkbox"/>
          <span className="checkmark"></span> REMEMBER ME
       </label>

      <Row>
        <a href="/registratie/"><button href="/registratie/" className="col button button-small button-outline" id="btnRegistreerLoginPagina">REGISTER</button></a>
        <a href="x"><button className="col button button-small button-outline" id="btnLoginLoginPagina">LOGIN</button></a>
        <a href="/wachtVerg/"><button className="col button button-large" id="btnForgotPaswdLoginPagina">FORGOT PASSWORD</button></a>
      </Row>
  </Page>
);