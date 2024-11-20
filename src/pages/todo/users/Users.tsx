import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { usersQueryOptions } from "../../../routes/(todo)/users";

function Users() {
  const { data } = useSuspenseQuery(usersQueryOptions);
  return (
    <div className="flex">
      <div>
        <h2 className="text-cyan-400">Users sidebar</h2>
        {data.map((post: any) => (
          <div key={post.id}>{post.name}</div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Users;
