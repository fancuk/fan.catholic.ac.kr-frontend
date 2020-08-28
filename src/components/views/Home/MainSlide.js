import React, {Component} from "react";
import "./MainSlide.css"
import catholic from "../../catholic.PNG"
import contest from "../../contest.jpg"
class MainSlide extends Component {
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
            <div id="main-wrap">
                <div id="slider-wrap">
                    <ul id="slider">
                        <li>
                            <img src="http://www.dhnews.co.kr/news/photo/202008/126930_130524_450.jpg"  alt=""/>
                        </li>
                        <li>
                            <img src={catholic} alt=""/>
                        </li>
                        <li>
                            <img src={contest} alt=""/>
                        </li>
                    </ul>
                    <div className="slider-btns" id="next"><span>▶</span></div>
                    <div className="slider-btns" id="previous"><span>◀</span></div>
                    <div id="slider-pagination-wrap">
                        <ul>
                        </ul>
                    </div>
                </div>
                    <div id="contents">
                        <div className="section1">
                            <h2> 행사 <span> EVENTS</span></h2>
                            <ul>
                                <li><span className="thumb">
                                    <img src="https://image.yes24.com/goods/67883659/800x0" alt="" width="204" height="133"/>
                                </span>생활코딩 PHP+MySQL</li>

                                <li><span className="thumb">
                                    <img src="https://image.yes24.com/momo/TopCate2096/MidCate008/209579489.jpg" alt="" width="204" height="133"/>
                                </span>생활코딩 CSS+HTML+자바스크립트</li>

                                <li><span className="thumb">
                                    <img src="https://img.ridicdn.net/cover/1160000018/xxlarge" alt="" width="204" height="133"/>
                                </span>생활코딩 자바스크립트 입문</li>
                            </ul>
                            <a href="#" className="more">MORE</a>
                        </div>
                        <div className="section2">
                            <div className="board1">
                                <h2> 공지사항 <span> NOTICE </span></h2>
                                <ul>
                                    <li><a herf="#">  F.A.N 개강총회 일정안내 </a> <span>[20.08.28] </span></li>
                                    <li><a herf="#">  F.A.N실 이용안내 </a> <span>[20.08.28] </span></li>
                                    <li><a herf="#">  F.A.N 회비납부 안내 </a> <span>[20.08.28] </span></li>
                                </ul>
                            </div>
                            <div className="board2">
                                <h2> 스터디 <span> STUDY </span></h2>
                                <ul>
                                    <li><a herf="#">  스터디게시판 이용규칙 </a> <span>[20.08.28] </span></li>
                                    <li><a herf="#">  스터디 수요조사 </a> <span>[20.08.28] </span></li>
                                    <li><a herf="#">  스터디 활동 인증 </a> <span>[20.08.28] </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default (MainSlide);