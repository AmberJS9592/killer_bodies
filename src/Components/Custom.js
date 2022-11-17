import Custom1 from '../images/custom1.jpeg'
import Custom2 from '../images/custom2.JPG'
import Custom3 from '../images/custom3.jpeg'
export default function Custom(){
    return(
        <section>
            <div className="custom container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={Custom1} className="img-fluid" alt=""/>
                        </div>
                        
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={Custom2} className="img-fluid" alt=""/>
                        </div>
                        
                    </div> 
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={Custom3} className="img-fluid" alt=""/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}