import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  getRouteApi,
  Link,
  Outlet,
  useChildMatches,
  useLocation,
  useParams,
  useRouter,
} from "@tanstack/react-router";
import { usersQueryOptions } from "../../../routes/(todo)/users";
import { Suspense } from "react";
import { Test } from "./components/Text";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorCmp } from "../../../components/Error";

const route = getRouteApi("/(todo)/users");
// console.log("🚀 ~ route:", route);

function Users() {
  const { data } = useSuspenseQuery(usersQueryOptions);
  const router = useRouter();
  const params = useParams({ from: "/(todo)/users" });
  const location = useLocation();
  const childMatches = useChildMatches();
  // console.log("🚀 ~ Users ~ childMatches:", childMatches);
  // console.log("🚀 ~ Users ~ location:", location);
  // console.log("🚀 ~ Users ~ params:", params);
  // console.log("🚀 ~ Users ~ router:", router);

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
        <ErrorBoundary fallback={<ErrorCmp />}>
          <Suspense fallback={<div>loading...</div>}>
            <Test />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Users;
