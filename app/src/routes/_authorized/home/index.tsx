import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authorized/home/"!</div>
}
