import React from "react";
// Link : https://youtu.be/dQw4w9WgXcQ
const MyLibrary = () => {

  // if we need to be logged in to see this then api call here
  //   movies in state filter through movies to avoid backend call
  
  return (
    <div className='myLib'>
      <ul>
        <li>All</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>Rented</li>
      </ul>
      <div className='myLib-container'>
        <div className='myLib-overflow'>
          <ul className='movie-cards'>
            <li>
              <div className='card-bg'>
                <img />
              </div>
              <a className='card-content'>
                <div className='card-img'>
                  <img />
                </div>
                <div className='myLib-description'>
                  <h3>Title</h3>
                  <p>from</p>
                  <p>description</p>
                  <button>Watch Trailer</button>
                </div>
              </a>
            </li>
            <li>
              <div className='card-bg'>
                <img />
              </div>
              <a className='card-content'>
                <div className='card-img'>
                  <img />
                </div>
                <div className='myLib-description'>
                  <h3>Title</h3>
                  <p>from</p>
                  <p>description</p>
                  <button>Watch Trailer</button>
                </div>
              </a>
            </li>
            <li>
              <div className='card-bg'>
                <img />
              </div>
              <a className='card-content'>
                <div className='card-img'>
                  <img />
                </div>
                <div className='myLib-description'>
                  <h3>Title</h3>
                  <p>from</p>
                  <p>description</p>
                  <button>Watch Trailer</button>
                </div>
              </a>
            </li>
            <li>
              <div className='card-bg'>
                <img />
              </div>
              <a className='card-content'>
                <div className='card-img'>
                  <img />
                </div>
                <div className='myLib-description'>
                  <h3>Title</h3>
                  <p>from</p>
                  <p>description</p>
                  <button>Watch Trailer</button>
                </div>
              </a>
            </li>
            <li>
              <div className='card-bg'>
                <img />
              </div>
              <a className='card-content'>
                <div className='card-img'>
                  <img />
                </div>
                <div className='myLib-description'>
                  <h3>Title</h3>
                  <p>from</p>
                  <p>description</p>
                  <button>Watch Trailer</button>
                </div>
              </a>
            </li>
            <li>
              <div className='card-bg'>
                <img />
              </div>
              <a className='card-content'>
                <div className='card-img'>
                  <img />
                </div>
                <div className='myLib-description'>
                  <h3>Title</h3>
                  <p>from</p>
                  <p>description</p>
                  <button>Watch Trailer</button>
                </div>
              </a>
            </li>
          </ul>
          {/* LEFT ARROW <a></a>  */}
          {/* <a></a> RIGHT ARROW */}
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
