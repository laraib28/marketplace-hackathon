import React, { Suspense } from 'react'
import Category from '@/components/home/category'
import Banner2 from '@/components/home/banner2'
import GridBanner from '@/components/home/gridBanner'
import Hero from '@/components/home/hero'
import Services from '@/components/home/services'
import OurProduct from '@/components/home/ourProducts'
import SellingProducts from '@/components/home/sellingProduct'
import Sales from '@/components/home/sales'



function Home() {
  return (
    <div className='overfolw-hidden'>
  <Suspense 
  fallback= {<div>loading...</div>
  }>
      <Hero/>
      </Suspense>

      <Suspense  fallback= {<div>loading...</div>
  }>
      <Sales/>
      </Suspense>

      <Suspense  fallback= {<div>loading...</div>
  }>
        <Category/>
        </Suspense>

        <Suspense  fallback= {<div>loading...</div>
  }>
        <SellingProducts/>
        </Suspense>

        <Suspense  fallback= {<div>loading...</div>
  }>
        <Banner2/>
        </Suspense>

        <Suspense  fallback= {<div>loading...</div>
  }>
        <OurProduct/>
        </Suspense>

        <Suspense  fallback= {<div>loading...</div>
  }>
        <GridBanner/>
        </Suspense>

        <Suspense  fallback= {<div>loading...</div>
  }>
        <Services/>
        </Suspense>
        
    </div>
  )
}

export default Home