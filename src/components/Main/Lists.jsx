import React from "react";

const Lists = () => {
  return (
    <div className="lists">
      <ul>
        <li>Movies Title</li>
      </ul>
      <div className="detail-container">
        <ul>
          <il>Year -</il>
          <il> Type -</il>
          <il> Duration</il>
        </ul>
      </div>
    <div className="flex-container">
      <div className="flex-child poster">
        <p>"Link Poster" </p>
      </div>
      <div className="flex-child description">
        {/* <p>Lorem ipsum dolor sit amet, 
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
            
    </div>
  );
};

export default Lists;
