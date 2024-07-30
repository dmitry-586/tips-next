interface IButtonItem {
  title: string;
}

const Button: React.FC<IButtonItem> = ({ title }) => {
  return (
    <div className="border rounded-[40px] px-10 py-[14.5px] text-xl transition-all duration-300 hover:bg-my-gradient hover:border-black cursor-pointer">
      {title}
    </div>
  );
};
// background: linear-gradient(180deg, #990000 0%, #FFB800 100%)
export default Button;
