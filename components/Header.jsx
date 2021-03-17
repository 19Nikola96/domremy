import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import data from '../firebase';

const Header = () => {

  const [getData, setGetData] = useState([])

    useEffect(() => {
        const dataActu = data.database().ref("header-img")
            dataActu.on('value', snapshot => {
                if (snapshot.val() != null) {
                    setGetData({
                        ...snapshot.val()
                    })
                }
            })
    }, [])

  return (
    <>
      {
        Object.keys(getData).length === 0
          ? <>
              <header style={{ backgroundImage: `linear-gradient(to right, rgba(63, 1, 63, 0.44), rgba(74, 0, 0, 0.432))`, padding: '9.35rem 0' }} >
              </header>
            </>

          : <>
              {
                Object.keys(getData).map((id) => {
                  return <header key={id} style={{ backgroundImage: `linear-gradient(to right, rgba(63, 1, 63, 0.44), rgba(74, 0, 0, 0.432)), url(${getData[id].url})` }} >
                          <Navigation />
                          <h1 className="mt-5 fade-in">La Domremy Gymnastique - Paris 13m -</h1>
                          <h2 className="fade-in">Club de Gymnastique artistique féminine</h2>
                        </header>
                })
              }
            </>
      }
      
    </>
    )
}

export default Header
