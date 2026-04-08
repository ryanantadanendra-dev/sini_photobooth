'use client'

import { useRef, useState, useCallback } from 'react'
import Swal from 'sweetalert2'
import Image from 'next/image'

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg']
const MAX_FILE_SIZE = 2 * 1024 * 1024
const ADD_TITLES = ['Add Blog', 'Add Type', 'Add Data']
const MULTI_FILE_INPUTS = ['setupImages', 'images']

const Form = ({ title, inputs, data, handle }) => {
    const isAddForm = ADD_TITLES.includes(title)

    const [preview, setPreview] = useState(
        data?.image
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${data.image}`
            : null,
    )

    const fileRef = useRef(null)

    const [formData, setFormData] = useState(() =>
        inputs?.reduce((acc, input) => {
            acc[input] = data
                ? data[input]
                : input === 'image'
                  ? null
                  : MULTI_FILE_INPUTS.includes(input)
                    ? []
                    : ''
            return acc
        }, {}),
    )

    const handleFileChange = useCallback(e => {
        const file = e.target.files[0]
        if (!file) return

        setPreview(URL.createObjectURL(file))
        setFormData(prev => ({ ...prev, image: file }))
    }, [])

    const handleChange = useCallback(e => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }, [])

    const handleFilesChange = useCallback(
        e => {
            const files = Array.from(e.target.files)

            const invalidType = files.some(
                f => !ALLOWED_IMAGE_TYPES.includes(f.type),
            )
            const invalidSize = files.some(f => f.size > MAX_FILE_SIZE)

            if (invalidType || invalidSize) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: invalidType
                        ? 'File must be JPG, JPEG, or PNG'
                        : 'File must be under 2MB',
                })
                e.target.value = null
                setFormData(prev => ({ ...prev, setupImages: [] }))
                return
            }

            const key = title === 'Add Data' ? 'images' : 'setupImages'
            setFormData(prev => ({ ...prev, [key]: files }))
        },
        [title],
    )

    const handleSubmit = e => {
        if (isAddForm) {
            handle(e, formData, setFormData)
        } else {
            handle(e, data?.slug, formData, setFormData, fileRef)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="h-full">
            <div className="flex flex-col justify-around h-full">
                <h2 className="text-2xl font-bold text-center">{title}</h2>

                {title === 'Edit Image' && (
                    <figure className="w-56 h-56 relative mx-auto">
                        <Image
                            src={
                                preview ??
                                `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${data?.image}`
                            }
                            alt="Uploaded Image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </figure>
                )}

                <ul>
                    {inputs?.map(i => (
                        <li className="flex mt-4" key={i}>
                            <label className="w-32" htmlFor={i}>
                                {i}
                            </label>

                            {i === 'image' || MULTI_FILE_INPUTS.includes(i) ? (
                                <input
                                    type="file"
                                    ref={fileRef}
                                    name={i}
                                    multiple={MULTI_FILE_INPUTS.includes(i)}
                                    onChange={
                                        i === 'image'
                                            ? handleFileChange
                                            : handleFilesChange
                                    }
                                    className="ms-3"
                                />
                            ) : i === 'content' || i === 'description' ? (
                                <textarea
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
                        <button
                            type="submit"
                            className="px-10 py-5 bg-gray-200">
                            {isAddForm ? 'Add' : 'Edit'}
                        </button>
                    </li>
                </ul>
            </div>
        </form>
    )
}

export default Form
