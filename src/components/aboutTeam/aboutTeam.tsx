import Image from "next/image";

export default function AboutTeam() {
  return (
    <div className="flex justify-between px-10 pt-32">
      <div className="felx flex-col w-1/3">
        <h3 className="text-[87px] leading-none">Команда</h3>
        <p className="leading-none text-[24px] my-8">
          Мы являемся поставщиком качественных, выгодных и продающих решений. В
          нашей команде есть опытные копирайтеры, дизайнеры, разработчики и
          маркетологи, SEO-специалисты.
        </p>
        <p className="leading-none text-[24px]">
          Мы дорожим своей репутацией и обеспечиваем полную прозрачность на всех
          этапах работы, чтобы вы могли быть уверены в том, что ваш проект
          находится в надежных руках.
        </p>
      </div>
      <Image
        src="/images/about/aboutTeam.webp"
        alt="aboutTeam"
        width={1071}
        height={343}
      />
    </div>
  );
}
