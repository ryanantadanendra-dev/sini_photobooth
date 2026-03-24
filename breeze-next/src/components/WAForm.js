'use client'

import { useType } from '@/hooks/type'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import axios from '@/lib/axios'

const WAForm = () => {
    const { types } = useType()
    const TYPES = types?.data.map(t => t.name)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        event: '',
        type: TYPES?.[0] ?? '',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            await axios.post(`/api/send-email`, formData)

            Swal.fire({
                icon: 'success',
                title: 'Email Sent',
                text: 'Email Sent Successfully',
            })

            setFormData({
                name: '',
                email: '',
                event: '',
                type: TYPES?.[0] ?? '',
            })
        } catch (err) {
            console.log('Catch error:', err) // ← add this
            setError(err.message)
            Swal.fire({
                icon: 'error',
                title: 'Error. . .',
                text: err.response?.data?.message,
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="mt-10">
            <ul>
                <li className="flex items-center">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full h-16 rounded-2xl"
                    />
                </li>
                <li className="items-center mt-4">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full h-16 rounded-2xl"
                    />
                </li>
                <li className="mt-4">
                    <input
                        type="text"
                        name="event"
                        id="event"
                        required
                        value={formData.event}
                        onChange={handleChange}
                        className="w-full h-16 rounded-2xl"
                        placeholder="Event type / location / date"
                    />
                </li>
                <li className="mt-4">
                    <select
                        name="type"
                        id="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full ms-3 h-16 rounded-2xl">
                        {TYPES?.map(type => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </li>

                {error && (
                    <li className="mt-2 text-red-500 text-sm ms-1">{error}</li>
                )}

                <li className="">
                    <div className="flex justify-center md:justify-start">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-28 h-16 mt-5 ms-3 rounded-xl text-white flex justify-center items-center disabled:opacity-50"
                            style={{ background: 'var(--color-secondary)' }}>
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </li>
            </ul>
        </form>
    )
}

export default WAForm
