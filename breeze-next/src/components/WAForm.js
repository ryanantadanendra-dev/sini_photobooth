'use client'

import { useType } from '@/hooks/type'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const WAForm = () => {
    const { types } = useType()
    const TYPES = types?.data.map(t => t.name)
    const [formData, setFormData] = useState({
        name: '',
        wa: '',
        event: '',
        type: TYPES?.[0] ?? '',
    })
    const router = useRouter()

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e, name, wa, event, type) => {
        e.preventDefault()
        const message = `helo, my name is ${name} and im planning to have a(n) ${event} event and i would like to know more about your ${type} photobooth type`

        router.push(
            `https://wa.me/6285858752663?text=${encodeURIComponent(message)}`,
        )
    }

    return (
        <form
            onSubmit={e =>
                handleSubmit(
                    e,
                    formData.name,
                    formData.wa,
                    formData.event,
                    formData.type,
                )
            }
            className="mt-10">
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
                <li className=" items-center mt-4">
                    <input
                        type="text"
                        name="wa"
                        id="wa"
                        required
                        value={formData.wa}
                        onChange={handleChange}
                        placeholder="Whatsapp No."
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
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                </li>
                <li>
                    <button
                        type="submit"
                        className="w-28 h-12 text-white flex justify-center items-center"
                        style={{
                            background: 'var(--color-secondary)',
                        }}>
                        Send
                    </button>
                </li>
            </ul>
        </form>
    )
}
export default WAForm
