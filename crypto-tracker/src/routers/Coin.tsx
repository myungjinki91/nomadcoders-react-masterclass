import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: Quotes;
}
interface Quotes {
  USD: USD;
}
interface USD {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: string;
  percent_from_price_ath: number;
}

const CACHE_EXPIRY_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

function Coin() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  useEffect(() => {
    const loadCoinData = async () => {
      // Check if cached data exists and is not expired
      const cachedInfo = localStorage.getItem(`info_${coinId}`);
      const cachedPriceInfo = localStorage.getItem(`price_${coinId}`);
      const cachedTime = localStorage.getItem(`cacheTime_${coinId}`);

      if (
        cachedInfo &&
        cachedPriceInfo &&
        cachedTime &&
        Date.now() - parseInt(cachedTime) < CACHE_EXPIRY_TIME
      ) {
        // Use cached data
        setInfo(JSON.parse(cachedInfo));
        setPriceInfo(JSON.parse(cachedPriceInfo));
        setLoading(false);
      } else {
        // Fetch new data from the API
        const infoData = await (
          await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
        ).json();
        const priceData = await (
          await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
        ).json();

        // Update state
        setInfo(infoData);
        setPriceInfo(priceData);
        setLoading(false);

        // Cache new data
        localStorage.setItem(`info_${coinId}`, JSON.stringify(infoData));
        localStorage.setItem(`price_${coinId}`, JSON.stringify(priceData));
        localStorage.setItem(`cacheTime_${coinId}`, Date.now().toString());
      }
    };

    loadCoinData();
  }, [coinId]); // Dependency array includes coinId to refetch data if coinId changes

  console.log(info);
  console.log(priceInfo);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
