import React from "react";
import styles from './About.module.css'

class About extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="styles.contenedor">
            <h1>Información del creador</h1>
            <img src="Resources/creadorImage.png" alt="Creador" />
        </div>
    }
}
export default About