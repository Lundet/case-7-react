# My Cinema: What I Have Learned

In the "My Cinema" case, I developed a full-fledged cinema booking website using React. This project involved creating a dynamic and interactive platform where users can browse current movie listings, view showtimes, and book tickets directly through the site. Below is a summary of the key features implemented and the skills I gained.

## Key Features

### 1. Interactive Movie Listings
I created a visually appealing and interactive movie listing page that displays all currently available movies along with their showtimes. Each movie has detailed information available, including descriptions,times and rooms.

### 2. User-Friendly Booking Interface
The site includes a streamlined and intuitive interface that allows users to easily select and book tickets for their desired showtimes. The booking process is designed to be simple, minimizing the number of steps required to complete a reservation.

![image](https://github.com/user-attachments/assets/8c10c25a-7e18-4b8f-839e-adf0533eaf3c)


### 3. Search Functionality
To enhance the user experience, I implemented a search feature that allows users to quickly find movies by title. This was done by filtering the list of available movies dynamically based on user input, providing immediate search results.

![image](https://github.com/user-attachments/assets/527cac6f-6834-4cbc-9dcb-bdefb9284053)

### 4. Data Integration with `useEffect`
Using the `useEffect` hook, I integrated the website with backend services to fetch real-time movie data from a JSON file (`cinema.json`). This approach allowed the application to load and display up-to-date information, such as available movies and showtimes, directly from the data source.

## Advanced Features (Extra Requirements)

### 1. Visual Seat Selection
For an enhanced booking experience, I developed a visual seat selection system where users can see the available seats in a cinema and select their preferred spots by clicking on the seat icons. This visual representation improves the user experience by providing a clear and interactive way to choose seats.

### 2. Managing Multiple Seat Bookings
The booking system is capable of handling multiple seat reservations at once. Users can select the number of seats they want to book, and the system will update the availability in real-time. Some showtimes also feature pre-booked seats, adding complexity to the seat selection process, which I managed using state management in React.

## Running the Project

To run this project locally, follow these steps:

1. **Clone the repository and navigate to it:**
   First, clone the project repository to your local machine. Open a terminal and run:
   git clone https://github.com/Lundet/case-7-react.git
   cd case-7-react

2. **Install dependencies**
Before you can run the project, you need to install the necessary dependencies. Make sure you have Node.js installed. Then, run
npm install

3. **Start the development server**
After the dependencies are installed, start the development server by running:
npm start
Once the server is running, open your web browser and navigate to http://localhost:3000 to view the application. You should now be able to browse movie listings, view showtimes, and make bookings.
