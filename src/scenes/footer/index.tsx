import Logo from '@/assets/Logo.png'

const Footer = () => {
    return (
        <footer className=" bg-primary-100 py-16">
            <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="Logo" />
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est quos hic accusamus facere minus repellendus placeat
                        cumque perferendis. Quos, dicta!
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa orci senetus</p>
                    <p className="my-5">Lorem, ipsum.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Lorem ipsum dolor sit.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
