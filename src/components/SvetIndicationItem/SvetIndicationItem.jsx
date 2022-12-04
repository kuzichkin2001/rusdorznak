import './SvetIndicationItem.scss'

import Checkbox from '../Checkbox/Checkbox'

function SvetIndicationItem({ item }) {
  return (
    <div className="svet-indication__item">
      <div className="svet-indication__content">
        <img src={item.icon} alt="Item icon" className="svet-indication__img" />
        <h3 className="svet-indication__title">{item.title}</h3>
        {item?.desc1 && (
          <p className="svet-indication__desc">{item.desc1}</p>
        )}
        {item?.desc2 && (
          <p className="svet-indication__desc">{item.desc2}</p>
        )}
        {item?.models && (
          <div className="svet-indication__models">    
            <label htmlFor={`${item.id}-select`} className="svet-indication__label">Модель</label>
            <select id={`${item.id}-select`} className="svet-indication__select">
              {item.models.map(model => (
                <option value={model}>{model}</option>
              ))}
            </select>
          </div>
        )}
        {item?.checkLabel1 && (
          <div className="svet-indication__check">
            <Checkbox size="20px" />
            <label htmlFor={`${item.id}-check`} className="svet-indication__check-label">{item.checkLabel1}</label>
          </div>
        )}
        {item?.checkLabel2 && (
          <div className="svet-indication__check">
            <Checkbox size="20px" />
            <label htmlFor={`${item.id}-check`} className="svet-indication__check-label">{item.checkLabel2}</label>
          </div>
        )}
        {item?.subDesc1 && (
          <p className="svet-indication__sub-desc">{item.subDesc1}</p>
        )}
        {item?.subDesc2 && (
          <p className="svet-indication__sub-desc">{item.subDesc2}</p>
        )}
        {item?.subDesc3 && (
          <p className="svet-indication__sub-desc">{item.subDesc3}</p>
        )}
      </div>

      <div className="svet-indication__summary">
        <div className="svet-indication__prices">
          <p className="svet-indication__prev">{item.prevPrice} рублей</p>
          <p className="svet-indication__current">{item.currentPrice} рублей</p>
        </div>
        <button className="svet-indication__add-to-cart-btn">В корзину</button>
      </div>
    </div>
  )
}

export default SvetIndicationItem
