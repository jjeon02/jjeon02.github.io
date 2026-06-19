import { IconArrowRight} from '../components/icons';
import { useNavigate } from 'react-router-dom';

function WorkCard({ title, from, tags, description, image, link }) {
  const navigate = useNavigate();

  return (
    <div className="work-card">
      {/* IMG */}
      <div
        className="work-card-image"
        style={image ? { backgroundImage: `url(${image})` } : {}}
        onClick={() => navigate(link)}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate(link)}
      >
        {tags.map(tag => (
          <span key={tag} className="badge-size-md badge-secondary work-card-tag">{tag}</span>
        ))}
      </div>
      {/* DESC */}
      <div className="work-card-info">
        <h5>{title}</h5>
        <p className="work-card-from">{from}</p>
        <p className="work-card-desc">{description}</p>
        <button className="btn-primary btn-size-lg" onClick={() => navigate(link)}>
          See Works 
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
}

export default WorkCard;
