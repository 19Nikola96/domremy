import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import data from '../firebase'

const Competitions = () => {

    const [getData, setGetData] = useState([])

    useEffect(() => {
        const dataCompet = data.database().ref("competitions")
            dataCompet.on('value', snapshot => {
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
                <title>Domremy Gymnastique Paris 13m</title>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="description" content="Compatitions du club Domrémy Gymnastique" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
            </Head>
            <Header />
            <h3 className="mt-3 mb-3">Compétitions</h3>
            <div className="container mb-3">
                <div className="row">
                { getData.length !== 0
                    ? <>
                        {
                            Object.keys(getData).sort((a, b) => (getData[b].realDate > getData[a].realDate) ? 1 : -1 ).map((id,index) => {
                                return <>
                                        <div className="compet fade-in mt-3" key={index}>
                                            <h4 className="compet-title">{getData[id].title}</h4>
                                            <p className="mt-2">- {getData[id].date}</p>
                                            <p>- {getData[id].address}</p>
                                        </div>
                                       </>
                            })
                        }
                      </>

                    : <div className="spinner-border text-center" role="status">
                        <span className="sr-only"></span>
                      </div> 
                }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Competitions