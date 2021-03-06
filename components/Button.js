import React, { Component } from 'react';
import styles from 'styles/components/Button.scss';

class Button extends Component {
    render() {
        return (
            <div className={styles.buttonCnt}>
                <button onClick={this.props.onClickFunc}>{this.props.label}</button>
            </div>
        )
    }
}

export default Button;