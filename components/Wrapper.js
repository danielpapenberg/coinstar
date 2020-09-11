import React, { Component } from 'react';
import Head from 'next/head'
import reset from 'scss/reset.scss';
import basic from 'scss/basic.scss';
import Header from 'components/header/Header';

class Wrapper extends Component {
    render() {
        return (
            <div className={basic.mainWrapper}>
                <Head>
                    <title>COINSTAR</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Header />

                <div className={basic.mainContent}>
                    {this.props.children}
                </div>

            </div>
        )
    };
}

export default Wrapper;