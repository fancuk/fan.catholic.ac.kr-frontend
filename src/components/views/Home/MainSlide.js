import React, {Component} from "react";
import "./MainSlide.css"
import Slide_list from "./Slide_list";
import Events from "./Events";
import NoticeList from "./NoticeList";
import StudyList from "./StudyList";
import axios from "axios";
import cookie from "react-cookies";


const slideImages =[
    {
        id:1,
        content: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMtZ78%2FbtqwD20cptC%2FgOhvoVW4iWV5F9PKTs51fk%2Fimg.jpg"
    },
    {
        id:2,
        content: 'http://www.dhnews.co.kr/news/photo/202008/126930_130524_450.jpg'
    },
    {
        id:3,
        content: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQRM-FXyZWIBAyD_ogtOoSvirE5ST7qEOdkg&usqp=CAU"
    },
    {
        id:4,
        content: "http://ipsi.catholic.ac.kr/images/content/img_campus_mapW01.jpg"
    }
]


const NewsImages = [
    {
        id:1,
        img: "https://image.yes24.com/goods/67883659/800x0",
        title: "생활코딩 PHP+MySQL"
    },
    {
        id:2,
        img: "https://image.yes24.com/momo/TopCate2096/MidCate008/209579489.jpg",
        title: "생활코딩 CSS+HTML+자바스크립트"
    },
    {
        id:3,
        img: "https://img.ridicdn.net/cover/1160000018/xxlarge",
        title: "생활코딩 자바스크립트 입문"
    },
    {
        id:4,
        img: "https://img.ridicdn.net/cover/1160000018/xxlarge",
        title: "생활코딩 자바스크립트 입문"
    }

]
const NoticeContents = [
    {
        id:1,
        content: "개강총회 일정안내",
        date: "[20.02.28]"
    },
    {
        id:2,
        content: "fan실 이용안내",
        date: "[20.08.28]"
    },
    {
        id:3,
        content: "fan 회비납부 안내",
        date: "[20.07.28]"
    }
]

const StudyContents = [
    {
        id:1,
        content: "스터디게시판 이용규칙",
        date: "[20.02.28]"
    },
    {
        id:2,
        content: "스터디 수요조사",
        date: "[20.08.28]"
    },
    {
        id:3,
        content: "스터디 활동 인증",
        date: "[20.07.28]"
    }
]


class MainSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            slides:[],
            notices:[],
            token:cookie.load('token'),
            user_id:cookie.load('user_id'),
            level:cookie.load('level')
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh() {
        this.state = {
            loading: false,
            slides:[],
            notices:[],
            studies:[]
        }
        this.loadSli();
        this.loadNot();
        this.loadStu()
    }
    loadSli = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/post/detail?board_name=adminBoard&title=1&writer=test12345&date=2020-10-5',{ headers: { Authorization: ` ${cookie.load('token')}` } })
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    slides: data
                });
                console.log(this.state)
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    loadNot = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/post/list?board_name=noticeBoard',{ headers: { Authorization: ` ${cookie.load('token')}` } })
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    notices: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    loadStu = async () => {
        await axios.get('http://fan.catholic.ac.kr:5000/api/post/list?board_name=studyBoard',{ headers: { Authorization: ` ${cookie.load('token')}` } })
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    studies: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    componentDidMount() {
        this.loadSli();
        this.loadNot();
        this.loadStu();
    }

    render() {
        const{slideImage}=this.state;
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
            }

            slides.forEach(function () {
                let li = document.createElement('li');
                document.querySelector('#slider-pagination-wrap ul').appendChild(li);
            })


            let autoSlider = setInterval(function () {
                plusSlides(1);
            }, 3000);
        }
        return (
            <>

            <div id="main-wrap">
                <div id="slider-wrap">
                    <ul id="slider">
                        {slideImages.map((s,index)=>{
                            return(
                                <Slide_list img= {s.content} key={index}/>
                            );
                        })}
                    </ul>
                    <div className="slider-btns" id="next"><span>▶</span></div>
                    <div className="slider-btns" id="previous"><span>◀</span></div>
                    <div id="slider-pagination-wrap">
                        <ul>
                        </ul>
                    </div>
                </div>

                <div id="contents">
                    {this.state.level=='3'?
                        <a id="butt" href="/detail">회원관리</a>:<a></a>}
                    <div className="section1">
                        <h2>F.A.N 소식  <span>NEWS</span></h2>
                            {NewsImages.map((e, index)=>{
                                return(
                                    <Events img={e.img} title={e.title} key={index}></Events>
                                );
                            })}
                    </div>

                    <div className="section2">
                        <div className="board1">
                            <div className="notice">
                                <h2>공지사항<span>NOTICE</span></h2>
                                {NoticeContents.map((n, index)=>{
                                    return(
                                        <NoticeList content={n.content} date={n.date} key={index}></NoticeList>
                                    );
                                })}
                                <a href="/notice" className="more2">MORE</a>
                            </div>
                        </div>
                        <div className="board2">
                            <div className="study">
                                <h2>스터디<span>STUDY</span></h2>
                                {StudyContents.map((n, index)=>{
                                    return(
                                        <StudyList content={n.content} date={n.date} key={index}></StudyList>
                                    );
                                })}
                                <a href="/studyboard" className="more2">MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </>
        );
    }
}
export default (MainSlide);