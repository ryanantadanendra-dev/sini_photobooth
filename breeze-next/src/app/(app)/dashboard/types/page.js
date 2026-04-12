'use client'
import { useType } from '@/hooks/type'
import { useState } from 'react'
import Header from '../../Header'
import Table from '@/components/Table'
import Modal from '@/components/Modal'
import Swal from 'sweetalert2'
import { Milonga } from 'next/font/google'

const TypesPage = () => {
    const { types, add, deleteData, edit, deleteImage, addImage } = useType()
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        subname: '',
        description: '',
        image: null,
        setupImage: null,
        vidLink: '',
    })

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
                image: null,
            })
        }

        if (files) {
            {
                setFormData({
                    ...formData,
                    setupImages: files,
                })
            }
        }
    }

    const handleFileChange = e => {
        const file = e.target.files[0]
        const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg']
        const inputName = e.target.name

        if (!ALLOWED_TYPES.includes(file.type)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'File Must Be JPG, JPEG, Or PNG',
            })
            e.target.value = null
            setFormData({ ...formData, [inputName]: null }) // ✅ only reset the right field
            return
        }

        if (file.size > 2 * 1024 * 1024) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'File Must Be Under 2mb',
            })
            e.target.value = null
            setFormData({ ...formData, [inputName]: null })
            return
        }

        setFormData({ ...formData, [inputName]: file })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await add(formData)

            setFormData({
                name: '',
                subname: '',
                description: '',
                image: null,
                setupImage: null,
                vidLink: '',
            })
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Type Added Successfully!',
            })
            setIsOpen(false)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.message,
            })
        }
    }

    const handleDelete = slug => {
        Swal.fire({
            title: 'Are you sure to delete this Type?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    await deleteData(slug)

                    if (result) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your Type has been deleted.',
                            icon: 'success',
                        })
                        setIsOpen(false)
                    }
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                    })
                }
            }
        })
    }

    const handleDeleteImage = (slug, index) => {
        Swal.fire({
            title: 'Are you sure to delete this Type?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    await deleteImage(slug, index)

                    if (result) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your Image has been deleted.',
                            icon: 'success',
                        })
                        setIsOpen(false)
                    }
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                    })
                }
            }
        })
    }

    return (
        <div>
            <Header title="Types Page" />
            <div className="md:px-12 mt-5">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Add Type">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8">
                        <path
                            fill="rgb(0, 0, 0)"
                            d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                        />
                    </svg>
                </button>
                <div className="overflow-x-auto min-w-screen">
                    <Table
                        name="types"
                        datas={types?.data}
                        columnNames={[
                            'id',
                            'name',
                            'subname',
                            'description',
                            'image',
                            'setup images',
                            'video link',
                            'action',
                        ]}
                        editInputs={[
                            'name',
                            'subname',
                            'description',
                            'vidLink',
                        ]}
                        handleDelete={handleDelete}
                        handleDeleteImage={handleDeleteImage}
                    />
                </div>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                    <h2 className="text-2xl font-bold">Add Type</h2>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li className="flex mt-4">
                                <label className="w-32" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="ms-3"
                                />
                            </li>
                            <li className="flex mt-4">
                                <label className="w-32" htmlFor="subname">
                                    Subname
                                </label>
                                <input
                                    type="text"
                                    name="subname"
                                    value={formData.subname}
                                    onChange={handleChange}
                                    className="ms-3"
                                />
                            </li>
                            <li className="flex mt-4">
                                <label htmlFor="description" className="w-32">
                                    Description
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="ms-3 h-32"
                                />
                            </li>
                            <li className="flex mt-4">
                                <label htmlFor="image" className="w-32">
                                    image
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleFileChange}
                                    className="ms-3"
                                />
                            </li>
                            <li className="flex mt-4">
                                <label htmlFor="setupImage" className="w-32">
                                    Setup Image
                                </label>
                                <input
                                    type="file"
                                    name="setupImage"
                                    onChange={handleFileChange}
                                    className="ms-3"
                                />
                            </li>
                            <li className="flex mt-4">
                                <label htmlFor="vidlink" className="w-32">
                                    Video Link
                                </label>
                                <input
                                    type="text"
                                    name="vidLink"
                                    value={formData.vidLink}
                                    onChange={handleChange}
                                    className="ms-3"
                                />
                            </li>
                            <li className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="px-10 py-5 bg-gray-200">
                                    Add
                                </button>
                            </li>
                        </ul>
                    </form>
                </Modal>
            </div>
        </div>
    )
}
export default TypesPage
