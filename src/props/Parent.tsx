import { Children } from "react";
import { Child, ChildAsFC} from "./Child";

const Parent = () => {
  return (
    <ChildAsFC name="John" color="red" age={10} onClick={() => alert({Children})} />
  );
}

export default Parent;