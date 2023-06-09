import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HeadingText from '@/shared/HeadingText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm()
    const onSubmit = async (e: React.FormEvent) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }
    return (
        <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* Header */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HeadingText>
                        <span className="text-primary-500">JOIN NOW </span>
                        TO GET IN SHAPE
                    </HeadingText>
                    <p className="my-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nostrum debitis unde earum officiis tempora
                        doloremque aspernatur, est veniam voluptatum quae alias
                        voluptas libero fuga ad iure quasi adipisci dignissimos
                        culpa.
                    </p>
                </motion.div>
                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            action="https://formsubmit.co/prashbala13@gmail.com"
                        >
                            <input
                                type="text"
                                className="inputStyles"
                                placeholder="NAME"
                                {...register('name', {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === 'required' &&
                                        'This field is required'}
                                    {errors.name.type === 'maxLength' &&
                                        'Max length is 100 characters'}
                                </p>
                            )}
                            <input
                                type="email"
                                className="inputStyles"
                                placeholder="EMAIL"
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'invalid email address',
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === 'required' &&
                                        'This field is required'}
                                    {errors.email.type === 'pattern' &&
                                        'invalid email address'}
                                </p>
                            )}
                            <textarea
                                rows={4}
                                cols={50}
                                className="inputStyles resize-none"
                                placeholder="MESSAGE"
                                {...register('message', {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === 'required' &&
                                        'This field is required'}
                                    {errors.message.type === 'maxLength' &&
                                        'Max length is 100 characters'}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div
                            className="w-full
                        before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext"
                        >
                            <img
                                className="w-full"
                                src={ContactUsPageGraphic}
                                alt="contact us page graphics"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
export default ContactUs
