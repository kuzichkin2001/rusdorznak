import { useState } from 'react';
import './PropSuperView.scss';

import { superViewData } from '../../mocks/superViewData';

function PropSuperView({ includedData }) {
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);

  const [data, setData] = useState(superViewData);
  const [dataRow, setDataRow] = useState(data[selectedRow].subElements);

  return (
    <div className="prop-super-view__container">
      <div className="prop-super-view__inner-container">
        <div className="prop-super-view__inner-wrapper">
          <div className="prop-super-view__cols">
            <div className="prop-super-view__first-column">
              {data.map(({ id, mainIcon }) => (
                <div className="prop-super-view__first-column-item" key={id}>
                  <img src={mainIcon} alt="Main Icon" className="prop-super-view__first-column-icon" />
                </div>
              ))}
            </div>
            <div className="prop-super-view__second-column">
              <img src={dataRow[selectedItem].icon} alt="" className="prop-super-view__second-column-selected-photo" />
            </div>
          </div>
          <div className="prop-super-view__lower-row">
            <div className="prop-super-view__lower-row-first-col" />
            <div className="prop-super-view__lower-row-second-col">
              {dataRow.map(({ id, icon }) => (
                <div className="prop-super-view__lower-row-item" key={id}>
                  <img src={icon} alt="Subelement Icon" className="prop-super-view__lower-row-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="prop-super-view__configuration">
          <form className="prop-super-view__configuration-form">
            <fieldset className="prop-super-view__fieldset">
              <label htmlFor="size" className="prop-super-view__label">
                Размер
              </label>
              <select name="size" id="size">
                <option value="500">500 мм</option>
                <option value="700" selected>700 мм</option>
                <option value="900">900 мм</option>
              </select>
            </fieldset>

            <fieldset className="prop-super-view__fieldset">
              <label htmlFor="texot" className="prop-super-view__label">
                Изображение
              </label>
              <p id="texot" className="prop-super-view__info">
                Световозвращающие материалы III класса 
                по ГОСТ 32945-2014 (Тип В по ГОСТ 52290-2004)
              </p>
            </fieldset>

            <fieldset className="prop-super-view__fieldset">
              <label htmlFor="texot1" className="prop-super-view__label">
                Тип засветки
              </label>
              <p id="texot1" className="prop-super-view__info">
                Оптико-волоконный
              </p>
            </fieldset>

            <fieldset className="prop-super-view__fieldset">
              <label htmlFor="texot2" className="prop-super-view__label">
                Корпус
              </label>
              <p id="texot2" className="prop-super-view__info">
                Прочные долговечные алюминиевые панели
              </p>
            </fieldset>

            <fieldset className="prop-super-view__fieldset">
              <label htmlFor="texot3" className="prop-super-view__label">
                Мощность
              </label>
              <p id="texot3" className="prop-super-view__info">
                3 Вт
              </p>
            </fieldset>

            <fieldset className="prop-super-view__fieldset">
              <label htmlFor="texot" className="prop-super-view__label">
                Источник света
              </label>
              <p id="texot" className="prop-super-view__info">
                Яркие долговечные светодиоды (3 шт)
              </p>
            </fieldset>

            <div className="prop-super-view__cost cost">
              <div className="cost__wrapper">
                <p className="cost__text">Стоимость</p>
                <p className="cost__itself">от 29000 рублей</p>
              </div>
              <button className="cost__submit-btn">В корзину</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PropSuperView