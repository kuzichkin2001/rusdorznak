import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { Link } from "react-router-dom"

import { pagesLinks } from '../../mocks/pagesLinks'
import './CataloguePage.scss'

function CataloguePage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible={false}
      />
      <div className="pages__links page-container">
        {pagesLinks.map(({ id, href, title }) => (
          <Link to={href} key={id} className="pages__link">{title}</Link>
        ))}
      </div>
      <Footer
        deliveryVisible={false}
      />
    </div>
  )
}

export default CataloguePage