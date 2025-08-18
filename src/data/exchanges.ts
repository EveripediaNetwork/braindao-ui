import { IconProps } from "@/components/icons"
import BinanceIcon from "@/components/icons/binance"
import { Bitget } from "@/components/icons/bitget-icon"
import { Bithumb } from "@/components/icons/bithumb-icon"
import { CryptoCom } from "@/components/icons/cryptocom-icon"
import { Fraxswap } from "@/components/icons/fraxswap"
import { OneInchIcon } from "@/components/icons/one-inch"
import QuickSwapIcon from "@/components/icons/QuickSwapIcon"
import { SushiSwap } from "@/components/icons/sushiswap"
import UpbitIcon from "@/components/icons/upbit"


export interface ExchangeInfo {
  name: string
  logo: React.ComponentType<IconProps>
  pair: string
  link: string
}

export const centralizedExchanges: ExchangeInfo[] = [
  {
    name: 'Binance',
    logo: BinanceIcon,
    pair: 'IQ-USDT',
    link: 'https://www.binance.com/en/trade/IQ_USDT?theme=dark&type=spot',
  },
  {
    name: 'Crypto.com',
    logo: CryptoCom,
    pair: 'IQ-USDT',
    link: 'https://crypto.com/exchange/trade/IQ_USD',
  },
  {
    name: 'Upbit',
    logo: UpbitIcon,
    pair: 'IQ-KRW/BTC',
    link: 'https://upbit.com/exchange?code=CRIX.UPBIT.KRW-IQ',
  },
  {
    name: 'Bithumb',
    logo: Bithumb,
    pair: 'IQ-KRW',
    link: 'https://www.bithumb.com/trade/order/IQ_KRW',
  },
  {
    name: 'Bitget',
    logo: Bitget,
    pair: 'IQ-USDT',
    link: 'https://www.bitget.com/spot/IQUSDT',
  },
]

export const decentralizedExchanges: ExchangeInfo[] = [
  {
    name: 'Fraxswap',
    logo: Fraxswap,
    pair: 'IQ-FRAX',
    link: 'https://frax.com/swap/?tokenB=0x6efb84bda519726fa1c65558e520b92b51712101&origin&destinationChainId=252',
  },
  {
    name: 'Sushiswap',
    logo: SushiSwap,
    pair: 'IQ-ETH',
    link: 'https://app.sushi.com/swap?inputCurrency=0x579CEa1889991f68aCc35Ff5c3dd0621fF29b0C9&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  },
  {
    name: 'Quickswap',
    logo: QuickSwapIcon,
    pair: 'IQ on Polygon',
    link: 'https://quickswap.exchange/#/swap?currency0=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&currency1=0xb9638272ad6998708de56bbc0a290a1de534a578',
  },
  {
    name: '1inch',
    logo: OneInchIcon,
    pair: 'IQ-USDT',
    link: 'https://app.1inch.io/#/1/simple/swap/USDT/IQ',
  },
]

export const EXCHANGES = [
  {
    icon: '/images/exhanges/frax.svg',
    link: 'https://frax.com/swap/?tokenB=0x6efb84bda519726fa1c65558e520b92b51712101&origin&destinationChainId=252',
    logEventValue: 'frax',
  },
  {
    icon: '/images/exhanges/binance.svg',
    link: 'https://www.binance.com/en/trade/IQ_USDT?theme=dark&type=spot',
    logEventValue: 'binance',
  },
  {
    icon: '/images/exhanges/upbit.svg',
    link: 'https://upbit.com/exchange?code=CRIX.UPBIT.KRW-IQ',
    logEventValue: 'upbit',
  },
  {
    icon: '/images/exhanges/one-inch.svg',
    link: 'https://app.1inch.io/#/1/simple/swap/USDT/IQ',
    logEventValue: 'oneInch',
  },
] as const
