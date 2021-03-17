import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import data from '../firebase'

const Groupes = () => {

    const [getData, setGetData] = useState([])

    useEffect(() => {
        const dataGroup = data.database().ref("groupes")
            dataGroup.on('value', snapshot => {
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
                <title>Domrermy Gymnastique Paris 13m</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
            </Head>
            <Header />
            <h3 className="mt-3 mb-3">Groupes</h3>
            <div className="container mb-3 mt-4">
                <div className="row justify-content-between">
                { getData.length !== 0
                    ? <>
                        {
                            Object.keys(getData).map((id,index) => {
                                return <>
                                        <div className="group-box col-md-6 fade-in mt-3" key={index}>
                                            <h4>{getData[id].title}</h4>
                                            <p>{getData[id].detail}</p>
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
            <Footer />
        </>
    )
}

export default Groupes