import React, { Component } from "react";
import Slider from "react-slick";

export default class MainSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2>슬라이더</h2>
                <Slider {...settings}>
                    <div>
                        <h3>사진1</h3>
                    </div>
                    <div>
                        <h3>사진2</h3>
                    </div>
                    <div>
                        <h3>사진3</h3>
                    </div>
                    <div>
                        <h3>사진4</h3>
                    </div>
                    <div>
                        <h3>사진5</h3>
                    </div>
                    <div>
                        <h3>사진6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}