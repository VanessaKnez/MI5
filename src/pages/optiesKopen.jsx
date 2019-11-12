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

import React, { Component } from 'react';
import {test} from '../js/app.js';

export default class DynamicRoutePage extends Component {
  render() {
    return (
  <Page name="optiesKopen">
    {/* Page content */}

      <Row>
        <button className="col button button-small button-outline" id="btnShieldOptionOptiesKopenPagina"><p><a class="button popup-open" href="#" data-popup=".popup-SHIELD">SHIELD</a></p></button>
        <button className="col button button-small button-outline" id="btnThunderOptionOptiesKopenPagina"><p><a class="button popup-open" href="#" data-popup=".popup-THUNDER">THUNDER</a></p></button>
        <button className="col button button-small button-outline" id="btnOponentMinus10SecOptionOptiesKopenPagina"><p><a class="button popup-open" href="#" data-popup=".popup-OPONENT-10SEC">OPONENT -10 SEC</a></p></button>
        <a href="/overzQuiz/"><button className="col button button-small button-outline" id="btnCancelOptiesKopenPagina">CANCEL</button></a>

      <div class="popup popup-SHIELD">
        <div class="block">
          <p>SHIELD</p>
          <p><a class="link popup-close" href="#">Close popup</a></p>
          <p>With the shield you can protect yourself against everything the oponent throws at you. Nothing will be applied to you.</p>
        </div>
      </div>

      <div class="popup popup-THUNDER">
        <div class="block">
          <p>THUNDER</p>
          <p><a class="link popup-close" href="#">Close popup</a></p>
          <p>With this option you will be able to throw thunder to your oponent. This means that your oponents screen will vibrate so that the person can not read well his/her question and answer.</p>
        </div>
      </div>

      <div class="popup popup-OPONENT-10SEC">
        <div class="block">
          <p>OPONENT -10 SEC</p>
          <p><a class="link popup-close" href="#">Close popup</a></p>
          <p>With this option you will substract 10 seconds from the oponents time to respond for one question.</p>
          <button id="btnTestOptiesKopen" onClick={this.test2.bind(this)}>TEST</button>
        </div>
      </div>
      </Row>
  </Page>
);
  }

test2() {
test()
}
}