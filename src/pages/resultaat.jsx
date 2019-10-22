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

import {startConfetti} from '../js/app.js';
import React, { Component } from 'react';


export default class DynamicRoutePage extends Component {
  render() {
    return (
      <Page name="resultaat">
        <p>GOOD GAME</p>
    
      {/* CATEGORY QUIZ */}
      {/* TIME */}
      {/* BEST TIME */}
    
          <Row>
            <a href=""><button onClick={this.getfunc.bind(this)} className="col button button-small button-outline" id="btnSTARTconfettiResultaatPagina">X START CONFETTI X</button></a>
            <a href=""><button className="col button button-small button-outline" id="btnX">X</button></a>
          </Row>
      </Page>
    );
  }
  getfunc(){
    confetti.start();
  }
}

  
  
 

