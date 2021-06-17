import choice1 from './../img/pic/shoice1.png'
import choice2 from './../img/pic/shoice2.png'

import './choice.scss'

export default function Choice(props) {
  return (
    <div className="shoice__wrapper">
      <section className="shoice">
        <h2 className="section-title">Не знаете что нужно?</h2>
        <p className="section-description">
          Мы можем помочь вам выбрать из нашего каталога именно то, что вам
          нужно, так как косметика очень спецефическая наши специалисты помогут
          сделать окончательный выбор
        </p>
        <div className="shoice__selection">
          <img src={choice1} alt="back pic" />
          <button className="selection__btn background-btn button">
            Пройти подбор
          </button>
        </div>

        <div className="shoice__question">
          <img src={choice2} alt="back pic" />
          <button className="question__btn background-btn button">
            Задать вопрос
          </button>
        </div>
      </section>
    </div>
  )
}
