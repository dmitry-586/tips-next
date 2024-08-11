import Button from "../button/Button";
import Image from "next/image";

export default function AboutHeader() {
  return (
    <div className="bg-black pb-16 px-10 rounded-b-[100px] flex justify-between items-center gap-14">
      <div>
        <div className="flex gap-16">
          <Image
            width={936}
            height={0}
            src="/images/about/AboutLine.svg"
            alt="AboutLine"
            style={{
              height: "auto",
              width: "936px"
            }}
          />
          <h2 className="text-[87px]">О&nbsp;студии</h2>
        </div>
        <div className="flex justify-between mt-10">
          <p className="text-[32px] leading-none w-[755px]">
            Наша команда опытных специалистов работает над созданием продающих и
            функциональных веб-решений для различных клиентов
          </p>
          <Button
            children="Получить бесплатную структуру"
            className="w-[584px] h-[89px] text-[32px] bg-white text-black hover:bg-my-gradient2 hover:border-black hover:text-white"
          />
        </div>
      </div>
      <p className="text-[32px] leading-none max-w-[500px]">
        Обеспечиваем полную прозрачность на всех этапах работы, чтобы вы могли
        быть уверены в том, что ваш проект находится в надежных руках
      </p>
    </div>
  );
}
