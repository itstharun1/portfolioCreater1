import { Component } from "react";
import Navbar from "../Navbar/navbar";
import './project.css'

class ProjectCard extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div className="projects">
                    <div className="each-card">
                                <img className="img-clg" src="https://static-cse.canva.com/blob/1100617/create_portfolio_lead.jpg" alt="img"/>
                                <h3>Portfolio Maker</h3>
                                <p>
                                    Takes the input from the user   and generates a professional portfolio website with an interactiveA web application 
                                </p>
                                <h4>React-js</h4>
                    </div>
                    <div className="each-card">
                                <img className="img-clg" src="https://assets.architecturaldigest.in/photos/60083bc4a8f83977417042e1/master/pass/well-designed-fashion-stores-mumbai-featured-image-1366x768.jpg" alt="img"/>
                                <h3>Rowdy Cloths</h3>
                                <p>
                                    Cloth store with  a user login system, where users can create their own profile and add items to their cart. Simply a flipcart cloned version.
                                </p>
                                <h4>React-js</h4>
                    </div>
                    <div className="each-card">
                                <img className="img-clg" src="https://foolishdeveloper.com/wp-content/uploads/2021/11/todo-list-javascript.jpg" alt="img"/>
                                <h3>Todo-List</h3>
                                <p>
                                    Takes input from user and create task for them user can strike and delete the completed task
                                </p>
                                <h4>HTML,CSS,JS</h4>
                    </div>
                    
                    
                    
                </div>
            </div>
        )
    }

}

export default ProjectCard