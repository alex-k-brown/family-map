import React from 'react';
import ReactDom from "react-dom";


class App extends React.Component {
  constructor(props) {
      super(props);


    this.state = {
      loading: true,
      error: false
    };
  }


  componentDidMount() {
    fetch(
      "https://ident.familysearch.org/cis-web/oauth2/v3/authorization?response_type=code&scope=openid%20profile%20email%20country&client_id=a023Z00000XU5BzQAL&redirect_uri=https://localhost:1234"
    )
      .then(response => response.json())
      .then(data => this.setState({ data: data, loading: false, error: false }))
      .catch(error => this.setState({ error, loading: false }));
  }


  render() {
    if (this.state.loading) {
      return <div className="loading">loading...</div>;
    }


    if (this.state.error) {
      console.log(this.state.error);
    }


    return (
      <React.StrictMode>
        <div className="app">
          
        </div>
      </React.StrictMode>
    );
  }
}


ReactDom.render(<App />, document.getElementById("root"));