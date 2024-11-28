import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
interface MyRouterContext {
  queryClient: QueryClient;
}

//routeTreeで使うためにexportしている
//createRootRouteWithContextを使うことでloaderなどでcontextを受け取れる
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className="p-2 flex space-x-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/users/post" className="[&.active]:font-bold">
          Post index
        </Link>
        {/* <Link to="/users/dashboard">dashboard</Link> */}
        <Link
          to="/users/post/$userId"
          params={{
            userId: "1",
          }}
        >
          post
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
