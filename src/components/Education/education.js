import { Component } from "react";
import Navbar from "../Navbar/navbar";
import './education.css'

class Education extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div className="education-card">
                    <div className="each-card">
                                <img className="img-clg" src="https://lh4.googleusercontent.com/proxy/cPg0haU2E7AjUJcL9sOzLVeBtT-pUoWTxOxeQ5b23pCYdZV1GUmY4tH9jZ08HSBXPrkihPL9ZV_qR3VAAQ" alt="img"/>
                                <h3>university college of science saifabad <span>BCA-3yr</span> </h3>
                                <h5>Grade:80%</h5>
                                <h6>Oct 2022-Oct-2025</h6>
                                <p>I am currently pursuing a Bachelor's of Computer application
                                     at university college of science , saifabad 
                                     I have completed 4 semesters and have a CGPA of 8. 
                                     I have taken courses in Data Structures, Algorithms, Object-Oriented Programming,
                                      Database Management Systems, Operating Systems, and Computer Networks,Full stack web dev
                                </p>
                    </div>
                    <div className="each-card">
                                <img className="img-clg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWjSssudyEzxK-x7ukCv2krSl37JdJTRxbte_ozg67g&s" alt="img"/>
                                <h3>TSWRJC,bhiknoor<span>BIPC</span> </h3>
                                <h5>Grade:96%</h5>
                                <h6>Oct 2019-Oct-2021</h6>
                                <p>I completed my class 12 high school education at TSWRJC 
                                    Bhiknoor where I studied bipc.
                                </p>
                    </div>
                    <div className="each-card">
                                <img className="img-clg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1ORtePmiuh30E9W1RNBD9brr4CGqFlD0nHiMjHjo_g&s" alt="img"/>
                                <h3>Matrix High School,Varni </h3>
                                <h5>Grade:97%</h5>
                                <h6>Oct 2016-Oct-2019</h6>
                                <p>
                                I completed my class 10 education at Matrix high school,Varni
                                  where I studied Science with Computer Application.
                                </p>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default Education