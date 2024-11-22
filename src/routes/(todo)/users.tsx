import * as React from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import Users from "../../pages/todo/users/Users";
import {
  queryOptions,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: async () => {
    // 数秒遅延（例: 3秒）
    await delay(3000);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // throw new Error();
    return await res.json();
  },
});
export const testQueryOptions = queryOptions({
  queryKey: ["test"],
  queryFn: async () => {
    // 数秒遅延（例: 3秒）
    await delay(6000);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // throw new Error("aa");
    return await res.json();
  },
});

export const Route = createFileRoute("/(todo)/users")({
  component: Users,
  pendingComponent: Pending,
  errorComponent: ErrorCmp,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(usersQueryOptions);
    context.queryClient.ensureQueryData(testQueryOptions);
  },
});

function Pending() {
  return <div>pending</div>;
}
function ErrorCmp() {
  const router = useRouter();
  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  React.useEffect(() => {
    // Reset the query error boundary
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  return (
    <div>
      <button
        onClick={() => {
          // Invalidate the route to reload the loader, and reset any router error boundaries
          router.invalidate();
        }}
      >
        retry
      </button>
    </div>
  );
}
