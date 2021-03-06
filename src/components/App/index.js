
import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem.jsx';
import styles from './styles.scss';

function App({ children }) {
  return (
    <div style={{height: '100%', top: 0, position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%'}}>
      <header>
        <div className={styles.header}>
          <div className={styles.logo}>
            <span>Kiki Dashboard</span>
          </div>
          <div className={styles.logout}>
            <span>Log uit</span>
          </div>
          <div className={styles.user}>
            <span className={styles.username}>
              <img src={require('../../images/john_doe.png')} alt="profile image"/> John Doe
            </span>
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <aside className={styles.nav}>
          <NavItem className={styles.link} icon='graph' to="/" activeClassName={styles.active} index={true}>Voortgang</NavItem>
          <NavItem className={styles.link} icon='achievement' to="/achievements" activeClassName={styles.active}>Prestaties</NavItem>
        </aside>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
