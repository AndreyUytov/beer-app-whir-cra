import './about.scss'

import { useConsultationPopupContext } from './consultation-context'

export default function About(props) {
  const { setIsVisible } = useConsultationPopupContext()
  const showPopupConsultation = (evt) => {
    setIsVisible(false)
    evt.stopPropagation()
  }
  return (
    <section className="about">
      <div className="about__left">
        <h2 className="section-title">Наш товар не купить в магазинах</h2>
        <p className="section-description about__section-description">
          В нашем портфеле — продукты известных мировых производителей
          профессиональной косметики и космецевтики, не только полностью
          удовлетворяющие запросам клиентов, но и отвечающие высоким требованиям
          профессионалов, работающих с ними.
        </p>
        <button
          onClick={showPopupConsultation}
          className="button background-btn about__button popup-consultation-btn"
        >
          Подобрать косметику
        </button>
      </div>
    </section>
  )
}
