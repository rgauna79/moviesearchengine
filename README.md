# Movie Search Engine

Movie Search Engine is a responsive React application that allows users to search for movies and view the results in real-time. The app fetches movie data from an external API and displays it in a dynamic list. The search results update as the user types, providing a seamless and interactive experience.

## Features

- **Real-Time Search**: As you type in the search input, the app fetches and displays movie results instantly.
- **Debounce Mechanism**: To prevent unnecessary API calls, the app uses a debounce function, ensuring efficient and optimized searches.
- **No Repeated Searches**: The app avoids redundant API requests by not repeating searches that have already been made.
- **Responsive Design**: The application is fully responsive, providing a smooth experience across different devices.
- **Custom Hooks**: The app leverages custom hooks to manage state and side effects efficiently.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Hooks**: The app uses React hooks such as `useRef`, `useEffect`, `useMemo`, and `useCallback` for state management and optimization.
- **Custom Hooks**: Custom hooks are used for specific logic and reusable functionality.
- **Debounce**: Implemented to delay API calls during typing, reducing the number of requests.
- **CSS**: Water.css implemented for fast design.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rgauna79/moviesearchengine.git

2. Navigate to the project directory:
   ```bash
   cd movie-search-engine
3. Install dependencies
    ```bash
    npm install
4. Start the develpment server
    ```bash
    npm run dev
5. Open your browser and go to http://localhost:5173

## Usage

- Enter a movie title in the search bar
- The app will fecth and display results as your type

## Author

- Developed by Roberto Gauna

Fell free to customize it further as needed!