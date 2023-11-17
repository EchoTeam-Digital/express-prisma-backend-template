# Express Prisma Backend Template

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [License](#license)

## Introduction

Basic template of a typescript express backend with prisma ORM

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/EchoTeam-Digital/express-prisma-backend-template
    cd express-prisma-backend-template
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

## Configuration

1. **Environment Variables:**

    a. Create a file named `.env`.

    b. Open the `.env` file and configure any environment variables.

    ```dotenv
    PORT=5020
    DATABASE_URL='YOUR DATABASE URL'
    # Add other environment variables...
    ```

2. **Database Configuration:**

    a. Open `prisma/schema.prisma` and configure your database connection.

    ```prisma
    // prisma/schema.prisma
    generator client {
      provider = "prisma-client-js"
    }

    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
    ```

## Usage

1. **Build the Backend:**

    ```bash
    npm run build
    ```

2. **Run the Server:**

    ```bash
    npm start
    ```

    The server will be accessible at [http://localhost:5020](http://localhost:5020).

## License
  This project is licensed under the MIT License.
