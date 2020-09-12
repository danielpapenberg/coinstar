import React, { Component } from 'react';
import styles from 'styles/components/AddCoin.scss';
import Popup from 'components/Popup';
import Button from 'components/Button';
import ls from 'local-storage';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class AddCoin extends Component {
    constructor(props) {
        super();
        this.state = {
            showPopup: false,
            listSelectedCoins: [],
            coinlist: [{
                id: 'Keine Daten vorhanden'
            }]
        }

        let coinlist = ls.get('cl') || null;
        const coinlistExpired = ls.get('cle') || null;
        const now = new Date().getTime();
        const allowedDifferenceMs = 600000; // 10 Minuten
        if (coinlist === null || now - coinlistExpired >= allowedDifferenceMs) {
            coinlist = this.getCoinData(this);
        } else {
            this.state = {
                coinlist: coinlist
            }
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    async getCoinData() {
        const CoinGecko = require('coingecko-api');
        const coinGeckoClient = new CoinGecko();
        const coinlist = await coinGeckoClient.coins.list();
        if (coinlist.success === true) {
            ls.set('cl', coinlist.data);
            ls.set('cle', new Date().getTime());
            this.setState({
                coinlist: coinlist.data
            });
        }
    }

    saveSelectedCoins(event, value, reason) {
        const listSelectedCoins = value.map((option) =>
            <li key={option.toString()}>
                {option}
            </li>
        );

        this.setState({
            listSelectedCoins: listSelectedCoins
        });
    }

    submitSelectedCoins() {
        this.togglePopup();
    }

    render() {
        return (
            <div>
                <div onClick={this.togglePopup.bind(this)} className={styles.addCoinCnt}>
                    <span>+</span>
                </div>

                {
                    this.state.showPopup ? 
                    
                    <Popup headline='Coin(s) hinzufügen' onClickFunc={this.togglePopup.bind(this)}> 
                        <Autocomplete
                            id="coinstar"
                            multiple
                            options={this.state.coinlist.map((option) => option.name)}
                            onChange={this.saveSelectedCoins.bind(this)}
                            renderInput={(params) => (
                                <TextField {...params} label="Suche deinen Coin" margin="normal" variant="outlined" />
                            )}
                        />

                        <Button label='Hinzufügen' onClickFunc={this.submitSelectedCoins.bind(this)} />
                    </Popup>
                    
                    : null
                }
                <div>
                    {this.state.listSelectedCoins}
                </div>
            </div>
        )
    }
}