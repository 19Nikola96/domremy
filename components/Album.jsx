import React, { useState, useEffect } from 'react'
import data from '../firebase';
import Image from './Image';

const Album = () => {

    const [getData, setGetData] = useState([])
    const [getDataFilter, setGetDataFilter] = useState([])
    const [filterImg, setFilterImg] = useState('all')

    useEffect(() => {
        const dataAlbum = data.database().ref("images")
        dataAlbum.on('value', snapshot => {
            if (snapshot.val() != null) {
                setGetData({
                    ...snapshot.val()
                })
            }
        })
        const dataFilter = data.database().ref("filter")
        dataFilter.on('value', snapshot => {
            if (snapshot.val() != null) {
                setGetDataFilter({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    const handleClick = (idFilter) => {
        Object.keys(getDataFilter).map((id) => {
            const buttonThisId = document.getElementById(id)
            buttonThisId.classList.remove("selected-filter")
        })
        const buttonClass = document.querySelector('.all-filter')

        buttonClass.classList.remove("selected-filter")

        setFilterImg(getDataFilter[idFilter].filterName)

        const buttonId = document.getElementById(idFilter)

        buttonId.classList.add("selected-filter")
    }

    const handleAllButtonClick = () => {
        setFilterImg('all')
        const buttonClass = document.querySelector('.all-filter')

        buttonClass.classList.add("selected-filter")

        Object.keys(getDataFilter).map((id) => {
            const buttonThisId = document.getElementById(id)
            buttonThisId.classList.remove("selected-filter")
        })

    }

    return (
        <>
            <div className="row mx-auto">
                <button className="all-filter mt-2 mx-1 selected-filter" onClick={() => handleAllButtonClick()}>Toutes les photos</button>
                {
                    Object.keys(getDataFilter).map((id, index) => {
                        return <button id={id} onClick={() => handleClick(id)} className="filter mt-2 mx-1" key={index}>{getDataFilter[id].filterName}</button> 
                    })
                }
            </div>
            <div className="album row my-3 mx-auto">
                { getData.length !== 0 
                    ? <>
                        { filterImg === 'all'
                            ? Object.keys(getData).sort((a, b) => (getData[b].date > getData[a].date) ? 1 : -1 ).map((id) => { 
                                return <Image key={id} id={id} data={getData[id]}/>
                            })

                            : Object.keys(getData).filter((id) => getData[id].filter.replace(/\s/g, "") === filterImg.replace(/\s/g, "")).sort((a, b) => (getData[b].date > getData[a].date) ? 1 : -1 ).map((id) => { 
                                return <Image key={id} id={id} data={getData[id]}/>
                            })
                        }
                    </>

                    : <div className="spinner-border text-center" role="status">
                        <span className="sr-only"></span>
                    </div> 
                }
                
            </div>
        </>

    )
}

export default Album
