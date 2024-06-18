import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const CACHE_KEY = "coins_data";
const CACHE_EXPIRY_KEY = "coins_data_expiry";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadCoins = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);

        if (cachedData && cachedExpiry && Date.now() < Number(cachedExpiry)) {
          // Use cached data if available and not expired
          setCoins(JSON.parse(cachedData));
          setLoading(false);
        } else {
          // Fetch new data from the API
          const response = await fetch("https://api.coinpaprika.com/v1/coins");
          const data: Array<CoinInterface> = await response.json();
          setCoins(data.slice(0, 100));
          setLoading(false);

          // Cache the new data and set expiry
          localStorage.setItem(CACHE_KEY, JSON.stringify(data.slice(0, 100)));
          localStorage.setItem(
            CACHE_EXPIRY_KEY,
            (Date.now() + CACHE_DURATION).toString()
          );
        }
      } catch (error) {
        console.error("Error fetching coins data:", error);
        setLoading(false);
      }
    };

    loadCoins();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Crypto Tracker</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: {
                    name: coin.name,
                  },
                }}
              >
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
