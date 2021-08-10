import { useMemo } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import useETHPrice from './useEthPrice'
import useBaseFeePerGas from './useBaseFeePerGas'
import { Currency, CurrencyAmount, Trade, TradeType, WETH } from '@alchemist-coin/mistx-core'
import { useActiveWeb3React } from 'hooks'
import { computeTradePriceBreakdown } from 'utils/prices'

export default function useTotalFeesForTrade(trade: Trade<Currency, Currency, TradeType>) {
  const { chainId } = useActiveWeb3React()
  const { realizedLPFee } = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  const ethPrice = useETHPrice(trade.inputAmount.currency.wrapped)
  const { baseFeePerGas } = useBaseFeePerGas()

  return useMemo(() => {
    let totalFeeInEth: CurrencyAmount<Currency> | undefined
    let baseFeeInEth: CurrencyAmount<Currency> | undefined
    let realizedLPFeeInEth: CurrencyAmount<Currency> | undefined
    if (ethPrice && realizedLPFee) {
      realizedLPFeeInEth = ethPrice.quote(realizedLPFee?.wrapped)
      totalFeeInEth = realizedLPFeeInEth.add(trade.minerBribe)
      if (baseFeePerGas) {
        baseFeeInEth = CurrencyAmount.fromRawAmount(
          WETH[chainId || 1],
          BigNumber.from(trade.estimatedGas)
            .mul(baseFeePerGas)
            .toString()
        )
        // totalFeeInEth = totalFeeInEth.add(baseFeeInEth) // add the base fee
      }
    }

    return {
      baseFeeInEth,
      minerBribe: trade.minerBribe,
      realizedLPFeeInEth,
      totalFeeInEth
    }
  }, [baseFeePerGas, chainId, ethPrice, realizedLPFee, trade.estimatedGas, trade.minerBribe])
}
