import React, {Component} from "react"
import civictyper from "./civictyper.jpeg"

class Honda extends Component {
    render(){
        return(
            <div>
                <h1>Honda</h1>
                <img src={civictyper} alt="Civic photo" ></img>
                <p>Model: Civic Type R</p>
                <p>Year: 2020</p>
            </div>
        )
    }
}

export default Honda