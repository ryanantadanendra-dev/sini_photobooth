import Image from 'next/image'
import Logo from '../../public/Assets/logo.png'

const ApplicationLogo = props => (
    <Image src={Logo} alt="Logo" width={100} height={100} />
)

export default ApplicationLogo
