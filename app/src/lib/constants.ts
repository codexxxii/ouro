export const tasks = [
  {
    id: 1,
    title: "Create wireframes",
    project: "Website Redesign",
    priority: "High",
    due: "Today",
    completed: true,
  },
  {
    id: 2,
    title: "Design homepage",
    project: "Website Redesign",
    priority: "Medium",
    due: "Tomorrow",
    completed: true,
  },
  {
    id: 3,
    title: "Implement authentication",
    project: "Website Redesign",
    priority: "High",
    due: "Sep 2",
    completed: false,
  },
  {
    id: 4,
    title: "Create database schema",
    project: "Task Manager",
    priority: "Medium",
    due: "Sep 4",
    completed: false,
  },
  {
    id: 5,
    title: "Deploy application",
    project: "Website Redesign",
    priority: "Low",
    due: "Sep 7",
    completed: false,
  },
];

export const projects = [
  { name: "Website Redesign", tasks: 12, completed: 8, color: "bg-blue-500" },
  { name: "Task Manager", tasks: 18, completed: 6, color: "bg-purple-500" },
  {
    name: "Personal Website",
    tasks: 8,
    completed: 7,
    color: "bg-emerald-500",
  },
];
