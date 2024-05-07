import { renderHook, waitFor } from "@testing-library/react";
import { useUserList } from "./use-user-list";
import { GetUserListResponseProps } from "@/services/User/types";

async function loadUserList(): GetUserListResponseProps {
  return {
    status: 200,
    data: [{ id: 1, name: "John Doe", email: "john@gmail.com" }],
  };
}

describe("useUserList", () => {
  it("should return a list of users", async () => {
    const { result } = renderHook(() => useUserList({ loadUserList }));

    await waitFor(() => {
      expect(result.current.users).toMatchObject([
        { id: 1, name: "John Doe", email: "john@gmail.com" },
      ]);
    });
  });
});
