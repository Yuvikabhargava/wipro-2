// src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import StockSearch from './StockSearch';
import StockInfo from './StockInfo';
import Portfolio from './Portfolio';
import './App.css';

const App = () => {
    const [stock, setStock] = useState(null);
    const [portfolio, setPortfolio] = useState({});

    // Function to fetch stock data
    const fetchStockData = async (symbol) => {
        
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`;

        try {
          const response = await axios.get(apiUrl);
          const metaData = response.data['Meta Data'];
          const timeSeries = response.data['Time Series (5min)'];
  
          if (metaData && timeSeries) {
              // Get the latest timestamp
              const latestTimestamp = Object.keys(timeSeries)[0];
              const latestData = timeSeries[latestTimestamp];
  
              setStock({
                  symbol: metaData['2. Symbol'],
                  price: parseFloat(latestData['4. close']),
                  high: parseFloat(latestData['2. high']),
                  low: parseFloat(latestData['3. low'])
              });
          } else {
              setStock(null);
              alert('Stock data not found.');
          }
      } catch (error) {
          console.error('Error fetching stock data:', error);
          setStock(null);
          alert('Failed to fetch stock data. Please try again.');
      }
    };

    // Function to buy stock
    const buyStock = () => {
        if (stock && stock.symbol) {
            setPortfolio((prevPortfolio) => {
                const newPortfolio = { ...prevPortfolio };
                if (newPortfolio[stock.symbol]) {
                    newPortfolio[stock.symbol].shares += 1;
                } else {
                    newPortfolio[stock.symbol] = {
                        shares: 1,
                        price: stock.price
                    };
                }
                return newPortfolio;
            });
        }
    };

    // Function to sell stock
    const sellStock = () => {
        if (stock && stock.symbol && portfolio[stock.symbol]) {
            setPortfolio((prevPortfolio) => {
                const newPortfolio = { ...prevPortfolio };
                if (newPortfolio[stock.symbol].shares > 1) {
                    newPortfolio[stock.symbol].shares -= 1;
                } else {
                    delete newPortfolio[stock.symbol];
                }
                return newPortfolio;
            });
        }
    };

    return (
        <div className="App">
            <header>
                <h1>Stock Trading App</h1>
            </header>
            <StockSearch onSearch={fetchStockData} />
            <StockInfo stock={stock} />
            <div className="actions">
                <button onClick={buyStock} disabled={!stock}>Buy</button>
                <button onClick={sellStock} disabled={!stock}>Sell</button>
            </div>
            <Portfolio portfolio={portfolio} />
        </div>
    );
};

export default App;