import React, { Component } from 'react';
import Head from 'next/head'
import Header from 'components/header/Header';

class Wrapper extends Component {
    render() {
        return (
            <div className='mainWrapper'>
                <Head>
                    <title>COINSTAR</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>

                <Header />

                <div className='mainContent'>
                    {this.props.children}
                </div>

            </div>
        )
    };
}

export default Wrapper;