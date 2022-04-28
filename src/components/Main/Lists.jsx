import React from "react";

const Lists = () => {
  return (
    <div className="lists">
      <ul>
        <li>All</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>Rented</li>
      </ul>
      <div className="title-container">
        <ul className="title">
        <h3>Title</h3>
        <h4>RATE</h4>
        </ul>
      </div>
      <div className="detail-container">
        <ul>
          <il>Year -</il>
          <il> Type -</il>
          <il> Duration -</il>
          <li> Price </li>
        </ul>
      </div>
      <div className="flex-container">
        <div className="flex-child poster">
          <p>Link Poster </p>
        </div>
        <div className="flex-child description">
          <p> Movie description</p>
          {/* <p className="text-break">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit 
            anim id est laborum.</p> */}
        </div>
      </div>

      <div className="wishlist-bottom-container">
        <button className="wishlist-bottom" onClick={() => updateDev()}>
          Add to Wishlist
        </button>
        <button
          className="wishlist-bottom"
          onClick={() => {
            addItemToCart(me.id, { item1337v2: `leetItemButBetter` });
            setCartChange(true);
          }}
        >
          {" "}
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Lists;
