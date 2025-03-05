import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../assets/stockData.css"; 

class GetApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockData: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    const API_URL =
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data["Time Series (5min)"]) {
          const formattedData = Object.entries(data["Time Series (5min)"])
            .slice(0, 10) 
            .map(([time, values]) => ({
              time,
              open: parseFloat(values["1. open"]),
              close: parseFloat(values["4. close"]),
            }));

          this.setState({ stockData: formattedData, isLoading: false });
        } else {
          this.setState({ error: "Invalid API response", isLoading: false });
        }
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { stockData, isLoading, error } = this.state;

    return (
      <div className="stock-container">
        <h2>📊 IBM Stock Data (5-min Interval)</h2>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {!isLoading && !error && (
          <div className="container">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Open</th>
                    <th>Close</th>
                  </tr>
                </thead>
                <tbody>
                  {stockData.map((data) => (
                    <tr key={data.time}>
                      <td>{data.time}</td>
                      <td>{data.open.toFixed(2)}</td>
                      <td>{data.close.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            
            <div className="chart-container">
              <h3>📈 Open vs Close Prices</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stockData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="open" fill="#007bff" name="Open Price" />
                  <Bar dataKey="close" fill="#28a745" name="Close Price" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GetApi;
