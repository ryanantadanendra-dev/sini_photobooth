'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import Modal from './Modal'
import Form from './Form'
import Swal from 'sweetalert2'
import { useType } from '@/hooks/type'
import { useBlog } from '@/hooks/blog'

// Form reset states per entity
const RESET_STATES = {
    types: { name: '', subname: '', description: '', vidLink: '' },
    blogs: { title: '', subtitle: '', content: '' },
}

const EditIcon = ({ onClick }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-4 cursor-pointer">
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
    </svg>
)

const DeleteIcon = ({ onClick }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-4 mx-auto cursor-pointer">
        <path d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z" />
    </svg>
)

const AddImageIcon = ({ onClick }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-4 cursor-pointer">
        <path
            fill="rgb(0,0,0)"
            d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM272 224c8.4 0 16.1 4.4 20.5 11.5l88 144c4.5 7.4 4.7 16.7 .5 24.3S368.7 416 360 416L88 416c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l26.4 37.8 61.4-100.5c4.4-7.1 12.1-11.5 20.5-11.5z"
        />
    </svg>
)

const Table = ({
    name,
    datas,
    columnNames,
    editInputs,
    handleDelete,
    handleDeleteImage,
}) => {
    const [isOpen, setIsOpen] = useState('')
    const [data, setData] = useState(null)
    const { edit, editImage, addImage } = useType()
    const { edit: editBlog, editImage: editImageBlog } = useBlog()

    const isPortfolios = name === 'portfolios'
    const isTypes = name === 'types'

    const showSuccess = msg =>
        Swal.fire({ icon: 'success', title: 'Success', text: msg })
    const showError = err =>
        Swal.fire({ icon: 'error', title: 'Error', text: err?.message ?? err })

    const handleEdit = useCallback(
        async (e, slug, formData, setFormData) => {
            e.preventDefault()
            try {
                name === 'types'
                    ? await edit(slug, formData)
                    : await editBlog(slug, formData)
                setFormData(RESET_STATES[name] ?? {})
                showSuccess('Updated Successfully!')
                setIsOpen('')
            } catch (error) {
                showError(error)
            }
        },
        [name, edit, editBlog],
    )

    const handleEditImage = useCallback(
        async (e, slug, formData, _setFormData, fileRef) => {
            e.preventDefault()
            try {
                name === 'types'
                    ? await editImage(slug, formData)
                    : await editImageBlog(slug, formData)
                if (fileRef?.current) fileRef.current.value = null
                showSuccess('Image Updated Successfully!')
                setIsOpen('')
            } catch (error) {
                showError(error)
            }
        },
        [name, editImage, editImageBlog],
    )

    const handleAddImage = async (e, slug, formData) => {
        e.preventDefault()

        try {
            const result = await addImage(slug, formData)

            if (result) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Image Added Successfully!',
                })

                setIsOpen(false)
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
            })
        }
    }

    const openModal = useCallback((type, rowData) => {
        setIsOpen(type)
        setData(rowData)
    }, [])

    return (
        <>
            <table className="w-full mt-4">
                <thead>
                    <tr>
                        {columnNames.map(cl => (
                            <th
                                className="text-xs md:text-lg text-center"
                                key={cl}>
                                {cl}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {datas?.map((row, index) => (
                        <tr
                            key={row.id ?? index}
                            className="text-black h-32 md:h-56">
                            <td className="w-10">{row.id}</td>

                            {!isPortfolios && (
                                <>
                                    <td
                                        className={`align-middle w-32 ${row.name || row.title ? '' : 'invisible'}`}>
                                        <div className="w-32">
                                            <p className="text-xs md:text-lg">
                                                {row.name ?? row.title}
                                            </p>
                                        </div>
                                    </td>
                                    <td
                                        className={`align-middle w-40 ${row.subname || row.subtitle ? '' : 'invisible'}`}>
                                        <div className="w-40">
                                            {row.subname ?? row.subtitle}
                                        </div>
                                    </td>
                                    <td
                                        className={`w-72 ${row.description || row.content ? '' : 'invisible'}`}>
                                        <div className="w-72 max-h-32 overflow-y-auto">
                                            {row.description ?? row.content}
                                        </div>
                                    </td>
                                </>
                            )}

                            <td className="md:w-full w-32">
                                <div className="flex flex-col items-center justify-center w-full">
                                    <figure className="relative w-20 h-20 md:w-32 md:h-32 mb-2">
                                        <Image
                                            fill
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${row.image}`}
                                            alt={
                                                row.name ?? row.title ?? 'Image'
                                            }
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                    </figure>
                                    {!isPortfolios && (
                                        <EditIcon
                                            onClick={() =>
                                                openModal('edit-image', row)
                                            }
                                        />
                                    )}
                                </div>
                            </td>

                            {isTypes && (
                                <td className="w-32">
                                    <div className="flex flex-col items-center justify-center w-56">
                                        <figure className="relative w-20 h-20 md:w-32 md:h-32 mb-2">
                                            <Image
                                                fill
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${row.setupImage}`}
                                                alt={
                                                    row.name ??
                                                    row.title ??
                                                    'Image'
                                                }
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </figure>
                                        {!isPortfolios && (
                                            <EditIcon
                                                onClick={() =>
                                                    openModal(
                                                        'edit-setupimage',
                                                        row,
                                                    )
                                                }
                                            />
                                        )}
                                    </div>
                                </td>
                            )}

                            {row.vidLink && (
                                <td className="min-w-32 ps-2">{row.vidLink}</td>
                            )}

                            <td className="w-32">
                                <div className="flex gap-4 w-20">
                                    {!isPortfolios && (
                                        <EditIcon
                                            onClick={() =>
                                                openModal('edit', row)
                                            }
                                        />
                                    )}
                                    <DeleteIcon
                                        onClick={() =>
                                            handleDelete(
                                                isPortfolios
                                                    ? row.id
                                                    : row.slug,
                                            )
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                {isOpen === 'edit' && (
                    <Form
                        title="Edit Type"
                        inputs={editInputs}
                        data={data}
                        handle={handleEdit}
                    />
                )}
                {isOpen === 'edit-image' && (
                    <Form
                        title="Edit Image"
                        inputs={['image']}
                        data={data}
                        handle={handleEditImage}
                    />
                )}
                {isOpen === 'edit-setupimage' && (
                    <Form
                        title="Edit Setup Image"
                        inputs={['setupImage']}
                        data={data}
                        handle={handleEditImage}
                    />
                )}
                {isOpen === 'add-image' && (
                    <Form
                        title="Add Image"
                        inputs={['setupImages']}
                        data={data}
                        handle={handleAddImage}
                    />
                )}
            </Modal>
        </>
    )
}

export default Table
