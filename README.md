
# Calendar Widget

![alt text](http://url/to/img.png]

## Overview

The **Calendar Widget** project consists of three main parts:

1. **Calendar Widget (Client)**: A React and TypeScript-based embeddable widget.
2. **Calendar Widget API**: A Node.js and TypeScript-based API server.
3. **Demo**: Contains a bundled embeddable JavaScript file to showcase the widget, along with an `index.html` file that serves as a static demo at [Calendar Widget Demo](https://koladeafeez.github.io/calender-widget/).

---

## Features

### API Endpoints

#### `/events`
| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| GET    | `/api/events`  | Fetch all events |

#### `/companies`
| Method | Endpoint                | Description                  |
|--------|--------------------------|------------------------------|
| GET    | `/api/companies`        | Fetch all companies          |
| GET    | `/api/companies/:id`    | Fetch a single company by ID |

#### `/booking`
| Method | Endpoint                          | Description                      |
|--------|-----------------------------------|----------------------------------|
| POST   | `/api/companies/:id/booking`     | Create a new booking for a company |

---

## Installation

### API

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calender-widget-api.git
   cd calender-widget-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the sproject:
   ```bash
   npm start
   ```

4. Visit the API at `http://localhost:4000` (default port).

---

### Widget

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calender-widget.git
   cd calender-widget
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

---

## Usage

### For the Client App

The **API URL** can be found in the `package.json` file under the `apiConfig` section:

```json
"apiConfig": {
  "apiUrl": "https://calender-widget.onrender.com"
}
```

> **Important:** If you plan to use an **environment variable** for the API URL, ensure it is properly set up in the consumer environment.

Example usage of the API URL in the client app:

---

### How to Use the Widget

The **index.js** file in the `demo` folder contains a bundle of the widget Below are the key steps to integrate the widget:

#### Requirements

1. A **container** element where the widget will be positioned, e.g., a `<div>`.
2. A **script tag** included in the `<body>` section with the following attributes:
   - An **id** of **`calender-Widget-Script`**.
   - A **data-company** attribute with your **company ID**.

#### Example

```html
<div id="calender-widget-root"></div>
<script 
  id="calender-Widget-Script" 
  src="https://cdn.jsdelivr.net/gh/koladeafeez/calender-widget/demo/index.js" 
  data-company="0">
</script>
```

#### Instructions

1. Replace `data-company="0"` with the actual **company ID** you want to display data for.
2. The `div` element with the **id** of `calender-widget-root` is where the widget will render its UI.
3. Ensure the script tag is placed within the `<body>` section of your HTML file.

> **Note:** The widget dynamically fetches data from the **Calendar Widget API** based on the `data-company` value provided in the script tag.

---


## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Minimalist web framework for building APIs.
- **React.js**: Frontend library for building the calendar widget.
- **TypeScript**: Strongly typed JavaScript for enhanced development.
- **SQLite**: Lightweight database for development and production.
