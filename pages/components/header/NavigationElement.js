import React, { Component } from 'react';
import Link from 'next/link'

class NavigationElement extends Component {
    render() {
        return (
            <li>
                <Link href={this.props.link}>
                    <a>{this.props.label}</a>
                </Link>
            </li>
        )
    }
}

export default NavigationElement;