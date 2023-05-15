import { Home, Briefcase, Flag, BookOpen, Clipboard } from "react-feather"


export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: "profile",
    title: "Profile",
    icon: <Briefcase size={20} />,
    navLink: "/profile"
  },
  {
    id: "news-feed",
    title: "News Feed",
    icon: <Clipboard size={20} />,
    navLink: "/news-feed"
  },
  {
    id: "groups",
    title: "Groups",
    icon: <BookOpen size={20} />,
    navLink: "/groups"
  },
  {
    id: "messages",
    title: "Messages",
    icon: <Flag size={20} />,
    navLink: "/messages"
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: <Flag size={20} />,
    navLink: "/notifications"
  },{
    id: "settings",
    title: "Settings",
    icon: <Flag size={20} />,
    navLink: "/settings"
  }
]
