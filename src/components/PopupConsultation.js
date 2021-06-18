import './popup-consultation.scss'

export default function PopupConsultation(props) {
  return (
    <section className="popup-consultation" hidden>
      <div className="popup-selection__inner">
        <div className="popup-cosmetolog popup-selection">
          <h2 className="popup-selection__title">Консультация косметолога</h2>

          <p className="popup-selection__text">
            Мы можем помочь вам выбрать из нашего каталога именно то, что вам
            нужно
          </p>

          <button className="button background-btn popup-cosmetolog__btn">
            Задать вопрос
          </button>
        </div>

        <div className="popup-assortment popup-selection">
          <h2 className="popup-selection__title">Онлайн подбор косметики</h2>

          <p className="popup-selection__text">
            Вы можете подобрать для себя наилучшее средство для вашей кожи
            онлайн
          </p>

          <button className="button background-btn popup-assortment__btn">
            Пройти подбор
          </button>
        </div>
      </div>
    </section>
  )
}
