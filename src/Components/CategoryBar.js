import React, { Component } from 'react';

class CategoryBar extends Component {
  render() {

    if(this.props.data){
          var businesses = this.props.data.businesses.map(function(businesses){
            var businessesImage = 'images/'+businesses.image;
            return <div key={businesses.name} className="columns portfolio-item">
               <div className="item-wrap">
                <a href={businesses.url} title={businesses.name}>
                   <img alt={businesses.name} src={businessesImage} />
                   <div className="overlay">
                      <div className="portfolio-item-meta">
                     <h5>{businesses.name}</h5>
                         <p>{businesses.category}</p>
                      </div>
                    </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>
          })
        }

    return (
            <header id="portfolio">

                <div className="row">

                   <div className="twelve columns collapsed">

                      <h1>Top Categories</h1>

                      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                          {businesses}
                      </div>
                    </div>
                </div>
             </header>
    );
  }
}

export default CategoryBar;
