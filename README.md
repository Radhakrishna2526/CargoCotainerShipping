Cargo Shipping API Overview
---------------------------

### Introduction

The Cargo Container Shipping API is designed to streamline and enhance the shipping process for cargo containers. Its primary purpose is to facilitate efficient booking, tracking, and management of container shipments for users, ranging from logistics companies to individual shippers. By providing a standardized interface for interaction, the API simplifies the complexities associated with cargo shipping and ensures a seamless experience for all stakeholders involved.

Key features of the Cargo Container Shipping API include real-time tracking of container locations, automated booking management, and comprehensive reporting capabilities. Users can create, modify, and cancel bookings with minimal effort, while also receiving timely updates on their shipments. The API is built using RESTful architecture, which promotes scalability and flexibility, allowing it to integrate smoothly with various platforms and services. It supports JSON data interchange, ensuring compatibility with most modern web applications.

The main entities involved in the Cargo Container Shipping API are Booking, User, and Container. The **Booking** entity represents a shipment request made by a user, encompassing details such as the shipment origin, destination, and container specifications. Each booking is linked to a **User**, who can be a shipper, freight forwarder, or logistics provider. The **User** entity holds vital information about the individual or organization making the booking, including contact details and preferences. Lastly, the **Container** entity encapsulates the specifics of the cargo container itself, such as size, type, and current status. Together, these entities form the backbone of the API, enabling efficient management of shipping operations while providing users with the tools they need for effective logistics management.

### API Structure

The structure of the Cargo Container Shipping API is designed with a clear separation of concerns, utilizing a modular approach that enhances maintainability and scalability. The API is primarily organized around controllers, each of which focuses on a specific aspect of the shipping process. For instance, the **BookingController** handles operations related to creating, updating, and retrieving booking details. The **AuthController** is responsible for user authentication and authorization, ensuring that only legitimate users can access sensitive operations. Meanwhile, the **ContainersController** manages container-specific functionalities, including tracking their status and updating cargo details.

Routing within the API is streamlined through the use of attributes like \[Route\] and HTTP method attributes such as \[HttpGet\], \[HttpPost\], and \[HttpPut\]. These attributes allow developers to define clear and concise endpoints for each controller's actions. For example, a route defined with \[Route("api/bookings")\] may correspond to various actions in the BookingController, where \[HttpPost\] would indicate that this route facilitates the creation of new bookings.

This routing strategy not only makes it easy to navigate the API but also enhances the readability of the codebase. Each route can be understood in the context of its associated HTTP method, providing a clear indication of what actions can be performed on the resource. Furthermore, the use of attribute routing allows for more complex URL structures, accommodating different parameters and query strings, thus providing flexibility in how requests are handled.

By adhering to this structured approach, the Cargo Container Shipping API ensures that developers can extend or modify functionalities without disrupting existing features, fostering an environment conducive to continuous improvement and innovation.

### Booking Management

The BookingController is a pivotal component of the Cargo Container Shipping API, specifically designed to manage the booking lifecycle of cargo shipments. It provides a comprehensive set of functionalities that facilitate the creation, updating, and retrieval of booking information. One of the core methods within this controller is the BookContainer method, which is responsible for processing new booking requests.

The BookContainer method accepts a parameter of type BookingRequest. This parameter encapsulates all the necessary details required to create a booking, such as origin, destination, container specifications, and user identification. By packaging these details into a single object, the method simplifies data handling and promotes cleaner code. Upon successful execution, BookContainer returns an IActionResult, which indicates the outcome of the request. This allows for user-friendly responses, such as a confirmation of booking creation or detailed error messages if something goes awry.

Error handling is a critical aspect of the booking process. The BookingController employs robust error handling mechanisms to ensure that any issues encountered during the booking process are gracefully managed. If an error occurs, such as invalid input data or a failure to communicate with the BookingService, the controller responds with appropriate HTTP status codes and messages. This approach not only aids in troubleshooting but also enhances the user experience by providing clear feedback.

