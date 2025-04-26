export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  certificateLink: string;
  logo: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Object-Oriented Programming',
    issuer: 'neocolab',
    date: '2023',
    certificateLink: '#',
    logo: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    title: 'DSA Self-Paced',
    issuer: 'GeeksForGeeks',
    date: '2023',
    certificateLink: '#',
    logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Coursera',
    date: '2022',
    certificateLink: '#',
    logo: 'https://images.pexels.com/photos/7092413/pexels-photo-7092413.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    title: 'Programming in C++: A Hands-on Introduction',
    issuer: 'Coursera',
    date: '2022',
    certificateLink: '##',
    logo: 'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];