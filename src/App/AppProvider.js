import React, { Component } from 'react';

const cryptoCompare = require('cryptocompare');

export const AppContext = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
    };
  }

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: 'dashboard' });
    localStorage.setItem('crypto', JSON.stringify({ test: 'hello' }));
  };

  savedSettings() {
    let cryptoData = JSON.parse(localStorage.getItem('crypto'));
    if (!cryptoData) {
      return { page: 'settings', firstVisit: true };
    }
    return {};
  }

  setPage = (page) => this.setState({ page });

  fetchCoins = async () => {
    let coinList = await cryptoCompare.coinList();
    const data = coinList.Data;
    console.log(data);
    this.setState({ data });
  };

  componentWillMount() {
    this.fetchCoins();
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
