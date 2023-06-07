import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDesc">Sign up for getting the best deals out there.</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList