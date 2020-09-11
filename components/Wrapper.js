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
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
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