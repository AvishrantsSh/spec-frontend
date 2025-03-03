// Import Components
import React, { Component } from "react";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
// import Gallery from "react-photo-gallery";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { galleryURL } from "../../../components/Routes";
// import {
//   faChevronRight,
//   faChevronLeft,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";
import Gallery from "components/UI/Gallery/Gallery";
// import LightGallery from 'lightgallery/react';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

//CSS
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
import "assets/styles/gallery.css";

// Constants
// const photos = require("./photos.json");

// console.log(lightgallery)
// console.log(gallery)
export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullImageCard: false,
      imageUrl: null,
      currentIndex: 0,
      data: [],
      title: this.props.location.search.slice(6),
      // tt: this.props.location,
      currentImage: 0,
      viewerIsOpen: false,
      load_status: true,
    };
  }
  componentDidMount() {
    let url = "/?event=" + this.state.title;
    // console.log(this.state.tt)
    if (this.state.title === "Random") {
      url = "";
    }
    console.log(this.state.url);
    axios
      .get(galleryURL + url)
      .then((response) => {
        let photos = response.data;
        // function select(a,b){
        //     if(a.year>b.year){
        //         return 1;
        //     }
        //     else{
        //         return -1;
        //     }
        // }
        // rs.sort(select);
        // console.log(rs);
        // const photos = rs;
        // for (let i = 0; i < response.data.length; i++) {
        //     rs[i].src = response.data[i].thumb_image_url;
        //     rs[i].width = 3;
        //     rs[i].height = 4;
        //     if (i % 3 === 0) {
        //         rs[i].width = 4;
        //         rs[i].height = 3;
        //     }
        //     if (i % 2 === 1) {
        //         rs[i].width = 3;
        //         rs[i].height = 2;
        //     }
        //     else if (i % 2 === 0) {
        //         rs[i].width = 4;
        //         rs[i].height = 3;
        //     }
        //     if (i % 7 === 0) {
        //         rs[i].width = 3;
        //         rs[i].height = 4;
        //     }
        //     if (i % 5 === 0) {
        //         rs[i].width = 6;
        //         rs[i].height = 5;
        //     }
        //     if (i % 4 === 0) {
        //         rs[i].width = 4;
        //         rs[i].height = 2;
        //     }
        // }
        this.setState({ data: photos });
        this.setState({ load_status: false });
        console.log(photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // openLightbox = (event, { photo, index }) => {
  //     this.setState({ currentImage: index, viewerIsOpen: true })
  //     this.showImage(photo,index);
  // };
  // closeLightbox = () => {
  //     this.setState({ currentImage: 0, viewerIsOpen: false })
  // };
  // showImage = (img, ind) => {
  //     let url = this.state.data[ind].image_url;
  //     this.setState({
  //         FullImageCard: true,
  //         imageUrl: url,
  //         currentIndex: ind,
  //     });
  // }
  // showPrev = (ind) => {
  //     if (ind > 0) {
  //         let url = this.state.data[ind - 1].image_url;
  //         this.setState({
  //             FullImageCard: true,
  //             imageUrl: url,
  //             currentIndex: ind - 1,
  //         });
  //     }
  // }
  // showNext = (ind) => {
  //     if (ind < this.state.data.length - 1) {
  //         let url = this.state.data[ind + 1].image_url;
  //         this.setState({
  //             FullImageCard: true,
  //             imageUrl: url,
  //             currentIndex: ind + 1,
  //         });
  //     }
  // }
  // exitButton = () => {
  //     this.setState({ FullImageCard: false });
  // }
  onInit = () => {
    console.log("LG init");
  };
  render() {
    return (
      <Layout>
        {/* <React.Fragment> */}

        {/* <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">{this.state.title}</h1> */}
        {/* {this.state.FullImageCard && (
            <div id="overlay">
              <div
                id="prevButton"
                className={
                  this.state.currentIndex == 0 ? "gallery-disabled" : ""
                }
                onClick={() => this.showPrev(this.state.currentIndex)}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <img src={this.state.imageUrl} style={{ width: '70%'}}/>
              <div
                id="nextButton"
                className={
                  this.state.currentIndex === this.state.data.length - 1
                    ? "gallery-disabled"
                    : "nextButton"
                }
                onClick={() => this.showNext(this.state.currentIndex)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div id="exitButton" onClick={() => this.exitButton()}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          )} */}

        {/* <div className="mx-8 lg:mx-16 2xl:mx-32 mt-16 pb-32"> */}
        <Gallery photos={this.state.data} loadStatus={this.state.load_status} />
        {/* <LightGallery
                onInit={this.onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {
                    this.state.data.map((img_data) => {
                        return(
                            <a data-src={img_data.image_url} key={img_data.id} className="gallery-item">
                                <img src={img_data.thumb_image_url} className="img-responsive"/>
                            </a>
                        )
                    })
                }
            </LightGallery> */}
        {/* <div className="mt-10"></div> */}
        {/* </div> */}
        {/* </React.Fragment> */}
      </Layout>
    );
  }
}
