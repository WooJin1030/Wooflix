import { collectionApi } from "api";
import React from "react";
import CollectionPresenter from "./CollectionPresenter";

const CollectionClass = class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    try {
      const { data: result } = await collectionApi.collection(parsedId);
      this.setState({ result });
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <CollectionPresenter result={result} error={error} loading={loading} />
    );
  }
};

export default CollectionClass;
