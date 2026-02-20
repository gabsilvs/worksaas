import { Children } from "react";

interface ChildProps {
  name: string;
  color?: string;
  age?: number;
  onClick: () => void;
  children?: number | string | React.ReactNode;
}

export const Child = ({ name, color, age, onClick, children }: ChildProps) => {
  return (
    <div>
        <ul style={{ color: color || 'black' }}>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            {children}
        </ul>

        <button onClick={onClick || (() => alert(`Hello, ${name}!`))}>Greet</button>
    </div>
  );
}

export const ChildAsFC: React.FC<ChildProps> = ({ name, color, age, onClick, children }) => {
  return (
    <div>
        <ul style={{ color: color || 'black' }}>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <button onClick={onClick || (() => alert(`Hello, ${name}!`))}>Greet</button>
            {children = Children.count(children) > 0 ? children : null}
        </ul>
    </div>
  );
}

ChildAsFC.displayName = 'ChildAsFC';