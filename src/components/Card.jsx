import { IconArrowRight} from '../components/icons';
import { useNavigate } from 'react-router-dom';

function Card({ imageOne, titleOne, descOne, linkOne, imageTwo, titleTwo, descTwo, linkTwo }) {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper">
      {/* CARD 1 */}
      <div className="card">
        <div
          className="card-image"
          style={imageOne ? { backgroundImage: `url(${imageOne})` } : {}}
        />
        <div className="text-wrapper-xs">
          <h5>{titleOne}</h5>
          <p>{descOne}</p>
        </div>
        <button className="btn-txt" onClick={() => linkOne.startsWith('http') ? window.open(linkOne, '_blank') : navigate(linkOne)}>
              See Works <IconArrowRight />
        </button>
      </div>
      {/* CARD BORDER */}
      <div className="card-border"></div>
      {/* CARD 2 */}
      <div className="card">
        <div
          className="card-image"
          style={imageTwo ? { backgroundImage: `url(${imageTwo})` } : {}}
        />
        <div className="text-wrapper-xs">
          <h5>{titleTwo}</h5>
          <p>{descTwo}</p>
        </div>
        <button className="btn-txt" onClick={() => linkTwo.startsWith('http') ? window.open(linkTwo, '_blank') : navigate(linkTwo)}>
              See Works <IconArrowRight />
          </button>
      </div>
    </div>
  );
}

export default Card;
