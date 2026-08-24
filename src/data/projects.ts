import portfolioHome from '../assets/portfolio-cover-v2.png'
import aiRecommendationHome from '../assets/ai-recommendation-cover-v2.png'
import foodChoiceHome from '../assets/foodchoice-home.jpg'
import sportEaseCover from '../assets/sportease-cover.jpg'
import onlineShoeStoreCover from '../assets/online-shoe-store-cover.jpg'
import meikhtilaCityGuideCover from '../assets/meikhtila-city-guide-cover.jpg'
import carRecommendationCover from '../assets/car-recommendation-cover.png'
import koreanFoodOrderingCover from '../assets/korean-food-ordering-cover.jpg'
import smartCampusCover from '../assets/smart-campus-cover.png'
import skinalyzerCover from '../assets/skinalyzer-cover.png'

export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  overview: string
  caseStudyHeading: string
  image: string
  technologies: string[]
  highlights: string[]
}

const projectOrder = [
  'developer-portfolio',
  'skinalyzer',
  'ai-product-recommendation',
  'smart-campus-management',
  'meikhtila-city-guide',
  'foodchoice',
  'sportease-system',
  'car-recommendation-system',
  'online-shoe-store',
  'korean-food-ordering',
]

export const projects: Project[] = [
  {
    slug: 'developer-portfolio',
    title: 'Developer Portfolio',
    category: 'Personal brand & business website',
    summary:
      'A premium, responsive portfolio designed to present my work, capabilities, and development services with clarity.',
    overview:
      'This portfolio is a complete personal brand experience built around a focused black-and-gold visual system. It brings together an animated introduction, responsive navigation, professional profile, technology stack, project case studies, experience, services, and a working contact flow in one polished application.',
    caseStudyHeading: 'A focused digital presence built to turn experience into trust.',
    image: portfolioHome,
    technologies: ['React', 'TypeScript', 'CSS', 'Vite', 'React Router'],
    highlights: [
      'Responsive one-page business portfolio with dedicated project routes',
      'Reusable project data, cards, and case-study architecture',
      'Premium scroll reveals, loading sequences, and interaction design',
      'Accessible navigation and a working client contact form',
    ],
  },
  {
    slug: 'ai-product-recommendation',
    title: 'AI Product Recommendation System',
    category: 'Full-stack AI commerce platform',
    summary:
      'A personalized shopping platform that uses AI with Python to deliver hybrid, behavior-aware product recommendations.',
    overview:
      'This project brings a React storefront, a secure Spring Boot commerce API, and a Python recommendation service into one connected product. It uses product information and user interactions to surface personalized, similar, trending, and popular products throughout the shopping experience.',
    caseStudyHeading: 'A connected commerce experience powered by intelligent discovery.',
    image: aiRecommendationHome,
    technologies: [
      'React',
      'Python AI',
      'Spring Boot',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'scikit-learn',
      'JWT',
    ],
    highlights: [
      'Hybrid content-based and collaborative recommendation engine',
      'Personalized recommendations weighted by recent browsing behavior',
      'Secure authentication, product, order, review, and admin APIs',
      'Responsive storefront with search, cart, profile, and product details',
    ],
  },
  {
    slug: 'foodchoice',
    title: 'FoodChoice',
    category: 'Personalized recipe platform',
    summary:
      'A full-stack recipe discovery platform where users can explore, create, save, review, and receive personalized recipe suggestions.',
    overview:
      'FoodChoice connects a React recipe experience with a Spring Boot and MySQL backend. The application supports account-based culinary profiles, recipe discovery, saved collections, user-created recipes, ratings, reviews, search, and recommendation-focused browsing.',
    caseStudyHeading: 'Making recipe discovery more personal, useful, and engaging.',
    image: foodChoiceHome,
    technologies: ['React', 'Spring Boot', 'Java', 'MySQL', 'JWT'],
    highlights: [
      'Recipe discovery with separate user-created and recommended collections',
      'Secure registration, sign-in, and profile management with JWT',
      'Create, update, save, search, and remove recipe workflows',
      'Recipe detail pages with community ratings and reviews',
    ],
  },
  {
    slug: 'sportease-system',
    title: 'SportEase System',
    category: 'Sports club management platform',
    summary:
      'A role-based sports-club system for managing facilities, bookings, trainers, schedules, events, members, and payments.',
    overview:
      'SportEase centralizes everyday sports-club operations for members, trainers, and administrators. Members can discover sports and facilities, book sessions, join events, request trainers, and track payments, while dedicated trainer and admin areas manage schedules, participants, facilities, sports, events, and club records.',
    caseStudyHeading: 'One practical system for running connected sports-club operations.',
    image: sportEaseCover,
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
    highlights: [
      'Role-based member, trainer, and administrator experiences',
      'Facility booking with schedules, trainers, events, and cost calculation',
      'Member bookings, payment status, cancellations, and event participation',
      'Admin management for members, trainers, facilities, sports, and events',
    ],
  },
  {
    slug: 'online-shoe-store',
    title: 'Online Shoe Store',
    category: 'E-commerce & inventory platform',
    summary:
      'A complete footwear shopping system with product discovery, customer accounts, cart and checkout flows, stock control, and order administration.',
    overview:
      'The Online Shoe Store connects a customer-facing footwear catalog with account, shopping-cart, checkout, and payment workflows. A dedicated administration area manages categorized products, inventory movement, customers, messages, transactions, order status, and receipts through a MySQL-backed PHP application.',
    caseStudyHeading:
      'Connecting storefront shopping with practical inventory and order operations.',
    image: onlineShoeStoreCover,
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
    highlights: [
      'Customer registration, authentication, profile, and product browsing',
      'Category-based catalog with product details, sizes, prices, and stock visibility',
      'Session-based cart, quantity controls, checkout, PayPal sandbox, and cash-on-delivery flows',
      'Admin product, inventory, customer, transaction, order-status, and receipt management',
    ],
  },
  {
    slug: 'meikhtila-city-guide',
    title: 'Meikhtila City Guide',
    category: 'Local discovery & navigation platform',
    summary:
      'A full-stack city discovery platform for exploring Meikhtila places, food, events, local history, reviews, and map-based directions.',
    overview:
      'Meikhtila City Guide brings useful local information into one accessible experience for residents and travelers. Users can browse categorized destinations, open detailed place profiles, navigate with interactive maps, explore events and city history, create accounts, and share reviews. A dedicated administration workflow supports adding, editing, organizing, and maintaining place content and images.',
    caseStudyHeading:
      'Helping people discover Meikhtila through trusted local information and interactive maps.',
    image: meikhtilaCityGuideCover,
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL', 'Leaflet', 'REST API'],
    highlights: [
      'Category-based discovery for places, food, hotels, education, healthcare, and local services',
      'Detailed destination pages with coordinates, interactive maps, directions, and reviews',
      'Account registration, login, profiles, role-aware routes, and community feedback',
      'Administrative place management with categories, image uploads, editing, and removal',
    ],
  },
  {
    slug: 'car-recommendation-system',
    title: 'Car Recommendation System',
    category: 'Intelligent vehicle discovery platform',
    summary:
      'A full-stack vehicle discovery application that recommends relevant cars from a customer’s brand, year, fuel, and transmission preferences.',
    overview:
      'The Car Recommendation System helps customers narrow a large vehicle catalog into relevant choices. Its Spring Boot service converts user preferences into weighted feature vectors and ranks available cars with cosine similarity. The React experience supports recommendation searches, vehicle details, saved cars, customer accounts, and secure JWT-based access backed by MySQL.',
    caseStudyHeading:
      'Turning practical vehicle preferences into focused, explainable recommendations.',
    image: carRecommendationCover,
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL', 'Material UI', 'JWT', 'REST API'],
    highlights: [
      'Weighted cosine-similarity recommendations using vehicle preference features',
      'Search inputs for brand, model year, fuel type, and transmission',
      'Vehicle catalog, detail views, saved-car collections, and customer profiles',
      'Spring Security authentication with JWT-protected application endpoints',
    ],
  },
  {
    slug: 'korean-food-ordering',
    title: 'Korean Food Ordering',
    category: 'Restaurant ordering & operations system',
    summary:
      'A restaurant ordering platform for exploring Korean dishes, placing table-based orders, managing customer accounts, and administering menu items and orders.',
    overview:
      'Korean Food Ordering connects a visual Korean menu with customer and restaurant operations. Customers can register, sign in, browse categorized dishes, review item details, select quantities, assign a table, place orders, view their order history, update or cancel orders, and access the payment flow. Administrative tools support menu-item and order management through a Java Servlet, JSP, JDBC, and MySQL architecture.',
    caseStudyHeading:
      'Bringing menu discovery, table ordering, and restaurant administration into one workflow.',
    image: koreanFoodOrderingCover,
    technologies: ['Java EE', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Customer registration, authentication, and session-based account workflows',
      'Categorized Korean menu with item details, pricing, and quantity selection',
      'Table-based ordering, totals, customer order history, updates, and cancellations',
      'Administrative item creation, price updates, deletion, and order management',
    ],
  },
  {
    slug: 'smart-campus-management',
    title: 'Smart Campus Management System',
    category: 'University administration platform',
    summary:
      'A centralized university administration system for managing students, faculty, departments, courses, and conflict-free academic timetables.',
    overview:
      'Smart Campus Management System gives university administrators one organized workspace for academic operations. Its executive dashboard provides live record totals and direct access to student, faculty, department, course, and timetable modules. Administrators can maintain institutional records, connect courses to departments and teachers, build class schedules, detect room or faculty double-booking, and publish approved timetables through a MySQL-backed Java web application.',
    caseStudyHeading:
      'Centralizing academic records and schedule planning in one reliable campus workspace.',
    image: smartCampusCover,
    technologies: ['Java EE', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
    highlights: [
      'Executive dashboard with live student, faculty, department, and course metrics',
      'Complete record management for students, teachers, departments, and course offerings',
      'Timetable creation with room and faculty double-booking conflict validation',
      'Draft-to-published scheduling workflow with authenticated administrator sessions',
    ],
  },
  {
    slug: 'skinalyzer',
    title: 'Skinalyzer',
    category: 'AI-powered skin analysis mobile app',
    summary:
      'A mobile skin-analysis experience combining computer vision, custom machine-learning models, personalized routines, and budget-aware product recommendations.',
    overview:
      'Skinalyzer guides users from a face-photo consultation to a structured skin report and personalized care plan. Its computer-vision pipeline detects and prepares the facial region before dedicated TensorFlow models evaluate skin type, acne category, severity, and hyperpigmentation. A FastAPI service stores analysis history and combines model results with Gemini-assisted ingredient, routine, and product recommendations tailored to the user’s budget. The React Native application presents conditions, scores, reports, product suggestions, and clear guidance in a polished mobile workflow.',
    caseStudyHeading:
      'Turning computer-vision signals into understandable, personalized skincare guidance.',
    image: skinalyzerCover,
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Python AI',
      'FastAPI',
      'TensorFlow',
      'MediaPipe',
      'OpenCV',
      'SQLAlchemy',
      'Gemini API',
    ],
    highlights: [
      'Face detection and region preprocessing with MediaPipe and OpenCV',
      'Dedicated models for skin type, acne type, severity, and hyperpigmentation',
      'Structured reports with condition scores, analysis history, and care guidance',
      'Budget-aware ingredient, routine, and skincare product recommendations',
    ],
  },
].sort(
  (firstProject, secondProject) =>
    projectOrder.indexOf(firstProject.slug) - projectOrder.indexOf(secondProject.slug),
)

export const findProject = (slug?: string) =>
  projects.find((project) => project.slug === slug)
