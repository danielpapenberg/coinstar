function Blog({ coins }) {
    return (
        <ul>
            {coins.data.map((coin) => (
                <li>{coin.id}</li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    const CoinGecko = require('coingecko-api');
    const coinGeckoClient = new CoinGecko();

    let coins = await coinGeckoClient.coins.list();

    return {
        props: {
            coins
        }
    }
}

export default Blog