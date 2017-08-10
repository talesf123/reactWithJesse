import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import './App.css';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function leftIcon() {
  alert('You touch the left icon!!');
}
function rightIcon() {
  alert('You touch the right icon!!');
}
function titleTap(){
  alert('You touch the title!!');
}
const styles = {
  title: {
    cursor: 'pointer',
  },
};

class App extends Component {
  render() {
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();
    return (
      <div className="App">
        <MuiThemeProvider 
          muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar
            title={<span style={styles.title}>Title</span>}
            onLeftIconButtonTouchTap={leftIcon}
            onRightIconButtonTouchTap={rightIcon}
            onTitleTouchTap={titleTap}
            iconElementLeft={
              <IconButton>
                <NavigationClose />
              </IconButton>}
            iconElementRight={
              <FlatButton label="Save" />}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
