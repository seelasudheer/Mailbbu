import React, { Component } from 'react'
import { Card, Button, Image, Col, Form, Modal } from "react-bootstrap";
import Trump from './imageTrump.PNG'
import JennyImage from './JennyImage.PNG'
import korea from './summit.jpg'

export class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        check:true,
        getHeight:''     
        }
        this.callme=this.callme.bind(this) 
    }
    componentDidMount(){
        window.addEventListener('resize',this.callme)
    }
    callme(){
        var w = document.documentElement.clientWidth;
        console.log("Dasd",w);
        if(w==768||w===751){
            this.setState({
            check:false
            })
        }else{
             this.setState({
                check:true
                })
        }
        
    }
   
    render() {

        return (
            <div className="container" >
                <div><br />
                    <h5 className="text">This is New News</h5>
                    <h1 className="text" style={{ color: "black" }}>Home</h1>
                </div>  <br />
                <div>
                    <h3><b>Politics</b></h3>
                 <hr className="horizon"/>
                   <br/> <div className="fluid-container">
                        <div className="row"><br />
                            <div className=" col-md-6 col-lg-6 col-xl-4">
                                <Card>
                                    <Card.Img variant="top" src={Trump} />
                                </Card><br />
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <Card className="backGround" style={{borderRadius:"0rem",border:"0px"}}>
                                    <Card.Img variant="top" src={JennyImage} />
                                    <Card.Body className="body1" style={{padding:this.state.check?"17px":"9px"}}>
                                        <Card.Text className="makeFont"><span>
                                            Jenny Lawson is Publishing a New Book and It's Sort of a Coloring Book</span>
                                        </Card.Text>
                                        <footer  >
                                            <cite title="Source Title" className="footer1">Jonnathan Doe</cite>
                                        </footer>
                                    </Card.Body>
                                </Card><br/>
                                <Card className="backGround" style={{borderRadius:"0rem",border:"0px"}}>
                                    <Card.Body  className="body1" style={{padding:this.state.check?"17px":"9px"}}>
                                        <Card.Text className="makeFont"><span>
                                            Airtel Offers 3 GB Free Data A Month
                                               To Customers Who Switch To Its 4G Service</span>
                                        </Card.Text>
                                        <footer  >
                                            <cite title="Source Title" className="footer1">Alice Doe</cite>
                                        </footer>
                                    </Card.Body>
                                </Card><br/>
                            </div>




                            <div className=" col-lg-6 col-xl-4 col-md-12">
                              <div className="row">
                                  <div className="col-xl-12 col-md-6">
                                    <Card className="cardView" style={{ border: "none" }}>
                                        <Card.Body  style={{padding:"0px"}}>
                                            <Card.Text>
                                                <h6 className={this.state.check?"backGround2":"backGround1"}>
                                                    Airtel Offers 3 GB Free Data A Month
                                                    To Customers Who Switch To Its 4G Service
                                               </h6>
                                            </Card.Text>
                                            <footer className="footer1" >
                                                <cite title="Source Title">Alex Parkinson</cite>
                                            </footer>
                                            <hr />
                                        </Card.Body>
                                    </Card>
                                    </div>
                               <div className="col-xl-12  col-md-6">
                                    <Card className=" cardView" style={{ border: "none" }}>
                                        <Card.Body  style={{padding:"0px"}} >
                                            <Card.Text  >
                                                <h6 className={this.state.check?"backGround2":"backGround1"}> 
                                                    Warning Letter For Ankaleshwar Plant Sends Wockhardt
                                                    Shares To Near 2.5 Year Low
                                               </h6>
                                            </Card.Text>
                                            <footer className="footer1" >
                                                <cite title="Source Title">Alice Doe</cite>
                                            </footer>
                                            <hr />
                                        </Card.Body>
                                    </Card>
                                    </div>
                               <div className="col-xl-12  col-md-6">
                                    <Card className="cardView" style={{ border: "none" }}>
                                        <Card.Body  style={{padding:"0px"}} >
                                            <Card.Text >
                                                <h6 className={this.state.check?"backGround2":"backGround1"}>
                                                    Sundar Pichai Launches `Digital Unlocked` Programme
                                               </h6>
                                            </Card.Text>
                                            <footer className="footer1">
                                                <cite title="Source Title">Jonnathan Doe</cite>
                                            </footer>
                                            <hr />
                                        </Card.Body>
                                    </Card>
                                    </div>
                                    <div className="col-xl-12  col-md-6">
                                    <Card className="cardView" style={{ border: "none" }}>
                                        <Card.Body  style={{padding:"0px"}} >
                                            <Card.Text >
                                                <h6 className={this.state.check?"backGround2":"backGround1"}>
                                                Warning Letter For Ankaleshwar Plant Sends Wockhardt
                                                    Shares To Near 2.5 Year Low
                                               </h6>
                                            </Card.Text>
                                            <footer className="footer1">
                                                <cite title="Source Title">Alice Doe</cite>
                                            </footer>
                                        </Card.Body>
                                    </Card>
                                    </div>
                               
                                </div>
                        
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Content
