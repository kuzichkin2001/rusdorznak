import './AdvantagesMini.scss'

function AdvantagesMini({ arr }) {
  return (
    <div className="advantagesMini-wrapper">
      <div className="advantagesMini page-container">
        {arr.map((item) => (
          <div className="advantagesMini__item">
            <img src={item.url} alt="img" className="advantagesMini__item-img" />
            <p className="advantagesMini__item-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdvantagesMini
