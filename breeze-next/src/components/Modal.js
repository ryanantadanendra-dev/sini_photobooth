'use client'

const Modal = ({ children, isOpen, setIsOpen }) => {
    return (
        <div
            className={`overlay ${isOpen ? 'visible opacity-100' : 'hidden opacity-0'} bg-[#00000050] fixed top-0 left-0 w-screen h-screen flex items-center justify-center`}
            onClick={() => setIsOpen(!isOpen)}>
            <div
                onClick={e => e.stopPropagation()}
                className={`w-[35rem] h-[35rem] rounded-xl bg-white ${isOpen ? 'visible opacity-100' : 'hidden opacity-0'} flex flex-col items-center justify-center`}>
                {children}
            </div>
        </div>
    )
}
export default Modal
