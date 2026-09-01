import { motion } from "framer-motion";
import { useContext } from "@/lib/use-context";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema, type ProjectSchema } from "@server/shared-types";

export default function CreateProjectModal() {
  const { setCreateProjectModal } = useContext();

  const form = useForm<ProjectSchema>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (values: ProjectSchema) => {
    console.log(values);
  };

  return (
    <div className="fixed inset-0 grid place-items-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.1,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.12,
          },
        }}

        className="absolute z-999 inset-0 bg-neutral-950/50 backdrop-blur-sm"
        onClick={() => setCreateProjectModal(false)}
      />
      <FormProvider {...form}>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
            delay: 0.12,
          }}
          exit={{
            opacity: 0,
            y: 10,
            transition: {
              duration: 0.2,
            },
          }}
          className="z-1000"
        >
          <div className="w-full max-w-xl bg-neutral-950 rounded-xl border border-neutral-800 z-1000 flex flex-col gap-4 p-4">
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-white">Project name</p>
              <p className="text-sm text-neutral-500">
                Give your project unique name to distinguish it from others
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
        </motion.form>
      </FormProvider>
    </div>
  );
}
