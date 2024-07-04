import React from 'react'
import styles from './Menu.module.css'
import { ReactComponent as SearchMenuSVG } from '../../svg/searchMenu.svg';
// import { useState } from 'react';

export default function Menu({radius, setRadius}) {

  const handleChange = (event) => {
    const valueInKm = event.target.value;
    setRadius(valueInKm);
  };
  return (
    <div className={`${styles.menu}`}>
            <form className={`${styles.form_search}`}>
              <SearchMenuSVG  className={`${styles.searchMenuSVG}`}/>
              <input className={`${styles.input_search}`} type="text" placeholder="Место, адрес..."></input>
            </form>
        <h2 className={`${styles.menu_title}`}>Искать:</h2>
        <div className={`${styles.categoryList}`}>
          <div className={`${styles.btnList}`}>
            <button className={`${styles.categoryBtn}`}>
              <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/adult.png" alt="18+"></img>
              </div>
              <p className={`${styles.categoryName}`}>18+</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/amusements.png" alt="amusements"></img>
              </div>
              <p className={`${styles.categoryName}`}>amusements</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
              <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/auto.png" alt="auto"></img>
              </div>
              <p className={`${styles.categoryName}`}>auto</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
              <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/bank.png" alt="bank"></img>
              </div>
              <p className={`${styles.categoryName}`}>bank</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/bicycles.png" alt="bicycles"></img>
              </div>
              <p className={`${styles.categoryName}`}>bicycles</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/church.png" alt="church"></img>
              </div>
              <p className={`${styles.categoryName}`}>church</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/coffee.png" alt="coffee"></img>
              </div>
              <p className={`${styles.categoryName}`}>coffee</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/factories.png" alt="factories"></img>
              </div>
              <p className={`${styles.categoryName}`}>factories</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/food.png" alt="food"></img>
              </div>
              <p className={`${styles.categoryName}`}>food</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/gasStation.png" alt="chgasStationurch"></img>
              </div>
              <p className={`${styles.categoryName}`}>gas station</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/history.png" alt="history"></img>
              </div>
              <p className={`${styles.categoryName}`}>history</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/nature.png" alt="nature"></img>
              </div>
              <p className={`${styles.categoryName}`}>nature</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/shops.png" alt="shops"></img>
              </div>
              <p className={`${styles.categoryName}`}>shops</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/sleep.png" alt="sleep"></img>
              </div>
              <p className={`${styles.categoryName}`}>sleep</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/sport.png" alt="sport"></img>
              </div>
              <p className={`${styles.categoryName}`}>sport</p>
            </button>
            <button className={`${styles.categoryBtn}`}>
            <div className={`${styles.Png}`}>
              <img className={`${styles.categoryPng}`} src="/icons/other.png" alt="other"></img>
              </div>
              <p className={`${styles.categoryName}`}>other</p>
            </button>
            </div>
        </div>
        <div className={`${styles.radiusText}`}>В радиусе</div>
        <div className={`${styles.radius}`}>
            <input className={`${styles.inputRadius}`} type="text" value={radius} onChange={handleChange}/>
            <p className={`${styles.inputRadiusText}`}>км</p>
          </div>
          <button type="button" className={`${styles.searchBtn}`}>
          <div className={`${styles.svgBtn}`}>
          <SearchMenuSVG  className={`${styles.categorySvgBtn}`}/>
          </div>
          </button>
        </div>
  )
}

//rfc