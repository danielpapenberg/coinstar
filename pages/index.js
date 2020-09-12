import React, { Component } from 'react';
import Wrapper from 'components/Wrapper';
import AddCoin from 'components/AddCoin';

export default class Homepage extends Component {
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