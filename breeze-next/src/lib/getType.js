import axios from '@/lib/axios'

export default async function getTypes() {
    const res = await axios.get('/api/dashboard/types')

    return {
        types: res.data,
    }
}
