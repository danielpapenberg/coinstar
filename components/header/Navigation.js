import React, { Component } from 'react';
import styles from 'styles/components/Navigation.scss';
import NavigationElement from 'components/header/NavigationElement';

class Navigation extends Component {
    render() {
        return (
            <div className={styles.navigationCnt}>
                <ul className={styles.navigationList}>
                    
                </ul>
            </div>
        )
    }
}

export default Navigation;

/**
 * <NavigationElement label='Wie funktioniert es?' link='/start' /
 *  <NavigationElement label='Coinliste erstellen' link='/'  />
 */