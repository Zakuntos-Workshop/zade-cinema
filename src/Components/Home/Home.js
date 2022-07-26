import React, { useEffect, useState } from "react";
import Discovers from "./Discovers/Discovers";
import "./Home.css";
import StarIcon from "@mui/icons-material/Star";
import MoviesRow from "./MoviesRow/MoviesRow";

import {
  useGetDiscoverQuery,
  useGetComedyQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvShowQuery,
  useGetDocumentariesQuery,
  useGetHorrorQuery,
  useGetRomanceQuery,
} from "../../features/Api";
import { MoveDown } from "@mui/icons-material";

function Home() {
  const { data } = useGetDiscoverQuery();
  const comedyData = useGetComedyQuery();
  const topRatedData = useGetTopRatedQuery();
  const trendingData = useGetTrendingQuery();
  const tvShowData = useGetTvShowQuery();
  const romanceData = useGetRomanceQuery();
  const horrorData = useGetHorrorQuery();
  const docData = useGetDocumentariesQuery();

  const res =
    data?.results[Math.floor(Math.random() * data.results.length - 1)];

  const resC = comedyData.data?.results;

  const resT = trendingData?.data?.results;

  const resTr = topRatedData?.data?.results;

  const resTv = tvShowData?.data?.results;

  const resR = romanceData?.data?.results;

  const resH = horrorData?.data?.results;

  const resD = docData?.data?.results;

  const [date , setDate] = useState();

  const getYear = () =>  setDate(new Date().getFullYear())
  useEffect(() => {
    getYear();
}, [])


  return (
    <>
      <div className="home">
        <div className="heading top__heading">
          <h3>Bientot sur vos ecrans</h3>{" "}
        </div>
        <div className="home__boxx">
          <Discovers
            banner={res?.backdrop_path}
            title={res?.original_name || res?.name || res?.original_title}
            des={res?.overview}
            Icon={StarIcon}
            rate={res?.vote_average}
            release_date={res?.release_date || res?.first_air_date}
            id={res?.id}
            type="movie"
          />
        </div>

        <div className="heading">Nouveautés <> - {date} sur
            &copy; Zade Cinema </> 
        </div>

        <div className="home__box">
          {resT &&
            resT.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.original_name || data.title}
                release_date={data.release_date || data.first_air_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>

        <div className="heading">Frissons, Actions et Fiction </div>
        <div className="home__box">
          {resTv &&
            resTv.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_name || data.name}
                release_date={data.first_air_date}
                rate={data.vote_average}
                type="tv"
              />
            ))}
        </div>

        <div className="heading">Drame et Legende</div>
        <div className="home__box">
          {resTr &&
            resTr.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.title}
                release_date={data.release_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>

        <div className="heading">Divertissement et Fantastique</div>
        <div className="home__box">
          {resC &&
            resC.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.title}
                release_date={data.release_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>

        <div className="heading">LOVE Et ROMANCE</div>
        <div className="home__box">
          {resR &&
            resR.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.title}
                release_date={data.release_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>

        <div className="heading">HORREUR</div>
        <div className="home__box">
          {resH &&
            resH.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.title}
                release_date={data.release_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>

        <div className="heading"> DECOUVREZ AUSSI</div>
        <div className="home__box">
          {resD &&
            resD.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.title}
                release_date={data.release_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>

       

      </div>
    </>
  );
}

export default Home;
