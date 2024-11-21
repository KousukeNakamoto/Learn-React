import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Users from "../../pages/todo/users/Users";
import { queryOptions } from "@tanstack/react-query";
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: async () => {
    // 数秒遅延（例: 3秒）
    await delay(3000);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  },
});
export const testQueryOptions = queryOptions({
  queryKey: ["test"],
  queryFn: async () => {
    // 数秒遅延（例: 3秒）
    await delay(10000);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  },
});

export const Route = createFileRoute("/(todo)/users")({
  component: Users,
  pendingComponent: Pending,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(usersQueryOptions);
    context.queryClient.ensureQueryData(testQueryOptions);
  },
});

function Pending() {
  return <div>pending</div>;
}
