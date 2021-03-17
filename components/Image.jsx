import React, {useState} from 'react'
import Modal from 'react-modal'


const Image = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsModalOpen(true)} className="image fade-in">
                <div className="photo" key={props.id} style={{backgroundImage: `url(${props.data.url})`}}></div>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} ariaHideApp={false}>
                <div id="modal">
                    <img src={props.data.url} alt={props.data.name}/>
                    <i onClick={() => setIsModalOpen(false)} className="fas fa-times"></i>
                </div>
            </Modal>
        </>
    )
}

export default Image
