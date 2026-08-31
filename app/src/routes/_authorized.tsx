import { userQueryOptions } from "@/lib/api";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authorized")({
  beforeLoad: ({ context }) => {
    const data = context.queryClient.query(userQueryOptions);
    return data;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const user = Route.useRouteContext();

  if (!user.userData) {
    return Navigate({ to: "/" });
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
