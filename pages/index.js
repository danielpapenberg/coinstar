import React, { Component } from 'react';
import Wrapper from 'components/Wrapper';
import AddCoin from 'components/AddCoin';

export default class Homepage extends Component {
/*
    constructor(props) {
        super();

        let coinlist = null;
        if (props.coinlist.success === true) {
            coinlist = props.coinlist;
        }

        this.state = {
            coinlist: coinlist.data
        };
    }

    
    static async getInitialProps() {
        const CoinGecko = require('coingecko-api');
        const coinGeckoClient = new CoinGecko();
        let coinlist = await coinGeckoClient.coins.list();
        return { coinlist }
    }

    <AddCoin coinlist={this.state.coinlist} />
    */

    render() {
        return (
            <Wrapper>
                    
                <h1>Erstelle jetzt deine Coinliste!</h1>
                <h2 className='brandColor'>Füge ganz einfach Coins zu deiner Liste hinzu ...</h2>
                <div className='clear'></div>

                <AddCoin />

            </Wrapper>
        )
    }
}