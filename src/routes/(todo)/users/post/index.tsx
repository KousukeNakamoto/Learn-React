import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(todo)/users/post/")({
  component: RouteComponent,
  //   loader: () => {},
});

function RouteComponent() {
  return (
    <div>
      <div>post index page!</div>
    </div>
  );
}
