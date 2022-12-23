import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBookmarkCheck } from "react-icons/bs";
function Details(props) {
  const history = useNavigate();
  const [maind, setmaind] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    setmaind(props);
    // console.log(bookmarks);
  }, [props, bookmarks]);
  function bookmarkf() {
    setBookmarks([...bookmarks, maind]);
  }
  function handleClick(e) {
    e.preventDefault();
    history("/about", { state: { maind } });
  }
  function handbook(e) {
    e.preventDefault();
    history("/book", { state: { bookmarks } });
  }

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 space-x-3 shadow-lg rounded-3xl transition duration-1000 transform hover:shadow-sky-600 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <picture>
          <img
            alt="Movie"
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={props.image}
          />
        </picture>
      </a>
      <BsBookmarkCheck onClick={bookmarkf} />
      <Link
        to={{
          pathname: "/about",
          state: { props },
        }}
      >
        <div className="mt-4 text-center">
          <button onClick={handleClick}>
            <h3 className="  text-base tracking-widest font-serif text-neutral-900 hover:text-teal-600 title-font mb-1">
              {props.title}
            </h3>
          </button>
        </div>
      </Link>
      <button onClick={handbook}>
        <h3 className="  text-base tracking-widest font-serif text-neutral-900 hover:text-teal-600 title-font mb-1">
          Bookm
        </h3>
      </button>
    </div>
  );
}

export default Details;
