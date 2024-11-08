import { bg_img } from "../compoents/css_functions"
import Marquee from "react-fast-marquee"
import Star from "../compoents/StarRating"
import {FloatingWhatsApp} from "react-floating-whatsapp"

const Companies = () => {
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
                 style={{...bg_img("https://ngratesc.sirv.com/ristian/811.jpg"), height: "90vh"}}>
                <div className="text-center bg-light bg-opacity-50 p-5 rounded">
                    <h1>Streamlined HR Solutions</h1>
                    <p className="f fst-italic">"Empowering Businesses through People Solutions"</p>
                    <a href="https://wa.me/263771939493" target="_blank">
                        <button className="btn primary_button">Find Out More</button>
                    </a>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm  primary_background text-white p-5">
                        <h1>Welcome to Ristian Consultancy</h1>
                        <p>
                            At Ristian Consultancy, we believe people are the backbone of every successful organization.
                            Our HR consultancy provides customized solutions designed to help businesses like yours
                            thrive. With our expertise in human resources, organizational development, and training, we
                            partner with clients to:
                            <ul>
                                <li>
                                    Design and implement impactful HR strategies that drive growth
                                </li>
                                <li>
                                    Boost employee engagement and optimize performance
                                </li>
                                <li>
                                    Strengthen leadership and management skills within teams
                                </li>
                                <li>
                                    Guide businesses through complex employment regulations
                                </li>
                                <li>
                                    Promote inclusive and diverse workplace cultures
                                </li>
                            </ul>
                        </p>
                        <a href="https://wa.me/263771939493" target="_blank">
                            <button className="btn secondary_button">Get In Touch</button>
                        </a>
                    </div>
                    <div className="col-sm  p-5"
                         style={{...bg_img("https://ngratesc.sirv.com/ristian/2149136841.jpg"), minHeight: "50vh"}}>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm bg-black order-md-2 text-white p-5 align-items-center d-flex">
                        <div>
                            <h1>Our Values</h1>
                            <p>
                                At Ristian Consultancy, our values shape everything we do. We believe in<b>collaboration
                                and partnership</b>, working closely with our clients to achieve shared success. Our
                                commitment to <b>integrity and trust</b> ensures transparency and reliability in all our
                                interactions. We embrace <b>innovation and creativity</b> to bring forward-thinking
                                solutions to every challenge, while prioritizing <b>inclusivity and respect</b> to
                                create a welcoming environment for all. Striving for <b>excellence and quality</b> in
                                our services, we aim to deliver results that empower both individuals and organizations.
                            </p>
                            <a href="https://wa.me/263771939493" target="_blank">
                                <button className="btn primary_button">Get In Touch</button>
                            </a>
                        </div>
            
                    </div>
                    <div className="col-sm p-5"
                         style={{...bg_img("https://ngratesc.sirv.com/ristian/home_third.jpg"), minHeight: "50vh"}}>
            
                    </div>
            
                </div>
            </div>
            <div className="container-fluid primary_background text-white">
                <div>
                    <h1 className="fw-bold display-2 text-center pt-5 pb-5">Our Services</h1>
                </div>
                <div className=" pb-4">
                    <div className="row gap-3 m-4 text-center">
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">HR Strategy Development</p>
                            <p>
                                Crafting HR strategies aligned with your business goals to drive sustainable growth and
                                efficiency.
                            </p>
                        </div>
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">Recruitment and Talent Management</p>
                            <p>
                                Finding and nurturing top talent to build strong, resilient teams that support your
                                company's vision.
                            </p>
                        </div>
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">
                                Performance Management and Development
                            </p>
                            <p>
                                Implementing systems to monitor and enhance employee performance, encouraging continuous
                                improvement.
                            </p>
                        </div>
                    </div>
                    <div className="row gap-3 m-4 text-center">
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">Employee Relations and Conflict Resolution</p>
                            <p>Fostering a positive workplace through proactive employee relations and effective
                                conflict resolution.</p>
                        </div>
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">
                                Benefits and Compensation Design
                            </p>
                            <p>
                                Creating competitive and fair benefits packages that attract and retain top talent,
                                tailored to your team’s needs.
                            </p>
                        </div>
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">Training and Development Programs
                            </p>
                            <p>
                                Building customized training programs to enhance skills and support career progression
                                for your employees.
                            </p>
                        </div>
                    </div>
                    <div className="row gap-3 m-4 text-center">
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">
                                Organizational Design and Restructuring
                            </p>
                            <p>
                                Reshaping organizational structures to improve efficiency, communication, and alignment with company goals.
                            </p>
                        </div>
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">
                                Diversity, Equity, and Inclusion Consulting
                            </p>
                            <p>
                                Promoting a workplace culture that values diversity, fosters inclusion, and ensures equity for all employees.
                            </p>
                        </div>
                        <div className="col-sm bg-black p-3 rounded">
                            <p className="fw-bold">Training and Development Programs
                            </p>
                            <p>
                                Building customized training programs to enhance skills and support career progression
                                for your employees.
                            </p>
                        </div>
                    </div>


                </div>

            </div>
            <div className="text-center bg-black pt-5 pb-5">
                <h1 className="fw-bold display-2 text-white">
                    Industry Expertise
                </h1>
                <p className="text-white">We offer solutions for a diverse range of industries</p>
                <Marquee>
                    <div className="d-flex align-items-center p-2" style={{minWidth: "250px"}}>
                        <div className="primary_background rounded-start p-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-bandaid text-white" viewBox="0 0 16 16">
                                <path
                                    d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242M12.293 8 8.027 3.734 3.738 8.031 8 12.293zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492z"/>
                                <path
                                    d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707M8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Healthcare</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{minWidth: "250px"}}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-book text-white" viewBox="0 0 16 16">
                                <path
                                    d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Education</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{minWidth: "250px"}}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-laptop text-white" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Information Technology</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{minWidth: "250px"}}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-people text-white" viewBox="0 0 16 16">
                                <path
                                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Human Resources</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{minWidth: "250px"}}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-bar-chart text-white" viewBox="0 0 16 16">
                                <path
                                    d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Sales & Marketing</span>
                        </div>

                    </div>
                    <div className="d-flex align-items-center p-2" style={{minWidth: "250px"}}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-truck text-white" viewBox="0 0 16 16">
                                <path
                                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Transportation </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{minWidth: "250px"}}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-person-hearts text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Hospitality & Domestic Services</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{minWidth: "250px"}}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-cone-striped text-white" viewBox="0 0 16 16">
                                <path
                                    d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Construction</span>
                        </div>
                    </div>
                </Marquee>
                <div className="row gap-4 m-4">
                    <div className="col-sm bg-white rounded d-flex  justify-content-center mb-2">
                        <div>
                            <br/>

                            <Star/>
                            <br/>

                            <p className="fst-italic">"Team work is the bread and butter for any business to succeed. Ristian offers informative workshops which are bound to change the way you function as individuals and companies"</p>
                            <p className="fw-bold">i-Claim</p>
                        </div>

                    </div>
                    <div className="col-sm bg-white rounded mb-2">
                        <br/>

                        <Star/>
                        <br/>
                        <p className="fst-italic">"Building a new company is a learning experience. At times we would not make progress due to not having the right people or assigning the wrong roles. Thanks to Ristian for helping us chart our organization"</p>
                        <p className="fw-bold">Attribute AI</p>
                    </div>
                    <div className="col-sm bg-white rounded mb-2">
                        <br/>
                        <Star/>
                        <br/>
                        <p className="fst-italic">"The team at Ristian is thorough and insightful. Their expertise on inclusion in the workplace is invaluable and should be essential knowledge for every organization. Highly recommended!"</p>
                        <p className="fw-bold">Delve</p>
                    </div>
                </div>

            </div>
            <div className="text-center container pt-2 pb-2">
                <h1 className="text-black">Join Us Today</h1>
                <p>
                    
                    <br/>
                    Send an email to <a href="mailto:info@ristian.co.zw">info@ristian.co.zw</a>
                    <br/>
                    Call on <a href="tel:+263771939493">+263 77 193 9493</a>
                </p>
            </div>
            <div className="text-center primary_background ">
                <span className="text-white">Made By <a className="text-white"
                                                        href="https://aurorasystems.co.zw">Aurora</a></span>
            </div>
            <FloatingWhatsApp phoneNumber="+263771939493" accountName="Ristian Consultancy"
                              avatar="https://ngratesc.sirv.com/ristian/logo.png"/>
        </div>
    )
}

export default Companies