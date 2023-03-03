import './card.css'
import data from '../../data/logement_data.json'
import {Link} from 'react-router-dom'

function Card() {
    return (
        <section className={'cart'}>
            <div className={'cart-container'}>
                {data.map((house) => (
                    <Link className={'cartGrid'} key={house.id} to={`logement/${house.id}`}>
                        <img src={house.cover} alt={'photos du logements locatif'}/>
                        <div className={'cart_text'}>
                            <p key={house.id} to={`logement/${house.id}`}>{house.title}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Card;
