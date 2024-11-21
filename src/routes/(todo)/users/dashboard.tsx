import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(todo)/users/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /(todo)/users/dashboard!</div>;
}
