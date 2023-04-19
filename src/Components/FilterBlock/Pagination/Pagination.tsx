import "./Pagination.css";
import React, { useEffect } from "react";
import { REDUX_INTERFACE } from "../../../interface";
import { useSelector, useDispatch } from "react-redux";
import { MAX_FILM_PAGE, FIRST_PAGE, LOCAL_KEY_PAGES } from "../../../const";
import { ACTION_NEXT_PAGE, ACTION_PREVIOUS_PAGE } from "../../../redux/pages";

function Pagination() {
  const pages = useSelector((state: REDUX_INTERFACE) => state.filmPages.page);
  const currentFilms = useSelector(
    (state: REDUX_INTERFACE) => state.currentFilms.films
  );

  const dispatch = useDispatch();
  const LAST_PAGE = Math.ceil(currentFilms.length / MAX_FILM_PAGE);
  function nextPage() {
    dispatch(ACTION_NEXT_PAGE());
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY_PAGES, JSON.stringify(pages));
  }, [pages]);

  function prevPage() {
    dispatch(ACTION_PREVIOUS_PAGE());
  }

  return (
    <div>
      <div className="filter_btn">
        {pages === FIRST_PAGE ? (
          <button className="btn" style={{ backgroundColor: "grey" }}>
            Назад
          </button>
        ) : (
          <button className="btn" onClick={() => prevPage()}>
            Назад
          </button>
        )}
        {pages === LAST_PAGE ? (
          <button className="btn" style={{ backgroundColor: "grey" }}>
            Вперед
          </button>
        ) : (
          <button className="btn" onClick={() => nextPage()}>
            Вперед
          </button>
        )}
      </div>
      <div className="number_page">{pages + " из " + LAST_PAGE}</div>
    </div>
  );
}

export { Pagination };
