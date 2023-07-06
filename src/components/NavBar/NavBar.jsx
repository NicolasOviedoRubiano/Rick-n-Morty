import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  // constructor(props){
  //     super(props)
  // }
  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.divLinks}>
          <NavLink to="/about" className={styles.aboutLink}></NavLink>
          <NavLink to="/home" className={styles.homeLink}></NavLink>
          <NavLink to="/favorites" className={styles.favoritesLink}></NavLink>
          <button
            className={styles.logoutButton}
            onClick={this.props.logout}
          ></button>
        </div>
        <div className={styles.divSearchBar}>
          <button
            className={styles.randomButton}
            onClick={() => {
              this.props.onSearch(Math.floor(Math.random() * 826));
            }}
          ></button>
          <SearchBar onSearch={this.props.onSearch} />
        </div>
      </nav>
    );
  }
}
export default NavBar;
