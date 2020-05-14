import React, { Component } from 'react'
import axios from "axios";
import MainLayout from '../../layouts/MainLayout'
import '../../css/racketsports.css';
import fotoRacketSports from '../../images/fotos/fotoracketsports.jpg'

export default class RacketSports extends Component {
    constructor(){
        super();
        this.state={
            racketsports:[]
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8081/tournaments/racketsports")
            .then(response => this.setState({
                racketsports: response.data
            }))

    }
    render() {
        return (
            <div>
            <MainLayout/>
            <div className="mainRacketSports">
         <p style={{fontSize:"20px",fontWeight:"bold",paddingTop:"1%"}}>Racket Sports Tournament</p>
         
         <div className="fotoRacketSports">
         <img className='fotoRacketSports' src={fotoRacketSports} />

         </div>
         <div className="contentRacketSports">
         
         
         
         </div>

            </div>
         </div>
        )
    }
}
