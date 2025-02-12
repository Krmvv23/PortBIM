import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { Container } from "react-bootstrap";
import Link from "next/link";
import "../css/homeNews.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ><MdKeyboardArrowLeft className="fs-1" /></div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ><MdKeyboardArrowRight className="fs-1" /></div>
    );
}
const News = () => {
    var settings = {
        arrows: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode:true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
        ]
    };
    return (
        <Container>
            <div className="recently-news">
                <div className="recently-news-header d-flex align-items-center justify-content-between mb-4">
                    <h2 className="header-underline">Recently News</h2>
                    <Link href={"/"}><span>See More</span><MdKeyboardArrowRight className="fs-4" /></Link>
                </div>
                <Slider {...settings} className="recently-news-slider">
                    <div className="slider-item">
                        <div className="slider-item-background">
                            <div className="slider-item-img">
                                <img src={'../img/news-slider-example.webp'} />
                            </div>
                            <div className="slider-item-body">
                                <Link href={"/"}><h3 className="mt-3 mb-2">Nisi ullamco consequat id nostrud amet cillum do</h3></Link>
                                <div className="slider-item-body-date"><CiCalendarDate  className="fs-4"/><span>12-01-2025</span></div>
                            </div>
                            <Link href={"/"} className="slider-item-btn">
                                <span>Read More</span><MdKeyboardArrowRight className="fs-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="slider-item-background">
                            <div className="slider-item-img">
                                <img src={'../img/news-slider-example.webp'} />
                            </div>
                            <div className="slider-item-body">
                                <Link href={"/"}><h3 className="mt-3 mb-2">Nisi ullamco consequat id nostrud amet cillum do</h3></Link>
                                <div className="slider-item-body-date"><CiCalendarDate  className="fs-4"/><span>12-01-2025</span></div>
                            </div>
                            <Link href={"/"} className="slider-item-btn">
                                <span>Read More</span><MdKeyboardArrowRight className="fs-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="slider-item-background">
                            <div className="slider-item-img">
                                <img src={'../img/news-slider-example.webp'} />
                            </div>
                            <div className="slider-item-body">
                                <Link href={"/"}><h3 className="mt-3 mb-2">Nisi ullamco consequat id nostrud amet cillum do</h3></Link>
                                <div className="slider-item-body-date"><CiCalendarDate  className="fs-4"/><span>12-01-2025</span></div>
                            </div>
                            <Link href={"/"} className="slider-item-btn">
                                <span>Read More</span><MdKeyboardArrowRight className="fs-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="slider-item-background">
                            <div className="slider-item-img">
                                <img src={'../img/news-slider-example.webp'} />
                            </div>
                            <div className="slider-item-body">
                                <Link href={"/"}><h3 className="mt-3 mb-2">Nisi ullamco consequat id nostrud amet cillum do</h3></Link>
                                <div className="slider-item-body-date"><CiCalendarDate  className="fs-4"/><span>12-01-2025</span></div>
                            </div>
                            <Link href={"/"} className="slider-item-btn">
                                <span>Read More</span><MdKeyboardArrowRight className="fs-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="slider-item-background">
                            <div className="slider-item-img">
                                <img src={'../img/news-slider-example.webp'} />
                            </div>
                            <div className="slider-item-body">
                                <Link href={"/"}><h3 className="mt-3 mb-2">Nisi ullamco consequat id nostrud amet cillum do</h3></Link>
                                <div className="slider-item-body-date"><CiCalendarDate  className="fs-4"/><span>12-01-2025</span></div>
                            </div>
                            <Link href={"/"} className="slider-item-btn">
                                <span>Read More</span><MdKeyboardArrowRight className="fs-4" />
                            </Link>
                        </div>
                    </div>


                </Slider>
            </div>
        </Container>

    )

}

export default News;