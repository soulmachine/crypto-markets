import * as Biki from './exchanges/biki';
import * as Binance from './exchanges/binance';
import * as Bitfinex from './exchanges/bitfinex';
import * as BitMEX from './exchanges/bitmex';
import * as Bitstamp from './exchanges/bitstamp';
import * as CoinbasePro from './exchanges/coinbase_pro';
import * as Huobi from './exchanges/huobi';
import * as Kraken from './exchanges/kraken';
import * as MXC from './exchanges/mxc';
import * as Newdex from './exchanges/newdex';
import * as OKEx from './exchanges/okex';
import * as WhaleEx from './exchanges/whaleex';
import * as ZB from './exchanges/zb';
import { Market, MarketType } from './pojo/market';

export { Market, MarketType, MARKET_TYPES } from './pojo/market';

/**
 * Fetch trading markets of a crypto exchange.
 * @param exchange The crypto exchange name
 * @param marketType Market type, if not provided, fetch all market types
 * @returns All trading markets
 */
export default async function fetchMarkets(
  exchange: string,
  marketType?: MarketType,
): Promise<readonly Market[]> {
  switch (exchange) {
    case 'Biki':
      return Biki.fetchMarkets(marketType);
    case 'Binance':
      return Binance.fetchMarkets(marketType);
    case 'Bitfinex':
      return Bitfinex.fetchMarkets(marketType);
    case 'BitMEX':
      return BitMEX.fetchMarkets(marketType);
    case 'Bitstamp':
      return Bitstamp.fetchMarkets(marketType);
    case 'CoinbasePro':
      return CoinbasePro.fetchMarkets(marketType);
    case 'Huobi':
      return Huobi.fetchMarkets(marketType);
    case 'Newdex':
      return Newdex.fetchMarkets(marketType);
    case 'Kraken':
      return Kraken.fetchMarkets(marketType);
    case 'MXC':
      return MXC.fetchMarkets(marketType);
    case 'OKEx':
      return OKEx.fetchMarkets(marketType);
    case 'WhaleEx':
      return WhaleEx.fetchMarkets(marketType);
    case 'ZB':
      return ZB.fetchMarkets(marketType);
    default:
      throw new Error(`Unknown exchange: ${exchange}`);
  }
}

export const SUPPORTED_EXCHANGES = [
  'Biki',
  'Binance',
  'Bitfinex',
  'BitMEX',
  'Bitstamp',
  'CoinbasePro',
  'Huobi',
  'Kraken',
  'MXC',
  'Newdex',
  'OKEx',
  'WhaleEx',
  'ZB',
];
