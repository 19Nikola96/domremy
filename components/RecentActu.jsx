import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import data from '../firebase'

const RecentActu = () => {

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
        <div>
            <h3 className="mt-4">Actualités récentes</h3>
            <div className="container">
                <div className="row justify-content-between">
                    {
                        Object.keys(getData).length === 0
                            ? <>
                                <div className="loading-actu mx-auto col-md-6 d-flex flex-column justify-content-center">
                                    <p className="p-3 mb-4 w-75"></p>
                                    <p className="p-2 mb-5 w-25"></p>
                                </div>
                                <div className="loading-actu mx-auto col-md-6 d-flex flex-column justify-content-center">
                                    <p className="p-3 mb-4 w-75"></p>
                                    <p className="p-2 mb-5 w-25"></p>
                                </div>
                                <div className="loading-actu mx-auto col-md-6 d-flex flex-column justify-content-center">
                                    <p className="p-3 mb-4 w-75"></p>
                                    <p className="p-2 mb-5 w-25"></p>
                                </div>
                                <div className="loading-actu mx-auto col-md-6 d-flex flex-column justify-content-center">
                                    <p className="p-3 mb-4 w-75"></p>
                                    <p className="p-2 mb-5 w-25"></p>
                                </div>
                              </>
                            
                            : <>
                                {
                                    Object.keys(getData).sort((a, b) => (getData[b].date > getData[a].date) ? 1 : -1 ).slice(0, 4).map((id, index) => {
                                        return <Link href="/actualites" key={index}>
                                                <a style={{ backgroundImage: `linear-gradient(to right, rgba(63, 1, 63, 0.5), rgba(74, 0, 0, 0.5)), url(${getData[id].url})`}} className="actu mx-auto col-md-6 d-flex flex-column justify-content-center justify-content-between">
                                                    <div className="actu-title">
                                                        <h4>{getData[id].title}</h4>
                                                        <p className="p-2">{getData[id].description}</p>
                                                    </div>
                                                    <p className="text-end">Écrit le {getData[id].realDate}</p>
                                                </a>
                                                </Link>
                                    })
                                }
                              </>
                    }
                </div>
            </div>            
        </div>
    )
}

export default RecentActu
 