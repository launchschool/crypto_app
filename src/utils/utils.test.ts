// An example of testing a function that uses a service function that we have to mock.

import { describe, it, expect, vi } from "vitest";
import { getUsersNames } from "./utils";
import * as usersService from "../services/users";

vi.mock("../services/users.ts");

const mockedUsersService = vi.mocked(usersService, true);

describe("getUsersNames", () => {
  it("should return an array of user names", async () => {
    const mockUsers = [
      {
        id: 1,
        name: "Greg",
        username: "greg1",
        email: "greg1@example.com",
      },
      {
        id: 2,
        name: "Anna",
        username: "anna",
        email: "anna@example.com",
      },
    ];

    mockedUsersService.getUsers.mockResolvedValue(mockUsers);

    const result = await getUsersNames();
    expect(result).toEqual(["Greg", "Anna"]);
  });

  it("should handle an empty array of users", async () => {
    mockedUsersService.getUsers.mockResolvedValue([]);

    const result = await getUsersNames();
    expect(result).toEqual([]);
  });

  it("should handle an error thrown by getUsers", async () => {
    mockedUsersService.getUsers.mockRejectedValue(new Error("Network Error"));

    await expect(getUsersNames()).rejects.toThrow("Network Error");
  });
});
