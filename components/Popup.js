import React, { Component } from 'react';
import styles from 'styles/components/Popup.scss';

export default class Popup extends React.Component {
    render() {
        return (
            <div className={styles.popupWrapper}>
                <div className={styles.popupCnt}>
                    <div className={styles.popupContent}>
                        <h2>{this.props.headline}</h2>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                    <div className={styles.close} onClick={this.props.onClickFunc}><span>+</span></div>
                </div>
                <div className={styles.opacityBackground} onClick={this.props.onClickFunc}></div>
            </div>
        );
    }
}