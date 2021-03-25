import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import data from '../firebase'

const Staff = () => {

    const [getData, setGetData] = useState([])

    useEffect(() => {
        const dataStaff = data.database().ref("staffs")
            dataStaff.on('value', snapshot => {
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
                <title>Domremy Gymnastique Paris 13ème</title>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="description" content="Staff du club Domrémy Gymnastique" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
            </Head>
            <Header />
            <h3 className="mt-3 mb-4">L'Équipe</h3>
            <div className="staff container fade-in">
                {
                    Object.keys(getData).map((id) => {
                        return <div className="staff-box">
                                {
                                    typeof getData[id].url === 'undefined' 
                                        ? <img src="img/blank-profile-picture-973460_1280.png" alt="empty-pic"/>

                                        : <img className="img-fluid" src={getData[id].url} alt={getData[id].imgName}/>
                                }
                                <h4>{getData[id].name}</h4>
                                <p>{getData[id].detail}</p>
                               </div>
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Staff