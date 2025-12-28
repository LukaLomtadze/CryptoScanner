import CoinOverview from '@/components/home/CoinOverview'
import { CoinOverviewFallback, TrendingCoinsFallback } from '@/components/home/fallback'
import TrendingCoinsOverview from '@/components/home/TrendingCoinsOverview'
import React, { Suspense } from 'react'


const page = async () => { 
  return (
    <main className='main-container'>
      <section className='home-grid'>
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoinsOverview />
        </Suspense>
      </section>

      <section className='w-full mt-7 space-y-4'>
        <p>Categories</p>
      </section>
    </main>
  )
}

export default page