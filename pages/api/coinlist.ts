import { NextApiRequest, NextApiResponse} from 'next';

export default async function getCoinList(req, res) {
    if (req.method !== 'GET') {
        res.status(500).json({ message: 'Only GET requests' });
    }

    res.json({});
}