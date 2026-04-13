'use client'

import Header from '../../Header'
import { usePortfolio } from '@/hooks/portfolio'
import Table from '@/components/Table'
import Modal from '@/components/Modal'
import { useState } from 'react'
import Form from '@/components/Form'
import Swal from 'sweetalert2'

const PortfoliosPage = () => {
    const { portfolios, add, deleteData } = usePortfolio()
    const [isOpen, setIsOpen] = useState(false)

    const handleAdd = async (e, formData, setFormData) => {
        e.preventDefault()

        try {
            await add(formData)

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data Added Successfully!',
            })

            setFormData({
                images: [],
            })

            setIsOpen(false)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data?.message,
            })
        }
    }

    const handleDelete = async id => {
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
                    await deleteData(id)

                    if (result) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your Portfolio has been deleted.',
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
            <Header title="Portfolios Page" />
            <div className="px-12 mt-5">
                <button aria-label="Add Type">
                    <svg
                        onClick={() => setIsOpen(!isOpen)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8">
                        <path
                            fill="rgb(0, 0, 0)"
                            d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                        />
                    </svg>
                </button>
                <div className="table-wrapper w-[50vw] mx-auto">
                    <Table
                        name="portfolios"
                        datas={portfolios?.data}
                        columnNames={['id', 'image', 'action']}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <Form
                    title="Add Image"
                    inputs={['images']}
                    handle={handleAdd}
                />
            </Modal>
        </div>
    )
}
export default PortfoliosPage
