export interface Project {
  id: number;
  title: string;
  techStack: string[];
  description: string;
  features: string[];
  image: string;
  link: string; // 🆕 Added link field
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Book Management System',
    techStack: ['Python', 'Tkinter', 'SQLite'],
    description: 'A Python-based system designed to efficiently manage book details, user interactions, and inventory.',
    features: [
      'Add, update, view, and delete books.',
      'Track borrowed and returned books with real-time updates.',
      'Simple, clean UI built using Tkinter for user interaction.'
    ],
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/satyam362/Book-Management-Python-Project' // 🔗 Link here
  },
  {
    id: 2,
    title: 'Diabetes Prediction with Machine Learning',
    techStack: ['R Programming', 'Support Vector Machine (SVM)'],
    description: 'This project uses machine learning (SVM) to predict the likelihood of diabetes based on input data, utilizing cleaned and preprocessed datasets.',
    features: [
      'Data cleaning and preprocessing.',
      'Machine learning model training using SVM.',
      'Data visualization to provide insights into trends and patterns.'
    ],
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/satyam362/Diabetes-Prediction-using-ML' // 🔗 Link here
  },
  {
    id: 3,
    title: 'Electric Vehicle Analysis',
    techStack: ['Tableau', 'Data Visualization', 'Excel'],
    description: 'An analysis of electric vehicle adoption, trends, and infrastructure using Tableau and Excel for data visualization.',
    features: [
      'Insights into the electric vehicle market growth and trends.',
      'Interactive dashboards and visualizations created in Tableau.',
      'Exploration of challenges and opportunities in the EV industry.'
    ],
    image: 'https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/satyam362/Electric-Vehicle-Analysis' // 🔗 Tableau link
  }
];
