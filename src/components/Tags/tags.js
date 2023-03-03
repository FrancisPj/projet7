
import '../Tags/tags.css'

const Tags = (props) => {
    return (
        <ul className="Tags-container">
            {props.logement.tags.map((tag, index) => (
                <li className={'tags'} key={index}>
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export default Tags;
