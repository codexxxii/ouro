import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/projects/$projectId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authorized/projects/$projectId/"!</div>
}
