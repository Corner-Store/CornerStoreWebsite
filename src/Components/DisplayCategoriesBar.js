import React, { Component } from "react";


class DisplayCategoriesBar extends Component {

    $(document).ready(function() {
            var cards = [
                
                // 			 CARD 1
                
                {
                    image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                    imageAlt: "Lloyd Sibson's Website Banner",
                    imageTitle: "Lloyd Sibson's Logo",
                    imageSocial:
                        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                    imageSocialAlt: "Lloyd Sibson's Social Icon",
                    imageSocialTitle: "Social Icon",
                    link: "https://lloydsibson.com/",
                    title: "Lloyd Sibson",
                    subTitle: "Front-End Developer",
                    text:
                        "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
                },
        
                // 			 CARD 2
                
                {
                    image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                    imageAlt: "Lloyd Sibson's Website Banner",
                    imageTitle: "Lloyd Sibson's Logo",
                    imageSocial:
                        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                    imageSocialAlt: "Lloyd Sibson's Social Icon",
                    imageSocialTitle: "Social Icon",
                    link: "https://lloydsibson.com/",
                    title: "Lloyd Sibson",
                    subTitle: "Front-End Developer",
                    text:
                        "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
                },
                
                // 			 CARD 3
                
                {
                    image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                    imageAlt: "Lloyd Sibson's Website Banner",
                    imageTitle: "Lloyd Sibson's Logo",
                    imageSocial:
                        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                    imageSocialAlt: "Lloyd Sibson's Social Icon",
                    imageSocialTitle: "Social Icon",
                    link: "https://lloydsibson.com/",
                    title: "Lloyd Sibson",
                    subTitle: "Front-End Developer",
                    text:
                        "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
                },
        
                // 			 CARD 4
        
                {
                    image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                    imageAlt: "Lloyd Sibson's Website Banner",
                    imageTitle: "Lloyd Sibson's Logo",
                    imageSocial:
                        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                    imageSocialAlt: "Lloyd Sibson's Social Icon",
                    imageSocialTitle: "Social Icon",
                    link: "https://lloydsibson.com/",
                    title: "Lloyd Sibson",
                    subTitle: "Front-End Developer",
                    text:
                        "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
                },
        
                // 			 CARD 5
                
                {
                    image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                    imageAlt: "Lloyd Sibson's Website Banner",
                    imageTitle: "Lloyd Sibson's Logo",
                    imageSocial:
                        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                    imageSocialAlt: "Lloyd Sibson's Social Icon",
                    imageSocialTitle: "Social Icon",
                    link: "https://lloydsibson.com/",
                    title: "Lloyd Sibson",
                    subTitle: "Front-End Developer",
                    text:
                        "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
                },
        
                // 			 CARD 6
                
                {
                    image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
                    imageAlt: "Lloyd Sibson's Website Banner",
                    imageTitle: "Lloyd Sibson's Logo",
                    imageSocial:
                        "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
                    imageSocialAlt: "Lloyd Sibson's Social Icon",
                    imageSocialTitle: "Social Icon",
                    link: "https://lloydsibson.com/",
                    title: "Lloyd Sibson",
                    subTitle: "Front-End Developer",
                    text:
                        "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
                }
            ];
            var Article = React.createClass({
                render: function() {
                    var image = this.props.data.image,
                        imageAlt = this.props.data.imageAlt,
                        imageTitle = this.props.data.imageTitle,
                        imageSocial = this.props.data.imageSocial,
                        imageSocialAlt = this.props.data.imageSocialAlt,
                        imageSocialTitle = this.props.data.imageSocialTitle,
                        title = this.props.data.title,
                        subTitle = this.props.data.subTitle,
                        text = this.props.data.text,
                        link = this.props.data.link;
                    return (
                        <figure className="card-container">
                            <div className="card">
                                    <img
                                        className="card-hero-img"
                                        src={image}
                                        alt={imageAlt}
                                        title={imageTitle}
                                    />
                                    <div className="card-heading-container">
                                        <img
                                            className="card-social-icon"
                                            src={imageSocial}
                                            alt={imageSocialAlt}
                                            title={imageSocialTitle}
                                        />
                                        <div className="card-title-container">
                                            <h3 className="card-title">{title}</h3>
                                            <p className="card-sub-title">{subTitle}</p>
                                        </div>
                                    </div>
                                    <div className="icon-container">
                                        <i className="far fa-heart heart-icon" />
                                        <p className="heart-liked-text">Liked +1</p>
                                    </div>
                            </div>
                            <a href={link} target="_blank" />
                        </figure>
                    );
                }
            });
        // -----------------------------------------------------------------------------
        // -----------------------------------------------------------------------------
            var News = React.createClass({
                render: function() {
                    var data = this.props.data;
                    var newsTemplate;
                    var settings = {
                        dots: false,
                        infinite: false,
                        accessibility: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 700,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    };
                    if (data.length > 0) {
                        newsTemplate = data.map(function(item, index) {
                            return (
                                <div key={index}>
                                    <Article data={item} />
                                </div>
                            );
                        });
                    } else {
                        newsTemplate = <p>Please add some cards</p>;
                    }
                    return (
                        <div className="news">
                            <Slider {...settings}>{newsTemplate}</Slider>
                        </div>
                    );
                }
            });
            var Carousel = React.createClass({
                render: function() {
                    return (
                        <div className="carousel">
                            <News data={cards} />
                        </div>
                    );
                }
            });
            ReactDOM.render(<Carousel />, document.getElementById("root"));
        
        // -----------------------------------------------------------------------------
        // JAVASCRIPT
        // -----------------------------------------------------------------------------
        
        // CHANGES HEART ICON ON CLICK AND ALSO TOGGLES THE WORD 'LIKED'
            
            $(".heart-icon").on("click", function() {
                $(this).toggleClass("fas");
                $(this)
                    .siblings("p")
                    .toggleClass("liked");
            });
            
        // END	
        }); 
        
        

// end of class 
}
export default DisplayCategoriesBar

