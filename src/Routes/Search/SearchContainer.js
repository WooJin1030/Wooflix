import React from "react";
import SearchPresenter from "./SearchPresenter";

const SearchClass = class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    serchTerm: "",
    error: null,
    loading: true,
  };

  render() {
    const { movieResults, tvResults, serchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        serchTerm={serchTerm}
        error={error}
        loading={loading}
      />
    );
  }
};

export default SearchClass;
