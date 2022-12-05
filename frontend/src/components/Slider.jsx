import React from "react";
import CardSlider from "./CardSlider";

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(11, 20)} />
      <CardSlider
        title="BlockBuster Movies"
        data={getMoviesFromRange(21, 30)}
      />
      <CardSlider title="Top Rated" data={getMoviesFromRange(31, 40)} />
      <CardSlider title="Best in Action" data={getMoviesFromRange(41, 50)} />
      <CardSlider
        title="Popular in TEe-Vee"
        data={getMoviesFromRange(51, 60)}
      />
    </div>
  );
};

export default Slider;
