'use client'

import { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import Image from 'next/image'

const Form = ({ title, inputs, data, handle }) => {
    const [preview, setPreview] = useState(
        data?.image
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${data?.image}`
            : null,
    )
    const fileRef = useRef(null)

    const [formData, setFormData] = useState(
        inputs?.reduce((acc, input) => {
            acc[input] = data
                ? data[input]
                : input == 'image'
                  ? null
                  : input == 'setupImages'
                    ? []
                    : ''

            return acc
        }, {}),
    )

    const handleFileChange = e => {
        const file = e.target.files[0]

        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setPreview(imageUrl)
            setFormData({
                ...formData,
                image: file,
            })
        }
    }

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleFilesChange = e => {
        const files = Array.from(e.target.files)
        const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg']

        const isValid = files.every(file => ALLOWED_TYPES.includes(file.type))

        if (!isValid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'File Must Be JPG, JPEG, Or PNG',
            })

            e.target.value = null

            setFormData({
                ...formData,
                setupImages: [],
            })
        }

        if (files?.some(file => file.size > 2 * 1024 * 1024)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'File Must Be Under 2mb',
            })

            e.target.value = null

            setFormData({
                ...formData,
                setupImages: [],
            })
        }

        if (files) {
            if (title === 'Add Data') {
                setFormData({
                    ...formData,
                    images: files,
                })
            } else {
                setFormData({
                    ...formData,
                    setupImages: files,
                })
            }
        }
    }

    return (
        <form
            onSubmit={e =>
                title == 'Add Blog' ||
                title == 'Add Type' ||
                title == 'Add Data'
                    ? handle(e, formData, setFormData)
                    : handle(e, data?.slug, formData, fileRef)
            }>
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <figure
                className={`${title == 'Edit Image' ? 'visible w-56 h-56 relative mx-auto' : 'invisible w-0 h-0'}`}>
                <Image
                    src={
                        preview
                            ? preview
                            : `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${data?.image}`
                    }
                    alt="Uploaded Image"
                    fill
                    className="object-cover"
                />
            </figure>
            <ul>
                {inputs?.map((i, index) => (
                    <li className="flex mt-4" key={i}>
                        <label className="w-32" htmlFor="name">
                            {i}
                        </label>
                        {i == 'image' || i == 'setupImages' || i == 'images' ? (
                            <input
                                type="file"
                                ref={fileRef}
                                name={i}
                                multiple={
                                    i == 'setupImages' || i == 'images'
                                        ? true
                                        : false
                                }
                                onChange={
                                    i == 'image'
                                        ? handleFileChange
                                        : handleFilesChange
                                }
                                className="ms-3"
                            />
                        ) : i == 'content' ? (
                            <textarea
                                type="text"
                                name={i}
                                value={formData[i]}
                                onChange={handleChange}
                                className="ms-3 h-32"
                            />
                        ) : (
                            <input
                                type="text"
                                name={i}
                                value={formData[i]}
                                onChange={handleChange}
                                className="ms-3"
                            />
                        )}
                    </li>
                ))}
                <li className="flex justify-center mt-4">
                    <button type="submit" className="px-10 py-5 bg-gray-200">
                        {title == 'Add Blog' ||
                        title == 'Add Type' ||
                        title == 'Add Data'
                            ? 'Add'
                            : 'Edit'}
                    </button>
                </li>
            </ul>
        </form>
    )
}
export default Form
