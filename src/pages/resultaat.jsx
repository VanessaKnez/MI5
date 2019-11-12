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
import {stopConfetti} from '../js/app.js';
import React, { Component } from 'react';


export default class DynamicRoutePage extends Component {
  render() {
    return (
      <Page name="resultaat">
        <p id="pIdTitleResultaatPagina">GOOD GAME</p>
    
      {/* "PICTURE" CATEGORY QUIZ "CATEGORY NAME" */}
      {/* "PICTURE" TIME "TIME" */}
      {/* "PICTURE" BEST TIME "BEST TIME" */}

      <div class="drop"></div>
      <div class="shake">
        <div class="blurry">
        <div class="mirror">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    
          <Row>
            <a href=""><button onClick={this.getfunc.bind(this)} className="col button button-small button-outline" id="btnSTARTconfettiResultaatPagina">###</button></a>
            <a href=""><button className="col button button-small button-outline" id="btnNewGameResultaatPagina">NEW GAME</button></a>
            <a href=""><button className="col button button-small button-outline" id="btnGoBackToHomePageResultaatPagina">MAIN</button></a>
          </Row>
      </Page>
    );
  }
  getfunc(){
    confetti.start();
    setTimeout(confetti.stop,3000);
  }
}

  
  
 

