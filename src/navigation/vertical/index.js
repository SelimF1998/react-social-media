import { Home, Briefcase, Flag, BookOpen, Clipboard } from "react-feather"

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: "tasks",
    title: "Tasks",
    icon: <Briefcase size={20} />,
    navLink: "/tasks"
  },
  {
    id: "tasks-groups",
    title: "Tasks Groups",
    icon: <Clipboard size={20} />,
    navLink: "/tasks-groups"
  },
  {
    id: "daily-reports",
    title: "Daily Reports",
    icon: <BookOpen size={20} />,
    navLink: "/daily-reports"
  },
  {
    id: "milestones",
    title: "Milestones",
    icon: <Flag size={20} />,
    navLink: "/milestones"
  }
]