The processing of bookings is delegated to the BookingService, which encapsulates the business logic related to booking management. Upon receiving a valid BookingRequest from the BookingController, the BookingService validates the input, checks for availability, and initiates the booking process. This separation of concerns allows for a cleaner architecture, where the controller handles HTTP interactions while the service manages the core business logic. By utilizing this layered approach, the Cargo Container Shipping API ensures reliable and efficient booking management, paving the way for streamlined shipping operations.

### Distance Calculation

In the Cargo Container Shipping API, the calculation of delivery times plays a crucial role in ensuring efficient logistics management. The DistanceGraph is a foundational component used for determining the distances between various shipping points, allowing the system to estimate delivery times accurately. This graph represents nodes (locations) and edges (distances) that connect these nodes, providing a structured way to evaluate the shortest and most efficient shipping routes.

The CalculateNoOfDaysToReach method is integral to this process. It leverages the DistanceGraph to compute the estimated delivery time based on several factors, including the distance between the origin and destination, the shipping method, and any additional variables such as expected delays due to customs or weather conditions. The method uses algorithms like Dijkstra's or A\* to ascertain the optimal path through the graph, ensuring that the estimated time is both realistic and reliable.

The importance of the CalculateNoOfDaysToReach method in the booking logic cannot be overstated. First, it provides users with accurate delivery estimates, allowing them to plan their logistics more effectively. By knowing when to expect their cargo, shippers can manage their inventory and schedule receiving operations accordingly. Additionally, these estimates foster trust and transparency between the service provider and the user, as accurate information is crucial in maintaining strong customer relationships.

Moreover, this method aids in operational planning for the shipping company. By understanding the expected delivery times, logistics teams can allocate resources more efficiently, optimizing routes and schedules to reduce costs and improve service levels. The ability to quickly assess distances and calculate timeframes enables the Cargo Container Shipping API to adapt to changing conditions, ensuring that it remains responsive to both user needs and market demands.

### User Authentication

The AuthController is a vital component of the Cargo Container Shipping API, dedicated to facilitating user authentication and authorization. This controller provides essential functionalities for user registration and login, ensuring that only authenticated users can access the system's features. Two primary methods within the AuthController are Register and Login, each serving distinct purposes in the user authentication process.

The Register method is responsible for creating new user accounts. It takes an input request of type RegisterRequest, which encapsulates all necessary data required for registration, such as username, password, email, and any other relevant personal information. Upon receiving this request, the Register method validates the input data to ensure that it meets the required format and constraints, such as password strength and email uniqueness. If the registration is successful, the method returns a response indicating the successful creation of the user account, typically encoded as a JSON object containing the user ID and a success message. In cases of failure, such as existing usernames or weak passwords, the method responds with appropriate error messages and HTTP status codes, providing clear feedback to the user.

The Login method, in contrast, is aimed at authenticating users who already have accounts. It accepts an input request of type LoginRequest, which includes the username and password. The Login method verifies these credentials against the stored data. If the credentials are valid, the user is authenticated, and the method generates a session token or JWT (JSON Web Token) that the user can use for subsequent requests. This token is essential for maintaining the user's session across the API. If the login attempt fails due to incorrect credentials, the method responds with an error message and a relevant HTTP status code, ensuring that users are promptly informed of any issues.

Together, these methods in the AuthController provide a robust framework for user authentication, enhancing the overall security and usability of the Cargo Container Shipping API.

### JWT Token Management

In the Cargo Container Shipping API, JSON Web Tokens (JWT) play a crucial role in managing user authentication and maintaining secure sessions. The process of generating and sending JWT tokens typically begins during the login phase. When a user successfully authenticates by providing valid credentials through the Login method, the API generates a JWT. This token encapsulates user information, such as user ID and roles, into a signed format that can be securely transmitted.

The JWT is created using a secret key known only to the server, which adds a layer of security by ensuring that the token cannot be easily forged. Once created, the token is sent back to the client as part of the response. The client, upon receiving the token, is responsible for storing it, commonly in local storage or cookies. This allows the client to include the JWT in the header of subsequent requests to the API, ensuring that the user remains authenticated throughout their session.

