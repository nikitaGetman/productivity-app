import { Login } from "@/pages/Login/index";
import { Challenges } from "@/pages/Challenges";
import { Profile } from "@/pages/Profile";
import { MyChallenges } from "@/pages/MyChallenges";
import { Settings } from "@/pages/Settings";
import { Challenge } from "@/pages/Challenge";
import { Landing } from "@/pages/Landing";

export const ROUTE_NAMES = {
  LANDING: "/",
  LOGIN: "/login",
  REGISTER: "/register",

  CHALLENGES: "/challenges",
  CHALLENGE: "/challenge", // + '/:id'
  MY_CHALLENGES: "/my-challenges",
  PROFILE: "/profile",
  SETTINGS: "/settings",
};

export const publicRoutes = [
  {
    path: ROUTE_NAMES.LANDING,
    component: Landing,
  },
  {
    path: ROUTE_NAMES.LOGIN,
    component: Login,
  },
];
export const privateRoutes = [
  {
    path: ROUTE_NAMES.CHALLENGES,
    component: Challenges,
  },
  {
    path: ROUTE_NAMES.CHALLENGE + "/:id",
    component: Challenge,
  },
  {
    path: ROUTE_NAMES.PROFILE,
    component: Profile,
  },
  {
    path: ROUTE_NAMES.MY_CHALLENGES,
    component: MyChallenges,
  },
  {
    path: ROUTE_NAMES.SETTINGS,
    component: Settings,
  },
];
