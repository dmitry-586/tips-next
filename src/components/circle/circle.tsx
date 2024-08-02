interface CircleProps {
  width: string;
  height: string;
  right?: string;
  left?: string;
  bottom?: string;
  zIndex?: number;
  blur?: number;
  color: string;
}

const Circle: React.FC<CircleProps> = ({
  width,
  height,
  right,
  left,
  bottom,
  zIndex,
  blur,
  color,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width: `${width}`,
        height: `${height}`,
        borderRadius: "50%",
        background: `${color}`,
        filter: `blur(${blur}px)`,
        zIndex: `${zIndex}`,
        right: `${right}`,
        left: `${left}`,
        bottom: `${bottom}`,
      }}
    ></div>
  );
};

export default Circle;
