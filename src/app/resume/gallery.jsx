import React, { Component } from "react";
import gallery from "../../assets/data/gallery.json"
class Gallery extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let galleryListItems = gallery.data.map((item,i)=>{
            return(
                <div class="col-lg-4 col-md-12 mb-2 mb-md-4 mb-lg-4">
                    <div class="card-img card">
                            <figure class="hover-effect">
                                <img class="w-100 shadow-1-strong rounded img-responsive gallery-img" src={item.src}  alt={item.description} />
                            </figure>
            </div>                         
            </div>
            )
        });
        return (
            <React.Fragment>
                <section className="section gallery" id="gallery">
                    <div className="container">
                        <div className="row inner-container">

                            

{galleryListItems}
                          

                          
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}
export default Gallery;
