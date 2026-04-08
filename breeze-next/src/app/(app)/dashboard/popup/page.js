'use client'

import Header from '../../Header'
import Image from 'next/image'
import { usePopup } from '@/hooks/popup'
import { useState } from 'react'
import Modal from '@/components/Modal'
import Form from '@/components/Form'
import Swal from 'sweetalert2'

const PopupPage = () => {
    const { popup, edit } = usePopup()
    const [isOpen, setIsOpen] = useState(false)

    const handleEdit = async (e, _, formData, inputRef) => {
        e.preventDefault()

        try {
            await edit(popup?.data?.id, formData)

            Swal.fire({
                title: 'Success',
                text: 'Popup Updated Successfully',
                icon: 'success',
            })

            inputRef.current.value = null

            setIsOpen(false)
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
            })
        }
    }

    return (
        <div>
            <Header title="Popup Page" />
            <div className="mt-5 flex flex-col items-center justify-center">
                <figure className="relative w-56 h-56">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${popup?.data?.image}`}
                        alt="Popup Image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </figure>
                <svg
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 mt-4">
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                </svg>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <Form
                    title="Edit Image"
                    inputs={['image']}
                    data={popup?.data}
                    handle={handleEdit}
                />
            </Modal>
        </div>
    )
}
export default PopupPage
