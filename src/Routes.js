import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import TimeSheetPage from "./pages/TimeSheet.page.vue";
import MyInformationPage from "./pages/MyInformation.page.vue";
import DocumentPage from "./pages/Document.page.vue";
import PaySlipPage from "./pages/PaySlips.page.vue";
import LeavesPage from "./pages/Leaves.page.vue";
import OrganizationPage from "./pages/OrganizationalChart.page.vue";
import ExpensePage from "./pages/Expense.page.vue";
import MyTeamPage from "./pages/MyTeam.page.vue";

const routes = [
  {
    path: "/",
    name: "AppDashboard",
    component: Dashboard,
    redirect: '/timesheet',
    children: [
      {
        path: "/timesheet",
        name: "TimeSheetPage",
        component: TimeSheetPage,
      },
      {
        path: "/my-information",
        name: "MyInformationPage",
        component: MyInformationPage,
      },
      {
        path: "/payslips",
        name: "PaySlipPage",
        component: PaySlipPage,
      },
      {
        path: "/docs",
        name: "DocumentPage",
        component: DocumentPage,
      },
      {
        path: "/leaves",
        name: "LeavesPage",
        component: LeavesPage,
      },
      {
        path: "/orgchart",
        name: "OrganizationPage",
        component: OrganizationPage,
      },
      {
        path: "/expense",
        name: "ExpensePage",
        component: ExpensePage,
      },
      {
        path: "/my-team",
        name: "MyTeamPage",
        component: MyTeamPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});

export default router;
