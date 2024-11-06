import { bg_img } from "./compoents/css_functions"
import {FloatingWhatsApp} from "react-floating-whatsapp"

const Site = () => {
    return (
        <div>
            <div className="bg-black d-flex justify-content-between p-2 text-white  align-items-center">
                <div>
                    <img src="https://ngratesc.sirv.com/ristian/logo.png" width={60} className="img-fluid"/>
                    <span className="fs-5 custom_font">Ristian Consultancy</span>
                </div>
                <div>
                    <a href="tel:+263771939493" target="_blank">
                        <button className="btn text-white primary_button">Call Us</button>
                    </a>
                </div>
            </div>
            <div className="d-flex  justify-content-center align-items-center"
                 style={{...bg_img("https://ngratesc.sirv.com/ristian/home.jpg"), height: "90vh"}}>
                <div className="text-center bg-light bg-opacity-50 p-5 rounded">
                    <h1>Ristian Consultancy</h1>
                    <p className="f fst-italic">"Connecting Talent with Top Employers and Streamlining HR Solutions for Business Success"</p>
                    <div className={"d-flex gap-2 justify-content-center"}>
                        <a href="/business_improvement" target="_blank">
                            <button className="btn primary_button">For Businesses</button>
                        </a>
                        <a href="/individuals" target="_blank">
                            <button className="btn primary_button">For Individuals</button>
                        </a>
                    </div>

                </div>
            </div>


            <FloatingWhatsApp phoneNumber="+263771939493" accountName="Ristian Consultancy"
                              avatar="https://ngratesc.sirv.com/ristian/logo.png"/>
        </div>
    )
}

export default Site