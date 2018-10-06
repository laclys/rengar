/*
 * @Author: Lac 
 * @Date: 2018-10-05 22:26:38 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-10-06 23:33:12
 */
import React from 'react'
import Header from '../../components/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <div>home</div>
			<button onClick={()=>{alert('click')}}>click</button>
    </div>
  )
}

export default Home