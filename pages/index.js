import { useState } from 'react';
import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList/CoinList'
import Layout from '../components/Layout/Layout'

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('');

  //Coins to Display
  const allCoins = filteredCoins.filter(coin => 
    coin.name.toLowerCase()
    .includes(search.toLowerCase()) //show anything that includes the letters typed in
  )
  
  //When user searches coins, update UI
  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase()) //lowercase whatever is searched
  }

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CoinList filteredCoins={allCoins}/>
      </div>
    </Layout>
  )
}

// You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time.
export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')
  const filteredCoins = await res.json()

  return {
    props: { filteredCoins }
  }
}

