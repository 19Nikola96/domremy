import Head from 'next/head'
import React from 'react'
import Album from '../components/Album'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Photos = () => {
    return (
        <>
            <Head>
                <title>Domremy Gymnastique Paris 13m</title>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="description" content="Photos du club Domrémy Gymnastique" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
            </Head>
            <Header />
            <div className="container">
            <h3 className="mt-4 mb-5">Photos</h3>
                <Album />
            </div>
            <Footer />
        </>
    )
}

export default Photos