The SendTokenResponse method is integral to this process, as it constructs the response sent back to the client after a successful login. This method not only includes the generated JWT but can also provide additional information such as token expiration time. By including this data, users can manage their sessions more effectively, knowing when they need to re-authenticate.

Cookies also play a significant role in session management within this framework. After receiving the JWT, the client can set it as an HTTP-only cookie. This approach enhances security by preventing JavaScript access to the token, thus mitigating the risk of cross-site scripting (XSS) attacks. Moreover, cookies can be configured with attributes such as Secure, ensuring that the token is only sent over HTTPS connections, further safeguarding user data.

By combining JWT token generation with secure cookie management, the Cargo Container Shipping API establishes a robust mechanism for maintaining user sessions, which is essential for delivering a secure and seamless experience to its users.

### Container Management

The ContainersController plays a vital role in the Cargo Container Shipping API, focusing on managing various operations related to cargo containers. Among its key functionalities is the GetAvailableContainers method, which serves as a crucial endpoint for retrieving information about container availability based on specific criteria, such as port and date.

The GetAvailableContainers method accepts two primary inputs: portId and date. The portId is a string parameter that identifies the specific port for which the user seeks available containers. The date parameter, typically in a DateTime format, specifies the desired date for the container availability check. By requiring these inputs, the method allows users to pinpoint the exact conditions under which they need a container, enhancing the relevance of the data returned.

Upon execution, the GetAvailableContainers method interacts with the ContainerService, which encapsulates the underlying business logic for container management. The ContainerService processes the inputs and queries the database or other storage systems to retrieve a list of containers that are available at the specified port on the given date. This interaction is essential, as it separates the concerns of handling HTTP requests and performing business operations, leading to a more maintainable and testable codebase.

The output of the GetAvailableContainers method is typically an IActionResult that contains a collection of available containers, formatted as a JSON object. This response may include details such as container IDs, types, sizes, and current statuses, providing users with comprehensive information to make informed decisions regarding their shipping needs. If no containers are available or if there are any errors during the processing, the method returns appropriate HTTP status codes and error messages, ensuring users receive clear feedback on their requests.

In summary, the GetAvailableContainers method exemplifies how the ContainersController effectively interacts with the ContainerService to deliver vital information about container availability, thereby supporting efficient cargo shipping operations.

### Error Handling

Effective error handling is a cornerstone of the Cargo Container Shipping API, ensuring that users receive clear and informative feedback during their interactions with the system. Both the BookingController and BookingService employ structured strategies to manage exceptions, providing a consistent experience for clients while minimizing the impact of potential issues.

In the BookingController, error handling is primarily focused on validating user inputs and managing communication with the BookingService. When a request is received, the controller first checks for any anomalies, such as missing or incorrectly formatted data. If validation fails, the controller generates a response that includes a relevant HTTP status code, such as 400 Bad Request, accompanied by a descriptive error message. This approach not only informs the user of the specific issue but also encourages them to correct their submission.

When the BookingController interacts with the BookingService, it anticipates various exceptions that may arise during the booking process, such as service unavailability or database-related errors. If the BookingService encounters a problem, it throws an exception that the controller catches. In response, the controller formulates an appropriate HTTP response, such as 500 Internal Server Error, along with a message indicating that an unexpected error has occurred. Such structured handling ensures clients are aware of issues without exposing sensitive details that could compromise system security.

On the other hand, the BookingService also implements its own error management strategies. It employs try-catch blocks around critical operations, such as database transactions and external API calls. When an exception is caught, the service logs the error for further analysis and throws a user-friendly exception back to the BookingController. By isolating error handling within the service layer, the API maintains a clean separation of concerns, allowing developers to diagnose problems effectively without affecting the user experience.

Overall, the error handling mechanisms in the BookingController and BookingService work in tandem to provide robust feedback and ensure that users can navigate the API confidently, even when faced with challenges.