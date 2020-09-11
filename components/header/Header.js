import React, { Component } from 'react';
import styles from 'scss/components/Header.scss';
import Navigation from 'components/header/Navigation';

class Header extends Component {
    render() {
        return (
            <div className={styles.headerWrapper}>
                <div className={styles.headerCnt}>
                    <div className={styles.logoCnt}>
                        <div className={styles.logoTxt}>COIN<span>STAR</span></div>
                    </div>

                    <Navigation />

                </div>
            </div>
        )
    }
}

export default Header;