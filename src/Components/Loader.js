import React from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const SLoader = styled(Loader)`
  height: calc(100vh - 50px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderSpinner = () => (
  <SLoader
    type="Puff"
    color="#ff0000"
    height={100}
    width={100}
    timeout={3000}
  />
);

export default LoaderSpinner;
