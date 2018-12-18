import React, { Component } from 'react'

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from './SideDrawer'




class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {

    if(window.scrollY > 0 ) {
      this.setState({ headShow: true  });
    } else {
      this.setState({ headShow: false  });
    }

  }

  state = {
    drawerOpen: false,
    headShow: false
  };

  toggleDrawer = value => {
    this.setState({ drawerOpen: value });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <ToolBar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <div className="header">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Music events</div>
          </div>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header