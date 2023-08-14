import React, { useEffect, useState } from "react";
import axios from "axios";
import { add } from "../utils/cal";

export default function Demo8(props: any) {
  const [user, setUser] = useState<any>(null);

  async function fetchUserData(id: any) {
    // 1# using fetch
    // const response = await fetch("/" + id);
    // setTodo(await response.json());

    // 2# using axios
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
      // "http://localhost:9091/feed"
    );
    setUser(response.data);
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div data-testid="summary">{user.name}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <div>Add: {add(6, 2)}</div>
    </div>
  );
}
