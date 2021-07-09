import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import styled from "styled-components";
//animation 
import { motion } from "framer-motion";
import {PageTransition} from "../pages/animation"

const MovieDetail = () => {
  //to get all history belong to url
  const history = useHistory();
  //to get the url from the link
  const url = history.location.pathname;
  //create state to get all movies
  const [movies, setMovies] = useState(MovieState);
  //state to get the exact movie
  const [movie, setMovie] = useState(null);

  console.log(movie);
  //using useEffect to start when the page loaded 
  useEffect(() => {
    //to get the current movie from movies by using url 
    const currentMovie = movies.filter((checkUrl) => checkUrl.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details variants={PageTransition} initial="hidden" animate="show" exit="exit">
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
            <Awards>
              {movie.awards.map((award) => (
                <Award title={award.title} description={award.description} />
              ))}
            </Awards>
            <Image>
                <img src={movie.secondaryImg} alt="" />
            </Image>
          </HeadLine>
        </Details>
      )}
    </>
  );
};
const Details = styled(motion.div)`
  color: #fff;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;

  @media (max-width : 1500px){
    display: block;
    margin: 2rem;
  }

  h4 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    
  }
  p {
    font-size: 1.1rem;
  }
`;

const Image = styled.div`
    width: 100%;
    min-height: 80vh;
    img{
        width: 100%;
        height: 90vh;
        object-fit: cover;
    }
`;
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h4>{title}</h4>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const AwardStyle = styled.div`
  margin: 1rem 2rem;
`;

export default MovieDetail;
