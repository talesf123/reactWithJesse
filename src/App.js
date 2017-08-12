import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';
import './App.css';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  title: {
    cursor: 'pointer',
  },
};
//var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  rightIcon = () => alert('You touch the right icon!!');
  titleTap = () => alert('You touch the title!!');

  drawToggle = () => this.setState({open:!this.state.open});
  drawClose = () => this.setState({open: false})
  render() {
    
    return (
      <div className="App">
        <AppBar
          title="Title"
          style={{backgroundColor:'rgb(0,128,0)'}}
          onLeftIconButtonTouchTap={this.drawToggle}
          onRightIconButtonTouchTap={this.rightIcon}
          onTitleTouchTap={this.titleTap}
        />
        <Drawer 
          open={this.state.open} 
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.drawClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.drawClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
