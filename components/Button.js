import React, { Component } from 'react';
import styles from '../../scss/components/Button.scss';

class Button extends Component {
    render() {
        return (
            <div className={styles.buttonCnt}>
                <button>{this.props.label}</button>
            </div>
        )
    }
}

export default Button;