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
/*import background from '../img.background.jpg'*/

export default () => (
  <Page name="home">
    {/* Page content */}
    <img src={logo} alt="foto login" id="imgLogo"></img>
      <form>
        <label>
          <input type="text" placeholder="LOGIN" id="inptLoginLoginPagina"/>
        </label>
        <label>
          <input type="text" placeholder="PASSWORD" id="inptPswdLoginPagina"/>
        </label>
      </form>

      {/* gekopieerd van w3schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox */}
      {/*<label className="container">
          <input type="checkbox"/>
          <span className="checkmark"></span> REMEMBER ME
</label>*/}

      {/*
      <label class="item-checkbox item-content">
        <input type="checkbox" name="demo-checkbox" value="Books"></input>
          <i class="icon icon-checkbox"></i>
        <div class="item-inner">
          <div class="item-title">REMEMBER ME</div>
        </div>
      </label>
      */}

      <Row>
        <a href="/registratie/"><button href="/registratie/" className="col button button-small button-outline" id="btnRegistreerLoginPagina">REGISTER</button></a>
        <a href="/overzQuiz/"><button className="col button button-small button-outline" id="btnLoginLoginPagina">LOGIN</button></a>
        <a href="/wachtVerg/"><button className="col button button-large" id="btnForgotPaswdLoginPagina">FORGOT PASSWORD</button></a>
      </Row>
  </Page>
);