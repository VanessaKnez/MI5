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

export default () => (
  <Page name="GDPR">
    {/* Page content */}
    <p id="pIdTitleGDPRPagina">WHY DO WE NEED THIS INFORMATION FROM YOU?</p>
    <p class="pClassTitleGDPRPagina">EMAIL</p>
    <p class="pClassTextGDPRPagina">To log in and keep your personal scores together.</p>
    <p class="pClassTextGDPRPagina">We will keep your email address forever.</p>
    <p class="pClassTitleGDPRPagina">NICKNAME</p>
    <p class="pClassTextGDPRPagina">Your nickname is linked with your email account, that way you have a name that you could choose.</p>
    <p class="pClassTextGDPRPagina">We will keep your nickname forever.</p>
    <p class="pClassTitleGDPRPagina">PASSWORD</p>
    <p class="pClassTextGDPRPagina">You need your password to log in to your account. Without that you can not access your data.</p>
    <p class="pClassTextGDPRPagina">We will not keep your password.</p>
      <Row>
        <a href="/registratie/"><button className="col button button-small button-outline" id="btnGoBackGDPRPagina">GO BACK</button></a>
      </Row>
  </Page>
);