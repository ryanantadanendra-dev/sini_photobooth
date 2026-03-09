import Navbar from '@/components/Navbar'
import Chatty from '@/components/Chatty'
import Footer from '@/components/Footer'

const UserLayout = ({ children }) => {
    return (
        <div>
            <Navbar />

            <div className="pt-20 w-full h-full">
                {children}
                <Chatty />
            </div>

            <Footer />
        </div>
    )
}
export default UserLayout
