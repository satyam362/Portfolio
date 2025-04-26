export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Leetcode Global Rank',
    description: 'Ranked 1,639,396 worldwide.',
    icon: 'award'
  },
  {
    id: 2,
    title: 'Leetcode Biweekly Contest 96',
    description: 'Global Rank 883rd among 21k+ participants.',
    icon: 'trophy'
  },
  {
    id: 3,
    title: 'S-1 Rank Student at University',
    description: 'Awarded for academic and extra-curricular excellence.',
    icon: 'medal'
  }
];