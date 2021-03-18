import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import data from '../firebase'

const Actualites = () => {

    const [getData, setGetData] = useState([])

    useEffect(() => {
        const dataActu = data.database().ref("articles")
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
                <title>Domremy Gymnastique Paris 13m</title>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="description" content="Actualités du club Domrémy Gymnastique" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
            </Head>
            <Header />
            <h3 className="mt-3 mb-5">Actualités</h3>
            <div className="container">         
                {
                    Object.keys(getData).sort((a, b) => (getData[b].date > getData[a].date) ? 1 : -1 ).map((id,index) => {
                        return <div key={index}>
                                <div id={id} className="article row fade-in">
                                    <div className="article-img" style={{ backgroundImage: `linear-gradient(to right, rgba(63, 1, 63, 0.15), rgba(74, 0, 0, 0.15)), url(${getData[id].url})`}}></div>
                                    <div className="article-text">
                                        <div className="p-3">
                                            <h4 className="mb-3">{getData[id].title}</h4>
                                            <p className="mb-3 p-3">{getData[id].text}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-end mt-5 mb-0">Écrit le {getData[id].realDate}</p>
                                <hr className="mb-5"/>
                               </div>
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Actualites