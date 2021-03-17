import React, { useState, useEffect } from 'react'
import data from '../firebase';
import Image from './Image';

const Album = () => {

    const [getData, setGetData] = useState([])

    useEffect(() => {
        const dataAlbum = data.database().ref("images")
        dataAlbum.on('value', snapshot => {
            if (snapshot.val() != null) {
                setGetData({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    return (
        <div className="album row my-3 mx-auto">
            { getData.length !== 0 
                ? <>
                    {
                        Object.keys(getData).sort((a, b) => (getData[b].date > getData[a].date) ? 1 : -1 ).map((id) => { 
                            return <Image key={id} id={id} data={getData[id]}/>
                        })
                    }
                  </>

                : <div className="spinner-border text-center" role="status">
                    <span className="sr-only"></span>
                  </div> 
            }
            
        </div>
    )
}

export default Album
