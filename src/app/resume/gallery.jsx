import React, { Component } from "react";
class Gallery extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <section className="section gallery" id="gallery">
                    <div className="container">
                        <div className="row inner-conatiner">


                            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />

                                <img
                                    src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            </div>

                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />

                                <img
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            </div>

                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />

                                <img
                                    src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            </div>


                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}
export default Gallery;
