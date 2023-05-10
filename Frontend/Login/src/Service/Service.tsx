import { createSignal } from "solid-js";
import { api } from "../Api/Api";

const login = async (body_params: any) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${api}in`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body_params),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      setError(err);
      console.log(err);
    });
  return data();
};

export { login };
