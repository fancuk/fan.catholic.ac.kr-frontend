import React, {Component} from "react";
import "./MainSlide.css"
import News from "./News";
import slider_list from "./slider_list";

class MainSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: "슬라이드1", img: "http://www.dhnews.co.kr/news/photo/202008/126930_130521_449.jpg"},
                {name: "슬라이드2", img:"http://www.dhnews.co.kr/news/photo/202008/126930_130522_449.jpg" },
                {name: "슬라이드3", img: "http://www.dhnews.co.kr/news/photo/202008/126930_130523_450.jpg"}]
        };
        this.state = {
            contactData: [
                {news: "가톨릭대학교", img1: "http://www.dhnews.co.kr/news/photo/202008/126930_130524_450.jpg"},
                {news: "수시", img1:"http://www.dhnews.co.kr/news/photo/202008/126930_130525_451.jpg" },
                {news: "정시", img1: "http://www.dhnews.co.kr/news/photo/202008/126930_130526_451.jpg"}]
        };
    }
    render() {
        window.onload = function(){
        let slideWrapper = document.getElementById('slider-wrap');
        let slideIndex = 0;
        let slides = document.querySelectorAll('#slider-wrap ul li');
        let totalSlides = slides.length;
        let sliderWidth = slideWrapper.clientWidth;
        slides.forEach(function (element) {
            element.style.width = sliderWidth + 'px';
        })
        let slider = document.querySelector('#slider-wrap ul#slider');
        slider.style.width = sliderWidth * totalSlides + 'px';

// 다음, 이전
        let nextBtn = document.getElementById('next');
        let prevBtn = document.getElementById('previous');
        nextBtn.addEventListener('click', function () {
            plusSlides(1);
        });
        prevBtn.addEventListener('click', function () {
            plusSlides(-1);
        });

// hover
        slideWrapper.addEventListener('mouseover', function () {
            this.classList.add('active');
            clearInterval(autoSlider);
        });
        slideWrapper.addEventListener('mouseleave', function () {
            this.classList.remove('active');
            autoSlider = setInterval(function () {
                plusSlides(1);
            }, 3000);
        });

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            slideIndex = n;
            if (slideIndex == -1) {
                slideIndex = totalSlides - 1;
            } else if (slideIndex === totalSlides) {
                slideIndex = 0;
            }

            slider.style.left = -(sliderWidth * slideIndex) + 'px';
            pagination();
        }

//페이징
        slides.forEach(function () {
            let li = document.createElement('li');
            document.querySelector('#slider-pagination-wrap ul').appendChild(li);
        })

        function pagination() {
            let dots = document.querySelectorAll('#slider-pagination-wrap ul li');
            dots.forEach(function (element) {
                element.classList.remove('active');
            });
            dots[slideIndex].classList.add('active');
        }

        pagination();
        let autoSlider = setInterval(function () {
            plusSlides(1);
        }, 3000);
    }
        return (
            <div id="slider-wrap">
                <ul id="slider">
                    {this.state.contactData.map((contact, i) => {
                        return (<slider_list name={contact.name}
                                             img={contact.img}
                                             key={i}/>);
                    })}
                </ul>
                <div className="slider-btns" id="next"><span>▶</span></div>
                <div className="slider-btns" id="previous"><span>◀</span></div>

                <div id="slider-pagination-wrap">
                    <ul>
                    </ul>
                </div>
                <div id="contents">
                    <div className="section1">
                        <h2>소식 및 행사 <span>NEWS &amp; EVENTS</span></h2>
                        <ul>
                            {this.state.contactData.map((c, i) => {
                                return (<News name={c.news}
                                                     img={c.img1}
                                                     key={i}/>);
                            })}
                        </ul>
                        <a href="#" className="more">MORE</a>
                    </div>
                </div>
            </div>
            );
         }
    }
export default (MainSlide);