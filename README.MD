# MONEY TRANSFER REST API (NodeJs)

The App is Built using express framework and mongodb(with mongoose).
It is using a managed mongodb cluster in the cloud(Atlas).  
==========================

### Pre-Requiste

Node(v12.18)

## Setup

---

1.  Clone the Repo/Download Zip

2.  Go inside the project directory

    ```sh
    $ cd money-transfers
    ```

3.  Install Dependencies

    ```sh
    $ npm install
    ```

4.  Create .env file using .env.example template and update configuration values in .env file with currect DB Config(provided in the email)
    ```sh
    $ cp .env.example .env
    ```


5)  ### Populate the sample data

    Once you have applied the migration , start the app

    ```sh
    $ npm run seed
    ```
    
6)  ### Start The APP

    Once you have applied the migration , start the app. Go to [localhost:3000](localhost:3000) (port can be set in the .env file)

    ```sh
    $ npm start
    ```

## API Docs

Please refer [API DOCS](./APIDOC.MD)

In Case of any query contact,
Vaibhav Jain
[Email:thevbvjain@gmail.com](mailto:thevbvjain@gmail.com)
PhoneNumber: +919004268628
