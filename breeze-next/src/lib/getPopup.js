import axios from './axios'

export default async function getPopup() {
    const res = await axios.get('api/dashboard/popup')

    return {
        popup: res.data,
    }
}
