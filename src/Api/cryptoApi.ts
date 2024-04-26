import ReconnectingWebSocket from 'reconnecting-websocket';
import btcImage from '../assets/btc.svg';
import ethImage from '../assets/eth.svg';
import bnbImage from '../assets/bnb.svg';
import adaImage from '../assets/XTVCADA--big.svg';
import xrpImage from '../assets/xrp.svg';

export type CryptoData = {
  symbol: string;
  lastPrice: string;
  name: string;
  priceChangePercent: string;
  imageUrl: string;
};
function getCoinName(symbol: string): string {
  const names = {
    BTCUSDT: "Bitcoin",
    ETHUSDT: "Ethereum",
    BNBUSDT: "Binance",
    ADAUSDT: "Cardano",
    XRPUSDT: "Ripple"
  };
  return names[symbol] || symbol;
}
function CoinImage(symbol: string): string {
  const images = {
    BTCUSDT: btcImage,
    ETHUSDT: ethImage,
    BNBUSDT: bnbImage,
    ADAUSDT: adaImage,
    XRPUSDT: xrpImage
  };
  return images[symbol] 
}

export const subscribeToCryptoData = (updateCryptoData: (data: CryptoData) => void, closeConnection: () => void) => {
  const symbols: string[] = ['btcusdt', 'ethusdt', 'bnbusdt', 'adausdt', 'xrpusdt'];
  const streams: string = symbols.map(symbol => `${symbol}@ticker`).join('/');

  const ws = new ReconnectingWebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);

  ws.onmessage = (event: MessageEvent) => {
    const response = JSON.parse(event.data);
    const streamData = response.data;

    const formattedData: CryptoData = {
      symbol: streamData.s,
      name: getCoinName(streamData.s), 
      lastPrice: streamData.c,
      priceChangePercent: streamData.P,
      imageUrl: CoinImage(streamData.s)
    };

    updateCryptoData(formattedData);
  };

  ws.onclose = () => {
    closeConnection();
  };

  return () => {
    ws.close();
  };
};