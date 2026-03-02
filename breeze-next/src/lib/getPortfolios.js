import axios from './axios'

export default async function getPortfolios() {
    const res = await axios.get('/api/dashboard/portfolios')

    return {
        portfolios: res.data,
    }
}
