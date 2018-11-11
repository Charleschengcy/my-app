import React, { Component } from 'react';
import { Col, Row} from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import './App.css';
import img from './Huracan.jpg'



class App extends Component  {
    render() {
        return (
            <div >
                <Header/>
                <Content/>
                <Footer/>
            </div>

        );
    }
}
class Header extends Component{
    render(){
        return(
            <Row style = {myStyle}>
                <Col span={12}>
                    <h1>Header</h1>
                </Col>
            </Row>
        );
    }
}
class Content extends Component{
    render(){
        return(
            <Row>
                <Col xs={10} sm={10} md={10} lg={10} xl={10} style = {myStyle}>
                    <h1>title</h1>
                    <img src={img} alt="img"></img>
                    <p>Date:11/11/2018</p>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} style = {myStyle}>
                    <h2>Nav</h2>
                    <ul>
                        <li>
                            <a href='http://www.Google.com'>Google</a>
                        </li>
                        <li>
                            <a href='http://www.Google.com'>Google</a>
                        </li>
                        <li>
                            <a href='http://www.Google.com'>Google</a>
                        </li>
                        <li>
                            <a href='http://www.Google.com'>Google</a>
                        </li>
                        <li>
                            <a href='http://www.Google.com'>Google</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        );
    }
}
class Footer extends Component{
    render(){
        return(
            <Row style = {myStyle}>
                <Col span={12}>
                    <h1>Footer</h1>
                </Col>
            </Row>
        );
    }
}

const myStyle = {
    textAlign: 'center',
    border: '2px solid black'
};

export default App;
