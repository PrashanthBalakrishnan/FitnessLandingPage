type Props = {
    name: string
    description: string
    image: string
}
const Class = ({ name, description, image }: Props) => {
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className="overlayStyles">
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt={`${image}`} />
        </li>
    )
}
export default Class
