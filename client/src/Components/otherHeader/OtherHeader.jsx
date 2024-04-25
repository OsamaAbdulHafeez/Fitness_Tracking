import Header from "../../Components/header/Header"
const OtherHeader = () => {
    return (
        <>
            <div className='hero'>
                <div className="blur blur-p-1"></div>
                <div className="blur blur-p-2"></div>
                <div className="left-h">
                    <Header />
                </div>
                <div
                    style={{ background: 'none' }}
                    className="right-h">
                    <button
                        style={{ background: 'var(--planCard)', top: '2.5rem', color: 'white' }}
                        className='btn'>Join Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default OtherHeader
