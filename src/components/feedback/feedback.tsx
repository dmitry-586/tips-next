"use client";

import styles from "../../styles/feedback.module.scss";
import Image from "next/image";
import { Button, Group, MantineProvider, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { sendMessage } from "@/api/telegram";
import Link from "next/link";

export default function Feedback() {
  // Инициализация формы и её значений
  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: "",
      phone: "",
      radio: "",
      text: "",
    },
    validate: {
      phone: (value) =>
        /^\+7|8\d{3}\d{3}\d{2}\d{2}$/.test(value)
          ? null
          : "Неправильный номер телефона",
    },
  });

  // Фукнция смены значения radio в сообщении
  const handleOnClickRadio = (e: any) => {
    const valuebtn = e.target.textContent;
    form.setFieldValue("radio", `${valuebtn}`);
  };

  const [isLoading, setLoading] = useState(false);

  // Фукнция отправки сообщения в Telegram
  const handleSubmit = async (values: typeof form.values): Promise<void> => {
    try {
      const message = `<b>Имя:</b> ${values.name}\n<b>Телефон:</b> ${values.phone}\n<b>Вид работы:</b> ${values.radio}\n<b>Референс:</b> ${values.text}`;
      await sendMessage(message);
      setLoading(true);
    } catch (e) {
      form.setFieldError("text", "Ошибка");
    } finally {
      setLoading(false);
      form.reset();
      form.setFieldError("text", "Заявка успешно отправлена");
    }
  };
  // Верстка
  return (
    // Оболчка мантина
    <MantineProvider>
      <div className={styles.feedback} id="feedback">
        <div className={styles.feedback_left}>
          <h2 className={styles.feedback_left_top}>
            Бесплатная структура для&nbsp;Вашего сайта
          </h2>
          <p className={styles.feedback_left_description}>
            Заполните пожалуйста форму, это поможет нам точно понять в каком
            направлении нам двигаться
          </p>
          <div className={`${styles.feedback_left_bottom} lg:hidden`}>
            <p>Или свяжитесь с нами другим способом:</p>
            <div className={styles.feedback_left_bottom_info}>
              <Image
                width={40}
                height={40}
                src="/images/feedback/feedback1.svg"
                alt="icon"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <Link href="tel:+79968085818">+7 996 808 58 18</Link>
              <Link href="mailto:info@webstudio-tips.ru">
                info@webstudio-tips.ru
              </Link>
            </div>
          </div>
          <div className={`${styles.feedback_left_buttons} flex lg:hidden`}>
            <button className={styles.tg}>
              <Image
                src="/images/feedback/tg.svg"
                width={0}
                height={0}
                alt="tg"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <p>Telegram</p>
            </button>
            <button className={styles.vk}>
              <Image
                src="/images/feedback/vk.svg"
                width={28}
                height={23}
                alt="vk"
                style={{
                  width: "28px",
                  height: "23px",
                }}
              />
              <p>Вконтакте</p>
            </button>
            <button className={styles.whatsApp}>
              <Image
                src="/images/feedback/whatsApp.svg"
                width={35}
                height={35}
                alt="whatsApp"
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              <p>WhatsApp</p>
            </button>
          </div>
        </div>
        <form
          className={styles.feedback_right}
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <div className="flex gap-8 mb-16 flex-wrap lg:mb-8">
            <div className="flex flex-col w-1/2 lg:w-full">
              <p>Как Вас зовут</p>
              <TextInput
                required
                {...form.getInputProps("name")}
                placeholder="Имя"
                error={form.errors.name}
              />
            </div>
            <div className="flex flex-col w-1/2 lg:w-full">
              <p>Телефон/WhatsApp/Telegram</p>
              <TextInput
                required
                {...form.getInputProps("phone")}
                placeholder="+79999999999"
                error={form.errors.phone}
              />
            </div>
          </div>
          <div className={styles.feedback_right_buttons}>
            <p className="mb-4">Меня интересует</p>
            <div className={styles.buttons_wrapper}>
              {/* Кнопка "Сайт" */}
              <Button
                className="w-[136px] sm:w-[77px] sm:order-1"
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                Сайт
              </Button>
              {/* Кнопка "Лендинг" */}
              <Button
                className="w-[193px] sm:w-[103px] sm:order-3"
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                Лендинг
              </Button>
              {/* Кнопка "Интернет-магазин" */}
              <Button
                className="w-[237px] sm:w-[176px] sm:order-2"
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                Интернет-магазин
              </Button>
              {/* Кнопка "Веб-приложение" */}
              <Button
                className="w-[237px] sm:w-[168px] sm:order-4"
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                Веб-приложение
              </Button>
              {/* Кнопка "Другое" */}
              <Button
                className="w-[237px] sm:w-[93px] sm:order-5"
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                Другое
              </Button>
            </div>
          </div>
          <div className={styles.example}>
            <p>Уже есть проект, на который ориентируетесь/ нравится?</p>
            <TextInput
              {...form.getInputProps("text")}
              placeholder="Укажите ссылку (необязательно)"
            />
          </div>
          <Group className={styles.button}>
            <Button loading={isLoading} type="submit" className={styles.btn}>
              Оставить заявку
            </Button>
            <p>Нажав на кнопку, соглашаюсь на обработку персональных данных</p>
          </Group>
        </form>
        <div className="hidden lg:block">
          <div className={styles.feedback_left_bottom}>
            <p>Или свяжитесь с нами другим способом:</p>
            <div className={styles.feedback_left_bottom_info}>
              <div className="lg:w-5">
                <Image
                  width={40}
                  height={40}
                  src="/images/feedback/feedback1.svg"
                  alt="icon"
                  style={{
                    width: "40px",
                    height: "auto",
                  }}
                />
              </div>
              <Link href="tel:+79968085818">+7 996 808 58 18</Link>
              <Link href="mailto:info@webstudio-tips.ru">
                info@webstudio-tips.ru
              </Link>
            </div>
          </div>
          <div className={`${styles.feedback_left_buttons} flex`}>
            <button className={styles.tg}>
              <div className="lg:w-[25px]">
                <Image
                  src="/images/feedback/tg.svg"
                  width={0}
                  height={0}
                  alt="tg"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
              <p>Telegram</p>
            </button>
            <button className={styles.vk}>
              <div className="lg:w-[25px]">
                <Image
                  src="/images/feedback/vk.svg"
                  width={28}
                  height={23}
                  alt="vk"
                  style={{
                    width: "28px",
                    height: "23px",
                  }}
                />
              </div>
              <p>Вконтакте</p>
            </button>
            <button className={styles.whatsApp}>
              <div className="lg:w-[25px]">
                <Image
                  src="/images/feedback/whatsApp.svg"
                  width={35}
                  height={35}
                  alt="whatsApp"
                  style={{
                    width: "35px",
                    height: "35px",
                  }}
                />
              </div>
              <p>WhatsApp</p>
            </button>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
  // Конец верстки
}
