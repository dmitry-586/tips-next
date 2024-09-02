import styles from "../../styles/info.module.scss";
import ButtonComponent from "../button/Button";
import Circle from "../circle/circle";
import { price, price2, price3 } from "../price/price.data";
import Dropdown from "./drop.info";

interface InfoProps {
  className?: string;
}

const Info: React.FC<InfoProps> = ({ className }) => {
  return (
    <div className={`${styles.mainInfo} ${className}`}>
      <div className={styles.left}>
        <div className={styles.left_header}>
          <h2>Найдем решение</h2>
          <h2 className={styles.h2}>для&nbsp;каждого</h2>
        </div>
        <p>
          <b>К нам обращаются заказчики с запросом:</b>
          <br />
          «недорогой лендинг» и «премиум-сайт» с нестандартными, сложными
          задачами
        </p>
        <ButtonComponent className={styles.button}>
          Получить бесплатную структуру
        </ButtonComponent>
      </div>
      <Circle
        width="796px"
        height="796px"
        color="linear-gradient(90deg, #FAFF00 0%, #FF0000 100%)"
        blur={250}
        left="-238px"
        top="490px"
        zIndex={0}
        className="lg:hidden"
      />
      <div className={styles.right}>
        <h3>Процесс работы</h3>
        <div className={styles.block_wrapper}>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>01</div>
              <p>Исследование и&nbsp;проектирование</p>
            </div>
            <p className={styles.block_description}>
              Мы связываем ваш бизнес с&nbsp;целевой аудиторией, анализируя
              данные и конкурентов, создавая оптимальные решения
              и&nbsp;структуру проекта.
            </p>
          </div>
          <span></span>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>02</div>
              <p>Дизайн</p>
            </div>
            <p className={styles.block_description}>
              Создаём дизайн будущего сайта, опираясь на позиционирование
              и&nbsp;фирменный стиль компании. Если материалы отсутствуют –
              предложим свое видение без&nbsp;увеличения бюджета.
            </p>
          </div>
          <span></span>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>03</div>
              <p>Разработка</p>
            </div>
            <div className={styles.info}>
              <p>В зависимости от целей и сложности проекта</p>
              <p className={styles.p}>HTML/CSS + JS, NextJS или АСПРО:</p>
              <ul>
                {price.map((item) => (
                  <li className={styles.li} key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <p className={styles.p}>CMS ( WordPress )</p>
              <ul>
                {price2.map((item) => (
                  <li className={styles.li} key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <p className={styles.p}>Tilda</p>
              <ul>
                {price3.map((item) => (
                  <li className={styles.li} key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span></span>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>04</div>
              <p>Запуск</p>
            </div>
            <p className={styles.block_description}>
              Перед запуском мы проводим окончательную отладку сайта,
              настраиваем метрики и аналитику для отслеживания действий
              пользователей.
              <br />
              <br />
              Подготовим видео-инструкцию по использованию сайта или обучим
              Вашего специалиста.
              <br />
              <br />
              После запуска – поддерживаем с Вами связь и обсуждаем дальнейшие
              планы развития проекта.
            </p>
          </div>
          <span></span>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>05</div>
              <p>Развитие</p>
            </div>
            <p className={styles.block_description}>
              Сотрудничаем с вашими маркетологами и рекламными агентами, либо
              помогаем найти новых. Быстро вносим изменения и улучшения.
              Поддерживаем вас в аналитике и отвечаем на вопросы.
            </p>
          </div>
        </div>
        <Dropdown
          openHeader={styles.openHeader}
          first="Показать список"
          second="Скрыть список"
        >
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>01</div>
              <p>Исследование и&nbsp;проектирование</p>
            </div>
            <p className={styles.block_description}>
              Мы связываем ваш бизнес с&nbsp;целевой аудиторией, анализируя
              данные и конкурентов, создавая оптимальные решения
              и&nbsp;структуру проекта.
            </p>
          </div>
          <span></span>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>02</div>
              <p>Дизайн</p>
            </div>
            <p className={styles.block_description}>
              Создаём дизайн будущего сайта, опираясь на позиционирование
              и&nbsp;фирменный стиль компании. Если материалы отсутствуют –
              предложим свое видение без&nbsp;увеличения бюджета.
            </p>
          </div>
          <span></span>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>03</div>
              <p>Разработка</p>
            </div>
            <div className={styles.info}>
              <p>В зависимости от целей и сложности проекта</p>
              <p className={styles.p}>HTML/CSS + JS, NextJS или АСПРО:</p>
              <ul>
                {price.map((item) => (
                  <li className={styles.li} key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <p className={styles.p}>CMS ( WordPress )</p>
              <ul>
                {price2.map((item) => (
                  <li className={styles.li} key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <p className={styles.p}>Tilda</p>
              <ul>
                {price3.map((item) => (
                  <li className={styles.li} key={item.id}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span></span>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>04</div>
              <p>Запуск</p>
            </div>
            <p className={styles.block_description}>
              Перед запуском мы проводим окончательную отладку сайта,
              настраиваем метрики и аналитику для отслеживания действий
              пользователей.
              <br />
              <br />
              Подготовим видео-инструкцию по использованию сайта или обучим
              Вашего специалиста.
              <br />
              <br />
              После запуска – поддерживаем с Вами связь и обсуждаем дальнейшие
              планы развития проекта.
            </p>
          </div>
          <span></span>
          <div className={styles.block}>
            <div className={styles.block_header}>
              <div>05</div>
              <p>Развитие</p>
            </div>
            <p className={styles.block_description}>
              Сотрудничаем с вашими маркетологами и рекламными агентами, либо
              помогаем найти новых. Быстро вносим изменения и улучшения.
              Поддерживаем вас в аналитике и отвечаем на вопросы.
            </p>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Info;
