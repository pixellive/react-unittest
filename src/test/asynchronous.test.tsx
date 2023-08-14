import React from "react";
import User from "../components/Demo8";
import axios from "axios";
import fetch from "jest-fetch-mock"; //Async. Test
import { render, screen } from "@testing-library/react";
import * as Cal from "../utils/cal";

// 3
const fakeUser = {
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
};

test("renders user data", async () => {
  // 3
  const axiosMock = jest
    .spyOn(axios, "get")
    .mockImplementation((url: string) => {
      console.log(url);
      return Promise.resolve<any>({
        data: fakeUser,
      });
    });

  // 4
  const calMock = jest
    .spyOn(Cal, "add")
    .mockImplementation((a: number, b: number) => {
      return -100000.1232321;
    });

  render(<User id="1234" />);

  // 1
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // screen.debug();
  // expect(screen.getByText(/delectus aut autem/)).toBeInTheDocument();

  // 2
  expect(await screen.findByText(/Leanne Graham/)).toBeInTheDocument();

  // 4
  expect(await screen.findByText("Add: -100000.1232321")).toBeInTheDocument();

  // 3
  axiosMock.mockClear();

  // 4
  calMock.mockClear();
});
