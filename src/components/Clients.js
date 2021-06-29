import client1 from './../img/pic/client1.jpg'
import client2 from './../img/pic/client2.jpg'
import client3 from './../img/pic/client3.jpg'
import client4 from './../img/pic/client4.jpg'

import './clients.scss'

export default function Clients(props) {
  return (
    <section className="client">
      <h2 className="section-title">Наши покупатели</h2>

      <p className="section-description">
        Сотни женщин уже пользуются нашими товарами и получают профессиональный
        уход как в кабинете косметолога у себя дома
      </p>

      <ul className="client__list list">
        <li className="client__item">
          <div className="client__item-img">
            <img src={client1} alt="client" />
          </div>
          <a href="#1" className="client__item-link">
            @example
          </a>
        </li>

        <li className="client__item">
          <div className="client__item-img">
            <img src={client2} alt="client" />
          </div>
          <a href="#1" className="client__item-link">
            @example
          </a>
        </li>

        <li className="client__item">
          <div className="client__item-img">
            <img src={client3} alt="client" />
          </div>
          <a href="#1" className="client__item-link">
            @example
          </a>
        </li>

        <li className="client__item">
          <div className="client__item-img">
            <img src={client4} alt="client" />
          </div>
          <a href="#1" className="client__item-link">
            @example
          </a>
        </li>
      </ul>
    </section>
  )
}
