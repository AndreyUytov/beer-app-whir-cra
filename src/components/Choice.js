import choice1 from './../img/pic/shoice1.png'
import choice2 from './../img/pic/shoice2.png'

import './choice.scss'

export default function Choice (props) {
  return (
    <div class="shoice__wrapper">
    <section class="shoice">
      <h2 class="section-title">Не знаете что нужно?</h2>
      <p class="section-description">
        Мы можем помочь вам выбрать из нашего каталога именно то, что вам нужно,
        так как косметика очень спецефическая наши специалисты помогут сделать
        окончательный выбор
      </p>
      <div class="shoice__selection">
        <img src={choice1} />
        <button class="selection__btn background-btn button">
          Пройти подбор
        </button>
      </div>

      <div class="shoice__question">
        <img src={choice2} />
        <button class="question__btn background-btn button">
          Задать вопрос
        </button>
      </div>
    </section>
  </div>
  )
}