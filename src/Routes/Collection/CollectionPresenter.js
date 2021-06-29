import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import LoaderSpinner from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 12px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
`;

const Series = styled.ul`
  width: 100%;
  height: 90%;
  margin-top: 24px;

  overflow-y: scroll;
`;

const SeriesItem = styled.li`
  width: 100%;
  height: 25%;
  display: flex;
`;

const SeriesCover = styled.div`
  width: 20%;
  height: 80%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  margin-right: 12px;
  opacity: 0.7;
`;

const SeriesMeta = styled.a`
  width: 80%;
`;

const SeriesTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
`;

const SeriesOverview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
`;

const CollectionPresenter = ({ result, error, loading }) => (
  <>
    <Helmet>
      <title>Loading | Wooflix</title>
    </Helmet>
    {loading ? (
      <LoaderSpinner />
    ) : (
      <Container>
        <Helmet>
          <title>{result.name} | Wooflix</title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : "https://user-images.githubusercontent.com/62231339/123789813-86445600-d918-11eb-8cf5-417dc0c70df6.jpg"
            }
          />
          <Data>
            <Title>{result.name}</Title>
            <Overview>{result.overview}</Overview>

            <Series>
              {result.parts.map((part, index) => (
                <SeriesItem key={part.id}>
                  <>
                    <SeriesCover
                      bgImage={
                        part.poster_path
                          ? `https://image.tmdb.org/t/p/original${part.poster_path}`
                          : "https://user-images.githubusercontent.com/62231339/123789813-86445600-d918-11eb-8cf5-417dc0c70df6.jpg"
                      }
                    />
                    <SeriesMeta href={`/movie/${part.id}`}>
                      <SeriesTitle>{part.original_title}</SeriesTitle>
                      <SeriesOverview>
                        {part.overview.substring(0, 300)}...
                      </SeriesOverview>
                    </SeriesMeta>
                  </>
                </SeriesItem>
              ))}
            </Series>
          </Data>
        </Content>
      </Container>
    )}
  </>
);

CollectionPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CollectionPresenter;
