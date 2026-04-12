import useSWR from 'swr'
import axios from '@/lib/axios'

export const usePopup = () => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const {
        data: popup,
        mutate,
        error,
    } = useSWR(
        'api/dashboard/popup',
        async () =>
            await axios
                .get('api/dashboard/popup')
                .then(res => res.data)
                .catch(error => {
                    if (error.response.status !== 409) throw error
                }),
    )

    const edit = async (id, formData) => {
        await csrf()

        const data = new FormData()
        data.append('image', formData?.image)

        const response = await axios.post(
            `/api/dashboard/popup/edit/${id}`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        )

        if (response.status === 201) mutate()

        return response
    }

    return {
        popup,
        edit,
    }
}
