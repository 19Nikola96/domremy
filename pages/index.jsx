import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RecentActu from '../components/RecentActu'
import data from '../firebase'

export default function Home() {

  const [getData, setGetData] = useState([])

    useEffect(() => {
        const dataActu = data.database().ref("accueil")
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
      <Head>
        <title>Domremy Gymnastique Paris 13éme</title>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="Actualités du club Domrémy Gymnastique situé dans le 13eme arrondissement participant à des compétitions départementale,régionale et nationales avec la FSCF"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </Head>
      <main>
          <Header />
            <RecentActu />
            <h3 className="mt-4">Accueil</h3>
            <div className="container">
                {
                    Object.keys(getData).length === 0
                        ? <>
                            <div className="accueil-text-loading mt-5">
                                <p className="p-4"></p>
                                <p className="p-2"></p>
                                <p className="p-2"></p>
                                <p className="p-2"></p>
                                <p className="p-2"></p>
                                <p className="p-2"></p>
                                <p className="p-2"></p>
                                <p className="p-2"></p>
                            </div>
                          </>

                        : <>
                            {
                                Object.keys(getData).map((id, index) => {
                                    return <div className="accueil-text mt-5" key={index}>
                                            <h4>{getData[id].title}</h4>
                                            <p className="mt-4">{getData[id].text}</p>
                                          </div>
                                })
                            }
                          </>
                }
            </div>
            <Footer />
      </main>
    </>
  )
}