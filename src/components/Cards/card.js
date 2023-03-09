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

                            <Link className={'cart_text'} to={`logement/${house.id}`}>
                                <p>{house.title}</p>
                            </Link>

                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Card;
