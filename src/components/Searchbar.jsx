import React, { useState } from "react";

const Searchbar = ({ searchTerm }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    let s = e.target.value;
    setTerm(s);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    searchTerm(term);
    // AIzaSyD3WgUHAzjhJCiV_zE36z5Hl37sxOfnPVk
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
