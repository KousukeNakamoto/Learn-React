import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Users from "../../pages/todo/users/Users";
import { queryOptions } from "@tanstack/react-query";

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  },
});

export const Route = createFileRoute("/(todo)/users")({
  component: Users,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(usersQueryOptions);
  },
});
