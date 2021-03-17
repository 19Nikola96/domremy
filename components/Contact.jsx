import React, {useState} from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [displayEmptyInput, setDisplayEmptyInput] = useState(false)
    const [displaySuccesfull, setDisplaySuccesfull] = useState(false)
    const [displayLoading, setDisplayLoading] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        if (nom.length === 0 || email.length === 0 || message.length === 0 ) {
            setDisplayEmptyInput(true)
        }

        else {    
            setDisplayLoading(true)
            emailjs.sendForm('service_dhi2vjf', 'template_dpgcon8', e.target, 'user_zftg3UvZLiOEoSjQbJcfV')
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {
                    setDisplayLoading(false)
                    setDisplaySuccesfull(true)
                }
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()

            setNom('')
            setEmail('')
            setMessage('')
        }
        
    }

    return (
        <form className="col-md-4 contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Nom</label>
            <input type="text" name="name" value={nom} onChange={(e) => setNom(e.target.value)} />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
            <label>Message</label>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            { displayEmptyInput === false ? '' : <p className="error">Il faut remplir tout les champs !</p> }
            { displayLoading === false ? '' : <div class="spinner-border text-center" role="status">
                                                <span class="sr-only"></span>
                                              </div> 
            }
            { displaySuccesfull === false ? '' : <p className="error">Le mail à bien été envoyé !</p> }
            <button type="submit">Envoyer</button>
        </form>
    );
}
