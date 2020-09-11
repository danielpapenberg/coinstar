import React, { Component } from 'react';
import styles from 'styles/components/Navigation.scss';
import NavigationElement from 'components/header/NavigationElement';

class Navigation extends Component {
    render() {
        return (
            <div className={styles.navigationCnt}>
                <ul className={styles.navigationList}>
                    <NavigationElement label='Erster' link='/start' />
                    <NavigationElement label='Zweiter' link='/'  />
                </ul>
            </div>
        )
    }
}

export default Navigation;