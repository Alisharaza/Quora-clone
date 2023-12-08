import React, { useEffect } from "react";
import "./Style/searchResult.css";

import { useAPI } from "./Hooks/useAPI";
import "../Component/Style/searchResult.css";
import { BiSearch } from "react-icons/bi";
import { RiAddCircleLine } from "react-icons/ri";
const SearchResult = ({ searchValue }) => {
  const { data, isLoading, isError, get } = useAPI();
  console.log(data);

  useEffect(() => {
    get(`/quora/post?search={"title":"${searchValue}"}&limit=6`);
  }, [searchValue]);
  return (
    <div className="backDrop">
      <div className="searchResultsWrapper">
        {isError ? (
          <p className="searchListItem">No results for {searchValue}</p>
        ) : (
          <ul className="searchCardsContainer">
            <li className="searchListItem">
              <BiSearch className="searchIcon" /> Search: {searchValue}
            </li>
            {data?.map((post) => (
              <li key={post._id} className="searchListItem">
                {post.title}
              </li>
            ))}
            <li className="searchListItem addCircle">
              <RiAddCircleLine /> Add Question
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
