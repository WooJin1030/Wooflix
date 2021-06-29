import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactPlayer from "react-player";
import "react-tabs/style/react-tabs.css";
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

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
`;

const PageContainer = styled.div`
  display: flex;
`;

const Page = styled.div`
  width: fit-content;
  background-color: gray;
  border-radius: 8px;
  padding: 0 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 12px;

  &:hover {
    transform: scale(1.1);
  }
  transition: transform 300ms ease-in;
`;

const PageLogo = styled.img`
  width: 40px;
  height: 30px;
  margin-right: 8px;
`;

const PageSite = styled.a`
  display: flex;
  align-items: center;
  line-height: 30px;
`;

const DetailTabs = styled(Tabs)`
  width: 80%;
  min-height: 40vh;
  margin: auto;
  margin-top: 16px;
`;

const CreatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Creators = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  width: 30%;
  height: 100%;
`;

const CreatorImg = styled.img`
  width: 80%;
`;

const CreatorName = styled.span`
  font-size: 16px;
`;

const ProductionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  font-size: 16px;
  margin: 16px 0;
  color: #ff0000;
`;

const ProductCountries = styled.div`
  display: flex;
`;

const ProductCountry = styled.span`
  font-size: 12px;
  margin-right: 4px;
  opacity: 0.7;
`;

const ProductCompanies = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProductItem = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 80%;
  max-height: 100px;
  margin-bottom: 8px;
  background-color: white;
  opacity: 0.7;
  padding: 8px;
  border-radius: 8px;
`;

const ProductMeta = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;

const TrailerContainer = styled.div`
  font-size: 14px;
  height: 50vh;
  overflow-y: scroll;
`;

const Trailer = styled.div`
  margin-bottom: 16px;
`;

const TrailerA = styled.a``;

const Player = styled(ReactPlayer)`
  margin-top: 8px;
`;

const CollectionConatainer = styled.div`
  margin-top: 24px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const CollectionExist = styled.span`
  margin-right: 8px;
`;

const CollectionLink = styled.h3`
  &:hover {
    transform: scale(1.1);
    color: #e50914;
  }
  transition: transform 300ms ease-in;
`;

const SeasonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;

  overflow-x: scroll;
  overflow-y: hidden;
`;

const Seasons = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 30%;
  height: 40vh;
`;

const SeasonImg = styled.img`
  padding: 24px;
`;

const SeasonName = styled.span`
  font-size: 16px;
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, error, loading }) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading | Wooflix</title>
        </Helmet>
        <LoaderSpinner />
      </>
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Wooflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSmall.jpg")
            }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date && result.release_date.substring(0, 4)}
                {result.first_air_date && result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>|</Divider>
              <Item>
                {result.runtime || result.runtime === 0
                  ? result.runtime
                  : result.episode_run_time[0]}{" "}
                min
              </Item>
              <Divider>|</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}{" "}
              </Item>
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <PageContainer>
              {result.imdb_id && (
                <Page key="page1">
                  <PageSite
                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                  >
                    <PageLogo
                      src="https://user-images.githubusercontent.com/62231339/123267872-71db1480-d538-11eb-9fe2-22f3f2606795.png"
                      alt="page img"
                    />
                    Watch in IMDb
                  </PageSite>
                </Page>
              )}

              {result.homepage && (
                <Page key="page2">
                  <PageSite href={result.homepage}>
                    Move to Official Homepage
                  </PageSite>
                </Page>
              )}
            </PageContainer>

            <DetailTabs>
              <TabList>
                {pathname.includes("show") && <Tab>Creator</Tab>}
                <Tab>Productions</Tab>
                <Tab>Youtube Videos</Tab>
                {pathname.includes("movie") && <Tab>Series</Tab>}
                {pathname.includes("show") && <Tab>Seasons</Tab>}
              </TabList>
              {pathname.includes("show") && (
                <TabPanel>
                  <CreatorContainer>
                    {result.created_by &&
                      result.created_by.map((creator) => (
                        <Creators key={creator.id}>
                          <CreatorImg
                            src={
                              creator.profile_path
                                ? `https://image.tmdb.org/t/p/original${creator.profile_path}`
                                : "https://user-images.githubusercontent.com/62231339/123796388-0c17cf80-d920-11eb-87d7-50dc9e5b628d.jpg"
                            }
                            alt="creator img"
                          ></CreatorImg>
                          <CreatorName>{creator.name}</CreatorName>
                        </Creators>
                      ))}
                  </CreatorContainer>
                </TabPanel>
              )}
              <TabPanel>
                <ProductionContainer>
                  <ProductTitle>Product Country</ProductTitle>
                  <ProductCountries>
                    {result.production_countries.map((country, index) =>
                      index === result.production_countries.length - 1 ? (
                        <ProductCountry key={country.iso_3166_1}>
                          {country.name}
                        </ProductCountry>
                      ) : (
                        <ProductCountry key={country.iso_3166_1}>
                          {country.name},{" "}
                        </ProductCountry>
                      )
                    )}
                  </ProductCountries>

                  <ProductTitle>Product Companies</ProductTitle>
                  <ProductCompanies>
                    {result.production_companies.map((company, index) => (
                      <ProductItem key={company.id}>
                        {
                          <>
                            <ProductImage
                              src={
                                company.logo_path !== null
                                  ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                                  : "https://user-images.githubusercontent.com/62231339/123788471-05388f00-d917-11eb-8459-0d366f77da4c.png"
                              }
                              alt="logo"
                            />

                            {company.origin_country ? (
                              <ProductMeta>
                                {company.name} / {company.origin_country}{" "}
                              </ProductMeta>
                            ) : (
                              <ProductMeta> {company.name}</ProductMeta>
                            )}
                          </>
                        }
                      </ProductItem>
                    ))}
                  </ProductCompanies>
                </ProductionContainer>
              </TabPanel>
              <TabPanel>
                <TrailerContainer>
                  {result.videos.results.map((video) => (
                    <Trailer key={video.id}>
                      <TrailerA
                        href={`https://www.youtube.com/watch?v=${video.key}`}
                      >
                        {video.name}
                      </TrailerA>
                      <Player
                        url={`https://www.youtube.com/watch?v=${video.key}`}
                      />
                    </Trailer>
                  ))}
                </TrailerContainer>
              </TabPanel>
              {pathname.includes("movie") && (
                <TabPanel>
                  <CollectionConatainer>
                    {result.belongs_to_collection && (
                      <>
                        <CollectionExist>Watch Other Series?</CollectionExist>
                        <Link
                          to={`/collection/${result.belongs_to_collection.id}`}
                        >
                          <CollectionLink>➜</CollectionLink>
                        </Link>
                      </>
                    )}
                  </CollectionConatainer>
                </TabPanel>
              )}

              {pathname.includes("show") && (
                <TabPanel>
                  <SeasonContainer>
                    {result.seasons &&
                      result.seasons.map((season) => (
                        <Seasons key={season.id}>
                          <SeasonImg
                            src={
                              season.poster_path
                                ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                                : "https://user-images.githubusercontent.com/62231339/123796388-0c17cf80-d920-11eb-87d7-50dc9e5b628d.jpg"
                            }
                            alt="creator img"
                          ></SeasonImg>
                          <SeasonName>
                            #{season.season_number}. {season.name}
                          </SeasonName>
                        </Seasons>
                      ))}
                  </SeasonContainer>
                </TabPanel>
              )}
            </DetailTabs>
          </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
