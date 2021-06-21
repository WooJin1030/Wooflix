import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((movie) => (
            <span key={movie.id}>{movie.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((movie) => (
            <span key={movie.id}>{movie.name}</span>
          ))}
        </Section>
      )}
      {error && <Error text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
