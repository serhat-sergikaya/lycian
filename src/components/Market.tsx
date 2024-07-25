import { useState } from "react";
import useMarket from "../hooks/useMarket";
import Change from "./Change";

const Market = () => {
  const [page, setPage] = useState(1);

  const { data: coins, error } = useMarket(page);

  if (error) throw error;

  console.log(coins);
  return (
    <div className="block block--gradient-middle">
      <div className="container">
        <h2 className="block__header market__heading">Market Update</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="table__name">Name</th>
              <th className="table__data-col">Current Price</th>
              <th className="table__data-col">24h Change</th>
              <th className="table__data-col"> Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr className="table-row" id={coin.id}>
                <td className="table__name-col">
                  <img className="table__image" src={coin.image} alt="" />{" "}
                  {coin.name}
                </td>
                <td className="table__data-col"> $ {coin.current_price}</td>
                <Change
                  change={parseFloat(
                    coin.price_change_percentage_24h.toFixed(2)
                  )}
                />
                <td className="table__data-col"> $ {coin.market_cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paging">
          <button
            onClick={() => setPage(1)}
            className={"page" + (page == 1 ? " page--highlighted" : "")}
          >
            <p>1</p>
          </button>
          <button
            onClick={() => setPage(2)}
            className={"page" + (page == 2 ? " page--highlighted" : "")}
          >
            <p>2</p>
          </button>
          <button
            onClick={() => setPage(3)}
            className={"page" + (page == 3 ? " page--highlighted" : "")}
          >
            <p>3</p>
          </button>
          <button
            onClick={() => setPage(4)}
            className={"page" + (page == 4 ? " page--highlighted" : "")}
          >
            <p>4</p>
          </button>
          <button
            onClick={() => setPage(5)}
            className={"page" + (page == 5 ? " page--highlighted" : "")}
          >
            <p>5</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Market;
