import React, { Component } from 'react'
import { Card, Button, Image, Col, Form, Modal } from "react-bootstrap";
import Trump from './imageTrump.PNG'
import JennyImage from './JennyImage.PNG'
import korea from './summit.jpg'

export class Content extends Component {
    render() {


        return (
            <div>
                <div><br/>
                    <h5 className="text">This is New News</h5>
                    <h1 className="text" style={{ color: "black" }}>Home</h1>
                </div>  <br />
                <div>
                    <h3 style={{ textDecoration: "underline", textDecorationColor: "skyblue", textDecorationThickness: "3px" }}><b>Politics</b></h3>
                    <div className="fluid-container">
                        <div className="row"><br />
                            <div className=" col-md-6 col-lg-6 col-xl-4">
                                <Card className="backGround">
                                    <Card.Img variant="top" src={Trump} />

                                </Card><br/>    
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <Card className="backGround">
                                    <Card.Img variant="top" src={JennyImage} />
                                    <Card.Body>
                                        <Card.Text className="makeFont"><h5>
                                            Jenny Lawson is Publishing a New Book and It's Sort of a Coloring Book</h5>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Jonnathan Doe</cite>
                                        </footer>
                                    </Card.Body>
                                </Card><br />
                                <Card className="backGround">
                                    <Card.Body>
                                        <Card.Text className="makeFont"><h5>
                                        Airtel Offers 3 GB Free Data A Month
                                               To Customers Who Switch To Its 4G Service</h5>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Jonnathan Doe</cite>
                                        </footer>
                                    </Card.Body>
                                </Card><br/>
                            </div>

                            <div className=" col-lg-6 col-xl-4 col-md-6">
                                <div className="row">
                                    
                            <Card className="cardView" style={{border:"none"}}>
                                    <Card.Body style={{padding:"0px"}}>
                                        <Card.Text className="backGround1" >
                                           <h6> <b>
                                               Airtel Offers 3 GB Free Data A Month
                                               To Customers Who Switch To Its 4G Service
                                               </b></h6>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Jonnathan Doe</cite>
                                        </footer>
                                        <hr/>
                                    </Card.Body>
                                </Card>
                                <Card className="cardView" style={{border:"none"}}>
                                    <Card.Body style={{padding:"0px"}}>
                                        <Card.Text className="backGround1" >
                                           <h6> <b>
                                               Airtel Offers 3 GB Free Data A Month
                                               Warning Letter For Ankaleshwar Plant Sends Wockhardt 
                                               Shares To Near 2.5 Year Low
                                               </b></h6>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Alice Doe</cite>
                                        </footer>
                                        <hr/>
                                    </Card.Body>
                                </Card>
                                <Card className="cardView" style={{border:"none"}}>
                                    <Card.Body style={{padding:"0px"}}>
                                        <Card.Text className="backGround1" >
                                           <h6> <b>
                                              Sundar Pichai Launches 'Digital Unlocked Programme'
                                               </b></h6>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Jonnathan Doe</cite>
                                        </footer>
                                        <hr/>
                                    </Card.Body>
                                </Card>
                                <Card className="cardView" style={{border:"none"}}>
                                    <Card.Body style={{padding:"0px"}}>
                                        <Card.Text className="backGround1" >
                                           <h6> <b>
                                               Warning Letter For Ankaleshwar Plant Sends Wockhardt 
                                               Shares To Near 2.5 Year Low
                                               </b></h6>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Alice Doe</cite>
                                        </footer>
                                        <hr/>
                                    </Card.Body>
                                </Card>
</div>

                                
</div>
                     <div className="col-md-6 col-lg-6 col-xl-4">
                                <Card className="backGround">
                                    <Card.Img variant="top" src={JennyImage} />
                                    <Card.Body>
                                        <Card.Text className="makeFont"><h5>
                                            Jenny Lawson is Publishing a New Book and It's Sort of a Coloring Book</h5>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Jonnathan Doe</cite>
                                        </footer>
                                    </Card.Body>
                                </Card><br /></div>
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                <Card className="backGround">
                                    <Card.Img variant="top" src={korea} />
                                    <Card.Body>
                                        <Card.Text className="makeFont"><h5>
                                        How Much Do the World’s Top Politicians Get Paid?</h5>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Mark Doe</cite>
                                        </footer>
                                    </Card.Body>
                                </Card><br /></div><div className="col-md-6 col-lg-6 col-xl-4">
                                <Card className="backGround">
                                    <Card.Img variant="top" src={JennyImage} />
                                    <Card.Body>
                                        <Card.Text className="makeFont"><h5>
                                            Jenny Lawson is Publishing a New Book and It's Sort of a Coloring Book</h5>
                                        </Card.Text>
                                        <footer >
                                            <cite title="Source Title">Jonnathan Doe</cite>
                                        </footer>
                                    </Card.Body>
                                </Card><br /></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Content
