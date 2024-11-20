import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";
import { usersQueryOptions } from "../../../routes/(todo)/users";
import { Suspense } from "react";
import { Test } from "./components/Text";

function Users() {
  const { data } = useSuspenseQuery(usersQueryOptions);
  console.log("render");

  return (
    <div className="flex min-h-screen">
      <div>
        <h2 className="text-cyan-400">Users sidebar</h2>
        <ul className="flex flex-col">
          {data.map((user: any) => (
            <Link
              key={user.id}
              to="/users/post/$userId"
              params={{
                userId: user.id,
              }}
            >
              {user.name}
            </Link>
          ))}
        </ul>
        <Suspense fallback={<div>loading...</div>}>
          <Test />
        </Suspense>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Users;
