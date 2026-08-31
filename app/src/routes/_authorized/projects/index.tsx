import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authorized/projects/"!</div>
}
