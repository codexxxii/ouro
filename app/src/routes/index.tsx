import { createFileRoute, Link } from "@tanstack/react-router";
import { Show, SignInButton, SignUpButton, SignOutButton } from "@clerk/react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Navbar */}
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="w-1/4 flex justify-between items-center">
          <div className="text-xl font-semibold">Ouro</div>
        </div>

        <div className="hidden grow justify-center items-center gap-8 text-sm text-neutral-400 md:flex">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </div>

        <div className="w-1/4 flex justify-end items-center gap-4">
          <Show when={"signed-out"}>
            <SignInButton mode="modal">
              <button className="rounded-lg  border border-white bg-black px-4 py-2 text-sm font-medium text-white">
                Log In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
                Get Started
              </button>
            </SignUpButton>
          </Show>
          <Show when={"signed-in"}>
            <Link to="/home">
              <button className="rounded-lg px-4 py-2 text-sm font-medium text-white">
                Dashboard
              </button>
            </Link>
            <SignOutButton>
              <button className="rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white">
                Log Out
              </button>
            </SignOutButton>
          </Show>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-400">
            A simpler way to manage your work
          </div>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Manage projects.
            <br />
            <span className="text-neutral-500">Get things done.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
            Organize your projects, track tasks, and stay on top of deadlines
            without all the unnecessary complexity.
          </p>

          <div className="mt-9 flex justify-center gap-3">
            <Show when={"signed-out"}>
              <SignUpButton mode="modal">
                <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
                  Get Started
                </button>
              </SignUpButton>
            </Show>
            <Show when={"signed-in"}>
              <Link to="/home">
                <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
                  Dashboard
                </button>
              </Link>
            </Show>

            <button className="rounded-lg border border-neutral-800 px-6 py-3 font-medium text-white transition hover:bg-neutral-900">
              View Demo
            </button>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
            {/* Browser bar */}
            <div className="flex h-11 items-center gap-2 border-b border-neutral-800 px-4">
              <div className="h-3 w-3 rounded-full bg-neutral-700" />
              <div className="h-3 w-3 rounded-full bg-neutral-700" />
              <div className="h-3 w-3 rounded-full bg-neutral-700" />
            </div>

            {/* Dashboard */}
            <div className="grid min-h-112.5 grid-cols-[200px_1fr]">
              <aside className="hidden border-r border-neutral-800 p-5 sm:block">
                <div className="mb-8 text-sm font-medium">Ouro</div>

                <div className="space-y-2 text-sm text-neutral-500">
                  <div className="rounded-md bg-neutral-800 px-3 py-2 text-white">
                    Projects
                  </div>
                  <div className="px-3 py-2">My Tasks</div>
                  <div className="px-3 py-2">Completed</div>
                </div>
              </aside>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">Project</p>
                    <h2 className="mt-1 text-2xl font-semibold">
                      Website Redesign
                    </h2>
                  </div>

                  <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
                    + Task
                  </button>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    ["Create wireframes", true, "High"],
                    ["Design homepage", true, "Medium"],
                    ["Implement authentication", false, "High"],
                    ["Deploy application", false, "Low"],
                  ].map(([task, completed, priority]) => (
                    <div
                      key={task as string}
                      className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`grid h-5 w-5 place-items-center rounded-full border ${
                            completed
                              ? "border-white bg-white"
                              : "border-neutral-700"
                          }`}
                        >
                          {completed && (
                            <span className="text-xs text-black">✓</span>
                          )}
                        </div>

                        <span
                          className={
                            completed
                              ? "text-neutral-600 line-through"
                              : "text-neutral-200"
                          }
                        >
                          {task as string}
                        </span>
                      </div>

                      <span className="hidden text-xs text-neutral-500 sm:block">
                        {priority as string}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-neutral-500">FEATURES</p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Everything you need.
              <br />
              Nothing you don't.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 md:grid-cols-2">
            {[
              {
                title: "Projects",
                description:
                  "Keep your work organized by grouping related tasks into projects.",
              },
              {
                title: "Tasks",
                description:
                  "Create, edit, prioritize, and complete tasks from one simple workspace.",
              },
              {
                title: "Deadlines",
                description:
                  "Add due dates to your tasks and keep upcoming work visible.",
              },
              {
                title: "Progress",
                description:
                  "See what you've completed and what still needs your attention.",
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-neutral-950 p-8 md:p-10">
                <h3 className="text-xl font-medium">{feature.title}</h3>

                <p className="mt-3 max-w-md leading-7 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium text-neutral-500">HOW IT WORKS</p>

            <h2 className="mt-3 text-4xl font-semibold">
              Three steps. That's it.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              [
                "01",
                "Create a project",
                "Start by creating a project for whatever you're working on.",
              ],
              [
                "02",
                "Add your tasks",
                "Break your project down into smaller, actionable tasks.",
              ],
              [
                "03",
                "Get it done",
                "Complete tasks, update priorities, and stay on schedule.",
              ],
            ].map(([number, title, description]) => (
              <div key={number}>
                <span className="text-sm text-neutral-600">{number}</span>

                <h3 className="mt-5 text-xl font-medium">{title}</h3>

                <p className="mt-3 leading-7 text-neutral-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-900 py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-5xl font-semibold tracking-tight">
            Your projects.
            <br />
            Your tasks.
            <br />
            <span className="text-neutral-500">Your progress.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-neutral-500">
            Start organizing your work today with a workspace designed to keep
            things simple.
          </p>

          <Show when={"signed-out"}>
            <SignUpButton mode="modal">
              <button className="mt-8 rounded-lg bg-white px-7 py-3 font-medium text-black">
                Get Started
              </button>
            </SignUpButton>
          </Show>
          <Show when={"signed-in"}>
            <Link to="/home">
              <button className="mt-8 rounded-lg bg-white px-7 py-3 font-medium text-black">
                Dashboard
              </button>
            </Link>
          </Show>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <span className="font-medium">Ouro</span>

          <span className="text-sm text-neutral-600">© 2026 Ouro</span>
        </div>
      </footer>
    </main>
  );
}
