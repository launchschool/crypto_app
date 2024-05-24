// This is an example demonstrating how to mock axios call using vitest.

import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import { getUsers } from "./users";
import { User } from "../types/index";
// In Vitest, when you use vi.mock("axios"), it mocks the module but does not automatically infer the types for the mocked functions. vi.mocked(axios, true) ensures that the TypeScript compiler understands that axios is mocked. This allows TypeScript to provide proper types for the mocked functions, helping you avoid errors and making it easier to write type-safe tests.
vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

describe("getUsers", () => {
  it("should fetch and return the list of users", async () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@example.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        username: "janesmith",
        email: "janesmith@example.com",
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: mockUsers });

    const users = await getUsers();
    expect(users).toEqual(mockUsers);
  });
});
