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
            coinlist: [{
                id: 'Lädt'
            }]
        }

        // Get coinlist from local storage
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

    render() {
        return (
            <div>
                <div onClick={this.togglePopup.bind(this)} className={styles.addCoinCnt}>
                    <span>+</span>
                </div>

                {
                    this.state.showPopup ? 
                    
                    <Popup headline='Neuen Coin hinzufügen' closePopup={this.togglePopup.bind(this)}> 
                        <Autocomplete
                            id="coinstar"
                            freeSolo
                            options={this.state.coinlist.map((option) => option.id)}
                            renderInput={(params) => (
                                <TextField {...params} label="Suche deinen Coin" margin="normal" variant="outlined" />
                            )}
                        />

                        <Button label='Coin hinzufügen' />
                    </Popup>
                    
                    : null
                }
            </div>
        )
    }
}

/**
 * 
 * {
                            this.props.coinlist.map((item, index) => {
                                return <li key={index}>{item.id}</li>
                            })
                        }
 */