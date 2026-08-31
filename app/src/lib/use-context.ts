import { create } from "zustand";

type ContextProps = {
  createProjectModal: boolean;
  setCreateProjectModal: (createProjectModal: boolean) => void;
};

export const useContext = create<ContextProps>((set) => ({
  createProjectModal: false,
  setCreateProjectModal: (createProjectModal) => set({ createProjectModal }),
}));
