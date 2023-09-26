import error from "../../assets/images/error.svg"
const Error = () => {
    return (
        <div className="error py-[50px]">
            <div className="container">
                <img src={error} className="w-2/3 mx-auto" alt="" />
            </div>
        </div>
    )
}

export default Error