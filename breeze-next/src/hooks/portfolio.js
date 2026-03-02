import axios from '@/lib/axios'
import useSWR from 'swr'

export const usePortfolio = () => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const {
        data: portfolios,
        mutate,
        error,
    } = useSWR('api/dashboard/portfolios', () =>
        axios
            .get('api/dashboard/portfolios')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const add = async formData => {
        await csrf()

        const data = new FormData()
        if (formData?.images?.length > 0) {
            formData?.images?.forEach(file => {
                data.append('images[]', file)
            })
        }

        const response = await axios.post(
            '/api/dashboard/portfolio/add',
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

    const deleteData = async id => {
        await csrf()

        const response = axios.delete(`/api/dashboard/portfolio/delete/${id}`)

        // if (response.status === 201) mutate()

        return response
    }

    return {
        portfolios,
        add,
        deleteData,
    }
}
