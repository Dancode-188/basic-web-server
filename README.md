# Basic Web Server



This is a basic web server built using Node.js and Express framework. It provides an API endpoint that returns information about the client's IP address, location, and a greeting message with the current temperature in the client's city.



## Features



- Retrieves the client's IP address from the request headers

- Uses the ipapi.co API to determine the client's city based on their IP address

- Fetches the current temperature for the client's city using the OpenWeatherMap API

- Responds with a JSON object containing the client's IP, location, and a greeting message with the temperature



## Prerequisites



Before running the server, make sure you have the following:



- Node.js installed on your machine

- An API key from OpenWeatherMap (sign up at https://openweathermap.com to get a free API key)



## Installation



1. Clone the repository:

  ```

  git clone https://github.com/Dancode-188/basic-web-server.git

  ```



2. Navigate to the project directory:

  ```

  cd basic-web-server

  ```



3. Install the dependencies:

  ```

  npm install

  ```



4. Create a `.env` file in the project root and add your OpenWeatherMap API key:

  ```

  OPENWEATHERMAP_API_KEY=YOUR_API_KEY

  ```

  Replace `YOUR_API_KEY` with your actual API key.



## Usage



1. Start the server:

  ```

  npm start

  ```



2. The server will start running on `http://localhost:3000`.



3. Make a GET request to the `/api/hello` endpoint with a `visitor_name` query parameter:

  ```

  http://localhost:3000/api/hello?visitor_name=Mark

  ```



4. The server will respond with a JSON object containing the client's IP, location, and a greeting message with the temperature:

  ```json

  {

   "client_ip": "127.0.0.1",

   "location": "New York",

   "greeting": "Hello, Mark!, the temperature is 22 degrees Celsius in New York"

  }

  ```



## Deployment



To deploy the server to a hosting platform, follow these steps:



1. Choose a hosting platform (e.g., Heroku, Vercel, AWS Free Tier) and create an account.



2. Follow the platform's deployment instructions specific to Node.js applications.



3. Set the `OPENWEATHERMAP_API_KEY` environment variable on the hosting platform with your OpenWeatherMap API key.



4. Deploy your server and access the `/api/hello` endpoint using the provided URL from the hosting platform.



## Contributing



Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.



## License



This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.



## Acknowledgements



- [Express](https://expressjs.com/) - Web framework for Node.js

- [axios](https://axios-http.com/) - Promise-based HTTP client for making API requests

- [ipapi.co](https://ipapi.co/) - IP geolocation API

- [OpenWeatherMap](https://openweathermap.org/) - Weather data API


Feel free to customize the README file based on your specific project details and requirements.