import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import NewProposalView from '@/views/NewProposalView.vue';
import ConsensusBasicsView from '@/views/ConsensusBasicsView.vue';
import { CONSENSUS_BASICS_ROUTE, NEW_PROPOSAL_ROUTE } from '@/const';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: NEW_PROPOSAL_ROUTE,
      name: 'new',
      component: NewProposalView,
    },
    {
      path: CONSENSUS_BASICS_ROUTE,
      name: 'consensus',
      component: ConsensusBasicsView,
    },
  ],
});

export default router;
