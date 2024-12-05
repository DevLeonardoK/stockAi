import { Alink } from "./styles";

const Link = ({ onClick, title }) => {
  return <Alink onClick={onClick}>{title}</Alink>;
};

export { Link };
