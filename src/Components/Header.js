import HeaderImg from '../images/IMG_2578.JPG'
export default function Header() {
    return(
        <>
            <section>
                <div className="header">
                    <div>
                        <div className="headerImg">
                            <img src={HeaderImg} alt=""/>
                        </div>
                    
                    </div>
                    <div className='Content'>
                        <h6>Stop Doubting Yourself. Work Hard. Make It Happen!</h6>
                        <button className='btn'>Join Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}