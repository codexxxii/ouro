import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "@/lib/use-context";

export default function CreateProjectModal() {
  const { setCreateProjectModal } = useContext();

  return (
    <AnimatePresence mode="wait">
      <div className="fixed inset-0 grid place-items-center">
        <div
          className="absolute z-999 inset-0 bg-neutral-950/50 backdrop-blur-sm"
          onClick={() => setCreateProjectModal(false)}
        />
        <div className="w-full max-w-2xl bg-neutral-950 rounded-xl border border-neutral-800 z-1000 flex flex-col gap-4 p-4">
          <div>
            <p className="text-2xl font-semibold text-white">
              Give your project a name
            </p>
          </div>
          <div className="w-full">
            <input
              placeholder="Search..."
              className="w-full rounded-[5px] border border-neutral-800 bg-neutral-900 px-2.5 h-8 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-700"
            />
          </div>
          <div className="w-full flex justify-end items-center gap-4">
            <button
              onClick={() => setCreateProjectModal(false)}
              className="bg-red-700 text-white"
            >
              Cancel
            </button>
            <button className="bg-white text-black">Save</button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
