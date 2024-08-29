import styles from "../../styles/aboutInfo.module.scss";

export default function AboutInfo() {
  return (
    <div className="flex gap-8 justify-between bg-inherit lg:flex-col lg:gap-4">
      <div className={styles.about_info_block}>
        <h3>Подход</h3>
        <p>
          Мы тщательно изучаем потребности каждого клиента и создаем уникальные
          решения, которые отвечают его конкретным задачам и целям
        </p>
      </div>
      <div className={styles.about_info_block}>
        <h3>Решения</h3>
        <p>
          Мы не боимся экспериментировать и предлагать нестандартные решения,
          чтобы помочь вам выделиться на рынке и достичь своих целей
        </p>
      </div>
      <div className={styles.about_info_block}>
        <h3>Гибкость</h3>
        <p>
          Мы готовы быстро реагировать на изменения на рынке и адаптироваться к
          новым требованиям, чтобы обеспечить успешное развитие вашего проекта
        </p>
      </div>
    </div>
  );
}
