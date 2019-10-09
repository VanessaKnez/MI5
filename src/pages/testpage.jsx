import React from 'react';
import { Page, List, ListInput, Icon, Navbar, ListButton, BlockTitle,BlockFooter } from 'framework7-react';
export default class extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: '',
        email:'',
        password: '',
        repeatpassword:'',
      };
    }
render(){
    return(
            <Page loginScreen>
                <Navbar title="TESTPAGE" backLink="Back" />
                <BlockTitle>TESTPAGE BITCHESS</BlockTitle>
                <List noHairlinesMd>
                    <ListInput
                        label="Username"
                        type="text"
                        placeholder="Your username"
                        info=""
                        value={this.state.username}
                        onInput={(e) => 
                            {
                                this.setState({ username: e.target.value});
                            }}
                        required
                        validate
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>
                    <ListInput
                        label="E-mail"
                        type="email"
                        placeholder="Your e-mail"
                        info=""
                        value={this.state.email}
                        onInput={(e) => 
                            {
                                this.setState({ email: e.target.value});
                            }}
                        required
                        validate
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>
                    <ListInput
                        label="Password"
                        type="password"
                        placeholder="Your Password"
                        info=""
                        value={this.state.password}
                        onInput={(e) => 
                            {
                                this.setState({ password: e.target.value});
                            }}
                        required
                        validate
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>
                    <ListInput
                        label="Repeat Password"
                        type="password"
                        placeholder="Repeat your password"
                        info=""
                        value={this.state.repeatpassword}
                        onInput={(e) => 
                            {
                                this.setState({ repeatpassword: e.target.value});
                            }}
                        required
                        validate
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>
                    {/*
                    <ListInput
                        label="Number"
                        type="number"
                        placeholder="Enter number"
                        info=""
                        required
                        validate
                        pattern="[0-9]*"
                        clearButton
                    >
                        <Icon icon="demo-list-icon" slot="media"/>
                    </ListInput>
                    */}
                    
                </List>
                <List>
                    <ListButton onClick={this.signIn.bind(this)}>Sign In</ListButton>
                    <BlockFooter>Some text</BlockFooter>
                </List>
            </Page>
        )
}
signIn() {
    const self = this;
    const app = self.$f7;
    const router = self.$f7router;
    app.dialog.alert(`Username: ${self.state.username}<br>Email: ${self.state.email}<br>Password: ${self.state.password}<br>Repeated password: ${self.state.repeatpassword}`, () => {
      router.back();
    });
  }
}