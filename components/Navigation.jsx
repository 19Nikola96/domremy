import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid" style={{ marginTop: '5px'}}>
                <Link className="navbar-brand" href="/"><a><img className="fade-in" src="logo.png" alt="logo"/></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav fade-in">
                        <li>
                            <Link href="/" rel="noreferrer"><a>Accueil</a></Link>
                            <span></span>
                        </li>
                        <li>
                            <Link href="/actualites" rel="noreferrer"><a>Actualités</a></Link>
                            <span></span>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                            <span></span>
                        </li>
                        <li>
                            <Link href="/groupes" rel="noreferrer"><a>Les Groupes</a></Link>
                            <span></span>
                        </li>
                        <li>
                            <Link href="/staff" rel="noreferrer"><a>Le Staff</a></Link>
                            <span></span>
                        </li>
                        <li>
                            <Link href="/competitions" rel="noreferrer"><a>Les Compétitions</a></Link>
                            <span></span>
                        </li>
                        <li>
                            <Link href="/photos" rel="noreferrer"><a>Photos</a></Link>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
