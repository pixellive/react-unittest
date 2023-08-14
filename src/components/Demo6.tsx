import React from "react";

type Props = {};

export default function Demo6({}: Props) {
  const result = ["angular", "react", "flutter", "vuejs"];
  return (
    <div>
      <ul>
        {result.map((item) => (
          <li data-testid="li" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
