'use client'

import useSWR from 'swr'
import axios from '@/lib/axios'
import { useCallback } from 'react'

export const useType = () => {
    const csrf = useCallback(async () => {
        await axios.get('/sanctum/csrf-cookie')
    }, [])

    const {
        data: types,
        error,
        mutate,
    } = useSWR('/api/dashboard/types', () =>
        axios
            .get('/api/dashboard/types')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const add = async formData => {
        await csrf()

        const data = new FormData()

        data.append('name', formData.name)
        data.append('subname', formData.subname)
        data.append('description', formData.description)
        data.append('vidLink', formData.vidLink)
        data.append('image', formData.image)
        if (formData.setupImages?.length > 0) {
            formData.setupImages.forEach(image =>
                data.append('setupImages[]', image),
            )
        }

        const response = await axios.post('/api/dashboard/type/add', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (response.status === 201) mutate()

        return response
    }

    const deleteData = async slug => {
        await csrf()

        const response = await axios.delete(
            `/api/dashboard/type/delete/${slug}`,
        )

        if (response.status === 201) mutate()

        return response
    }

    const edit = async (slug, formData) => {
        await csrf()

        const data = new FormData()

        data.append('name', formData.name)
        data.append('subname', formData.subname)
        data.append('description', formData.description)
        data.append('vidLink', formData.vidLink)
        data.append('_method', 'PUT')

        const response = await axios.post(
            `/api/dashboard/type/edit/${slug}`,
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

    const editImage = async (slug, formData) => {
        await csrf()

        const data = new FormData()

        data.append('image', formData.image)
        data.append('_method', 'PUT')

        const response = await axios.post(
            `/api/dashboard/type/edit/image/${slug}`,
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

    const deleteImage = async (slug, index) => {
        await csrf()

        const response = await axios.put(
            `/api/dashboard/type/delete/setupimage/${slug}/${index}`,
        )

        if (response.status === 201) mutate()

        return response
    }

    const addImage = async (slug, formData) => {
        await csrf()

        const data = new FormData()
        if (formData.setupImages?.length > 0) {
            formData.setupImages.forEach(image =>
                data.append('setupImages[]', image),
            )
        }

        const response = await axios.post(
            `/api/dashboard/type/add/setupimage/${slug}`,
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
        types,
        add,
        deleteData,
        edit,
        editImage,
        deleteImage,
        addImage,
    }
}
