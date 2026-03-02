import Navbar from '@/components/Navbar'
import Chatty from '@/components/Chatty'
import Socials from '@/components/Socials'

const UserLayout = ({ children }) => {
    return (
        <div>
            <Navbar />

            <div className="pt-20 w-full h-full">
                {children}
                <Socials />
                <Chatty />
            </div>
        </div>
    )
}
export default UserLayout
