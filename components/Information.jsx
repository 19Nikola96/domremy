import React, { useState, useEffect } from 'react'
import data from '../firebase'

const Information = () => {
    const [getData, setGetData] = useState([])

    useEffect(() => {
        const dataActu = data.database().ref("information")
            dataActu.on('value', snapshot => {
                if (snapshot.val() != null) {
                    setGetData({
                        ...snapshot.val()
                    })
                }
            })
    }, [])

    return (
        <div className="info-contact">
            {
                Object.keys(getData).map((id, index) => {
                    return <div key={index} className="row justify-content-between">
                            <div className="info-reseau">
                                <h4>Informations</h4>    
                                <p><i className="fas fa-phone-alt"></i><span>{getData[id].phonenumber}</span></p>                            
                                <p><i className="fas fa-envelope"></i><span>{getData[id].mail}</span></p>                            
                                <p><i className="fas fa-map-marker-alt"></i><span>{getData[id].address}</span></p>                            
                            </div>
                            <div className="info-reseau-line">
                                <span className="line"></span>
                            </div>
                            <div className="info-reseau">
                                <h4>Réseaux sociaux</h4>  
                                <p><i className="fab fa-instagram"></i><a href={getData[id].instagramLink} target="_blank" rel="noopener">{getData[id].instagram}</a></p>                            
                                <p><i className="fab fa-facebook"></i><a href={getData[id].facebookLink} target="_blank" rel="noopener">{getData[id].facebook}</a></p>
                            </div>
                        </div>
                })
            }
        </div>
    )
}

export default Information
