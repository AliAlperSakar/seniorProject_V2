import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import '../../css/football.css';
import fotoFootball from '../../images/fotos/fotofootball.jpg'
import axios from "axios";
export default class Football extends Component {




    constructor(){
        super();
        this.state={
            football:[]
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8081/tournaments/football")
            .then(response => this.setState({
                football: response.data
            }))

    }

    render() {
        return (
            <div>
               <MainLayout/>
               <div className="mainFootball">
            <p style={{fontSize:"20px",fontWeight:"bold",paddingTop:"1%"}}>Football Tournament</p>
            
            <div className="fotoFootball">
            <img className='fotofootball' src={fotoFootball} />

            </div>
            <div className="contentFootball">
            
            
            
            </div>

               </div>
            </div>
        )
    }
}
