import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import UserInfo from './UserInfo/UserInfo';
import NavbarList from './NavbarList/NavbarList';
import Footer from './Footer/Footer';
import './styles.css';
import Header from '../Header/Header';
import Wall from '../Wall/Wall';

const mql = window.matchMedia(`(min-width: 800px)`);

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  
  render() {
    return (
      <div>
        <Sidebar
        sidebar={<b><UserInfo /><br/><NavbarList /><Footer /></b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        sidebarClassName={'sidebar'}
        styles={{ sidebar: { background: 'black', color: 'white', position: 'fixed', zIndex: 3, width: '250px' } }}>
        <button onClick={() => this.onSetSidebarOpen(true)} className="open-menu"><i class="fas fa-align-justify"></i></button>
        </Sidebar>
        <Wall />
      </div>
    );
  }
}

export default Navbar;