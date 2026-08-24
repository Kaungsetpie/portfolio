export type ProjectInsight = {
  workflow: string[]
  tasks: string[]
  logicTitle: string
  logic: string[]
}

const projectInsights: Record<string, ProjectInsight> = {
  'developer-portfolio': {
    workflow: [
      'The loading sequence introduces the visual identity before handing control to the main application.',
      'A single scrollable homepage guides visitors through the hero, profile, skills, work, experience, services, and contact sections.',
      'Project cards read from reusable data and open a dedicated case-study route based on the project slug.',
      'Responsive layouts and navigation rules adapt the same content for desktop and mobile visitors.',
    ],
    tasks: [
      'Understand my development services and technical strengths quickly',
      'Review selected projects and open detailed case studies',
      'Explore professional experience and available services',
      'Start a project conversation through the contact section',
    ],
    logicTitle: 'How the interface logic works.',
    logic: [
      'React Router maps every project slug to one reusable detail component instead of maintaining separate pages.',
      'Intersection Observer-based reveal logic activates section animations only when content enters the viewport.',
      'A shared project data model keeps card order, technology tags, summaries, and case-study content consistent.',
      'CSS breakpoints, fluid clamp values, and flexible grids control responsive composition without duplicating markup.',
    ],
  },
  skinalyzer: {
    workflow: [
      'The user captures or selects a clear face image from the mobile consultation flow.',
      'The API decodes the upload, detects facial landmarks, crops the useful region, and normalizes it for the models.',
      'Dedicated classifiers evaluate skin type, acne type, condition severity, and hyperpigmentation.',
      'The analysis is stored, then combined with the selected budget to generate ingredients, routines, products, and safety guidance.',
    ],
    tasks: [
      'Submit a face image for a structured skin analysis',
      'Review detected conditions, scores, and severity indicators',
      'Choose a budget and receive a personalized care routine',
      'Compare suggested ingredients and products or revisit previous reports',
    ],
    logicTitle: 'How the AI pipeline works.',
    logic: [
      'MediaPipe locates facial landmarks while OpenCV prepares a consistent region of interest for inference.',
      'Images are resized and normalized before separate TensorFlow models predict skin type, acne class, severity, and pigmentation signals.',
      'The service merges model outputs into one structured condition object rather than relying on a single general prediction.',
      'Gemini-assisted recommendation logic uses those conditions and the user’s budget to produce relevant routines and product suggestions.',
    ],
  },
  'ai-product-recommendation': {
    workflow: [
      'The storefront records useful signals such as product views, searches, ratings, purchases, and recent browsing activity.',
      'The commerce API manages authenticated users, products, inventory, carts, orders, reviews, and administrative operations.',
      'A Python recommendation service converts product information and user behavior into ranked candidate products.',
      'The React storefront requests personalized, similar, trending, or popular results for the appropriate shopping context.',
    ],
    tasks: [
      'Search, filter, and explore the product catalog',
      'Receive personalized and similar-product suggestions',
      'Manage a cart, place orders, and review purchased products',
      'Maintain catalog and commerce records through administrator tools',
    ],
    logicTitle: 'How the recommendation algorithms work.',
    logic: [
      'Content-based scoring compares product attributes so items with similar categories, descriptions, and features can be discovered together.',
      'Collaborative signals identify relationships between users and products from shared interaction patterns.',
      'A hybrid rank combines content similarity, collaborative evidence, popularity, and recency-weighted browsing behavior.',
      'Fallback lists such as trending and popular products keep discovery useful when a new user has limited behavioral history.',
    ],
  },
  'smart-campus-management': {
    workflow: [
      'An administrator signs in and receives a dashboard summary of core academic records.',
      'Student, teacher, department, and course modules provide connected create, read, update, and delete workflows.',
      'Courses are assigned to departments and faculty before timetable entries are created.',
      'Each proposed schedule is validated for conflicts and can remain a draft until an administrator publishes it.',
    ],
    tasks: [
      'Maintain student and faculty records',
      'Organize departments, courses, prerequisites, and teaching assignments',
      'Create and review academic timetable entries',
      'Publish approved schedules and monitor dashboard totals',
    ],
    logicTitle: 'How scheduling and data rules work.',
    logic: [
      'Relational foreign keys connect students, teachers, courses, departments, and timetable records while preserving data consistency.',
      'Before inserting a timetable entry, conflict queries check the same day and time for an occupied room or double-booked teacher.',
      'Valid entries begin in a draft state and a separate action changes their status to published.',
      'DAO classes isolate SQL operations while Servlets coordinate validation, sessions, redirects, and JSP rendering.',
    ],
  },
  'meikhtila-city-guide': {
    workflow: [
      'Visitors browse places by category or move from the landing page into discovery and event sections.',
      'The React client requests place, category, review, and account data from the Spring Boot API.',
      'A place detail view combines local information, imagery, coordinates, reviews, and map navigation.',
      'Authorized administrators create or update place records and store associated images through dedicated management forms.',
    ],
    tasks: [
      'Discover restaurants, hotels, markets, schools, healthcare, and services',
      'Open place details and navigate using map coordinates',
      'Register, sign in, maintain a profile, and contribute reviews',
      'Manage categorized local content through administrator tools',
    ],
    logicTitle: 'How discovery and mapping work.',
    logic: [
      'Category and place relationships allow the API to return focused destination collections instead of one unstructured list.',
      'Latitude and longitude values are passed to Leaflet to position markers and support interactive geographic exploration.',
      'Role-aware routes separate public discovery, authenticated community actions, and administrative content operations.',
      'Repository and service layers handle persistence, response shaping, image paths, and review associations.',
    ],
  },
  foodchoice: {
    workflow: [
      'Users build an account profile and explore recipe collections through search and recommendation-oriented views.',
      'The React client communicates with secured Spring Boot endpoints for recipes, users, saves, ratings, and reviews.',
      'Users can publish their own recipes or save useful recipes into a personal collection.',
      'Community feedback and profile information influence how recipes are presented and revisited.',
    ],
    tasks: [
      'Search and browse recipe collections',
      'Create, edit, publish, or remove personal recipes',
      'Save recipes for later and manage a culinary profile',
      'Rate recipes and contribute written reviews',
    ],
    logicTitle: 'How personalization and recipe data work.',
    logic: [
      'JWT authentication protects account-specific actions while public recipe discovery remains accessible.',
      'Recipe ownership rules determine who can update or remove user-created content.',
      'Saved-recipe relationships build individual collections without duplicating the underlying recipe record.',
      'Ratings, reviews, profile preferences, and recipe metadata provide signals for recommendation-focused browsing.',
    ],
  },
  'sportease-system': {
    workflow: [
      'Members sign in, explore sports, facilities, trainers, and events, then select an available session.',
      'The system calculates the booking context and stores facility, schedule, trainer, cost, and payment information.',
      'Trainers review their schedules and assigned participants through a dedicated role experience.',
      'Administrators maintain members, trainers, sports, facilities, bookings, payments, and events.',
    ],
    tasks: [
      'Book facilities and request available trainers',
      'Join sports events and track participation',
      'Review booking costs, payment status, and cancellations',
      'Operate club resources through role-based management tools',
    ],
    logicTitle: 'How bookings and role rules work.',
    logic: [
      'Role checks direct members, trainers, and administrators to the operations appropriate for each account.',
      'Booking records connect facilities, time slots, trainers, members, and calculated costs in one transaction flow.',
      'Availability checks prevent resources from being offered outside their configured schedules.',
      'Status fields drive payment tracking, participation, confirmation, and cancellation behavior.',
    ],
  },
  'car-recommendation-system': {
    workflow: [
      'A signed-in user supplies a preferred brand, model year, fuel type, and transmission.',
      'The secured React client sends those preferences to the Spring Boot recommendation endpoint.',
      'The backend converts the query and stored vehicles into comparable numeric feature vectors.',
      'The highest-ranked vehicles are returned for detail viewing or saving to the user’s collection.',
    ],
    tasks: [
      'Search for vehicles using practical ownership preferences',
      'Review a ranked list of relevant cars',
      'Open detailed vehicle information',
      'Save interesting cars and manage an authenticated account',
    ],
    logicTitle: 'How cosine-similarity ranking works.',
    logic: [
      'Brand validity, normalized year, fuel type, and transmission are converted into weighted numeric features.',
      'Cosine similarity measures the direction of the preference vector against every stored vehicle vector.',
      'Vehicles with invalid or zero-value features are excluded before ranking.',
      'Positive similarity results are sorted from highest to lowest and the top ten candidates are returned.',
    ],
  },
  'online-shoe-store': {
    workflow: [
      'Customers create an account, browse footwear categories, and inspect product sizes, prices, and availability.',
      'Selected items enter a session-backed cart where quantities and stock rules are checked.',
      'Checkout creates transaction and order-detail records for PayPal sandbox or cash-on-delivery processing.',
      'Administrators manage products, inventory movement, customers, order status, transactions, and receipts.',
    ],
    tasks: [
      'Browse categorized footwear and inspect product details',
      'Add, update, remove, or empty items in the shopping cart',
      'Complete checkout with the available payment method',
      'Manage inventory and order operations from the administration area',
    ],
    logicTitle: 'How commerce and inventory rules work.',
    logic: [
      'PHP sessions preserve cart contents between requests before a transaction is committed to MySQL.',
      'Quantity checks compare requested units with current stock to prevent invalid purchases.',
      'Checkout separates the transaction header from its product-level details for reliable order reporting.',
      'Stock-in and stock-out records update availability while order statuses control confirmation, cancellation, and receipt workflows.',
    ],
  },
  'korean-food-ordering': {
    workflow: [
      'Customers register or sign in, browse Korean dishes by category, and inspect item information.',
      'They choose quantities and a table before submitting the order and calculated total.',
      'Saved orders appear in the customer’s history where permitted updates or cancellations can be made.',
      'Administrators maintain menu items, prices, categories, and restaurant orders.',
    ],
    tasks: [
      'Explore categorized Korean food and drink options',
      'Select dishes, quantities, and a restaurant table',
      'Place an order and access its payment view',
      'Review, update, or cancel orders and manage menu operations',
    ],
    logicTitle: 'How order processing works.',
    logic: [
      'Servlets read form data, validate the active customer session, and coordinate each ordering action.',
      'Item identifiers and quantities are combined to calculate total quantity and order amount before persistence.',
      'JDBC prepared statements store customers, items, categories, orders, tables, and updates in MySQL.',
      'DAO methods separate database operations from JSP views, which render the customer and administrator workflows.',
    ],
  },
}

export const getProjectInsight = (slug: string) => projectInsights[slug]
