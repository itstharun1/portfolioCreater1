import { Component } from "react";
import './card.css'

class Card  extends Component{


    
    
    render(){
        const name=localStorage.getItem("username");

        return(
                <div className="card">
                    <div className="about-card">
                        <h1 className="s1">Hi ,Iam {name}</h1>
                        <h3 className="s2">Iam a Full Stack Devloper</h3>
                        <p className="p1">Iam a Motivated and versitile,individual,always <br/>eager to take on new challenges.With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset ,Iam ready to make a meaningful contribution and achieve greate things. </p>
                        <a href="https://drive.google.com/file/d/1upM7JKJPrbjEihB43YqMMFYaDzKPpUF0/view?usp=drivesdk">
                        <button className="re-btn">Check Resume</button>
                        </a>
                    </div>
                    <div>
                        <img className="vdk" src="https://i.pinimg.com/736x/ef/5c/c7/ef5cc707f52ac91f68c46f5e51403b83.jpg" alt="vdk" />
                    </div>
                </div>
              )
        }
}


export default Card