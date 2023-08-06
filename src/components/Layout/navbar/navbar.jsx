import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import play from "../../../assets/play.svg";
import cinema from "../../../assets/cinema.svg";
import tv from "../../../assets/tv.svg";
import Btn_fs from "../../../assets/first.svg";
import "./navbarStyle.scss";

export default function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const [categories, setCategories] = useState([]);
  const [reload, setReload] = useState(false);
  const [myProp, setMyProp] = useState(location.state?.myProp || null);
  const myRef = useRef();
  const navigate = useNavigate();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
      setButtonPopup(false);
      setButtonPopup2(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePop = () => {
    setButtonPopup2(false);
    setButtonPopup(!buttonPopup);
  };
  const handlePop2 = () => {
    setButtonPopup(false);
    setButtonPopup2(!buttonPopup2);
  };
  const handleHome = () => {
    setButtonPopup(false);
    setButtonPopup2(false);
  };
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_KEY
        }`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const result = await response.json();
      setCategories(result.genres);
    } catch (error) {
      throw new Error("Error fetching categories: " + error.message);
    }
  };

  return (
    <div ref={myRef}>
      <nav>
        <div className="flex flex-col items-center justify-start absolute">
          <button
            onClick={() => navigate("/")}
            className="my-10 hover:bg-red-600 hover:rounded"
          >
            <img src={play} />
          </button>

          <NavLink to={"/"} className="mb-10 hover:bg-red-600 hover:rounded">
            <button onClick={handleHome}>
              <img src={Btn_fs} />
            </button>
          </NavLink>

          <button
            onClick={handlePop}
            className="mb-10 hover:bg-red-600 hover:rounded"
          >
            <img src={cinema} />
          </button>

          <button
            onClick={handlePop2}
            className="mb-10 hover:bg-red-600 hover:rounded"
          >
            <img src={tv} />
          </button>
        </div>
      </nav>
      <div
        onClick={handlePop}
        className={buttonPopup ? "mv-popup" : " mv-popup-disable"}
      >
        <h1 className="mv-popup-h1">Movies Genres</h1>
        {categories?.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/movies/${item.id}`}
              className="gradient-border btn-category"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div
        onClick={handlePop2}
        className={buttonPopup2 ? "mv-popup" : " mv-popup-disable"}
      >
        <h1 className="mv-popup-h1">TV Genres</h1>
        {categories?.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/movies/${item.id}`}
              className="gradient-border btn-category"
            >
              {item.name}
            </Link>
          );
        })}
      </div>{" "}
    </div>
  );
}
