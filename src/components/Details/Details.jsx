import './Details.scss'
import { details } from '../../mocks/details';

function Details() {
  return (
    <div className="details-wrapper">
      <div className="details page-container">
        {details.map(({ id, icon, title, desc }) => (
          <div className="details__item" key={id}>
            <img src={icon} alt="Icon" className="details__icon" />
            <p className="details__info">
              <strong className="details__title">{title}</strong>
              <p className="details__desc">{desc}</p>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Details
