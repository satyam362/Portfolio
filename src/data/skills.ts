export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export const skills: Skill[] = [
  {
    category: 'Technical Skills',
    items: [
      { name: 'C++', level: 4, icon: 'code' },
      { name: 'Python', level: 4, icon: 'code' },
      { name: 'R', level: 3, icon: 'code' },
      { name: 'HTML', level: 4, icon: 'file-code' },
      { name: 'CSS', level: 3, icon: 'file-code' },
      { name: 'MySQL', level: 4, icon: 'database' },
      { name: 'Tableau', level: 4, icon: 'bar-chart' },
      { name: 'Power BI', level: 3, icon: 'pie-chart' },
      { name: 'MS Excel', level: 5, icon: 'table' }
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Problem-solving', level: 5, icon: 'puzzle' },
      { name: 'Teamwork', level: 4, icon: 'users' },
      { name: 'Adaptability', level: 4, icon: 'refresh-cw' },
      { name: 'Curiosity', level: 5, icon: 'search' }
    ]
  }
];