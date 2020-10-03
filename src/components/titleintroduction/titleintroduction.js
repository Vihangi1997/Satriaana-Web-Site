import React, { Component } from "react";
import "./titleintroduction.css";
import cardImgSrc from "../../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.png"

class Titleintroduction extends Component {
    render(){
        return(
            <div class="container" style={{marginTop: '10px', marginBottom: '10px'}}>
            <div class="row">
                <div class="col-md-12" style={{marginBottom: '16px'}}>
                    <h1 style={{fontSize: '40px', fontFamily: 'Kumbh Sans', fontWeight: 'bold'}}>We are,</h1>
                    <p style={{fontSize: '21px', fontFamily: 'Kumbh Sans', color: '#21262b'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,&nbsp;<br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card" style={{borderRadius: '10px'}}><img class="card-img w-100 d-block" src={cardImgSrc} style={{objectFit:"cover",background: 'url(./arif-riyanto-vJP-wZ6hGBg-unsplash.png) center / cover no-repeat', height: '320px', borderRadius: '10px'}}/>
                        <div class="card-img-overlay">
                            <h4 style={{fontSize: '21px', fontFamily: 'Kumbh Sans', color: 'rgb(255,255,255)'}}>Lorem Ipsum Dolor Amet</h4>
                            <p style={{fontSize: '21px', fontFamily: 'Kumbh Sans', color: 'rgb(255,255,255)'}}>Nullam id dolor id nibh ultricies vehicula ut id elit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p style={{fontSize: '21px', fontFamily: 'Kumbh Sans', marginTop: '16px', color: '#21262b'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,&nbsp;<br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p><strong style={{fontSize: '18px', fontFamily: 'Kumbh Sans', fontWeight: 'bold'}}><a href="#">Discover More &gt;</a></strong></div>
            </div>
        </div>
        );
    }
}

export default Titleintroduction;
