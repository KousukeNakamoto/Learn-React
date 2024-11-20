import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  createRouter,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { routeTree } from "../routeTree.gen";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// export const Route = createRootRoute({
//   component: () => (
//     <>
//       <div className="p-2 flex space-x-4">
//         <Link to="/" className="[&.active]:font-bold">
//           Home
//         </Link>
//         {/* <Link
//           to="/posts/$id"
//           params={{
//             id: "sdgf",
//           }}
//           className="[&.active]:font-bold"
//         >
//           Posts
//         </Link> */}
//         <Link to="/user/foo">user</Link>
//       </div>
//       <hr />
//       <Outlet />
//       <TanStackRouterDevtools />
//     </>
//   ),
// });

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className="p-2 flex space-x-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        {/* <Link
          to="/posts/$id"
          params={{
            id: "sdgf",
          }}
          className="[&.active]:font-bold"
        >
          Posts
        </Link> */}
        <Link to="/users/dashboard"></Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
