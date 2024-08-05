import sqlVsNosql from "../../assets/image/blog/SQL vs NOsql.png"
import JWT from "../../assets/image/blog/JWT.png";
import JsVsNode from "../../assets/image/blog/Nodejs-vs-Javascript.webp"
import nodejs from "../../assets/image/blog/node.jpg"
import { useEffect } from "react";
const Blog = () => {
  useEffect(()=>{
    document.title = "Blog";
  }, [])
  return (
    <div className="mb-28">
      <div className="flex gap-6 justify-between mb-28">
        <img className="w-1/2" src={sqlVsNosql} alt="" />
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Difference between SQL and NoSQL
          </h3>

          <div className="mb-5">
            <h4 className="text-xl font-medium mb-2">SQL Databases:</h4>
            <p className="mb-3">
              <span className="text-lg font-medium">Structure: </span>NSQL
              databases are relational databases, meaning they use tables with
              rows and columns to store data. Each row represents a record, and
              each column represents a field in the record.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Schema: </span>SQL databases
              have a predefined schema, which means the structure of the data is
              defined before data entry and must be adhered to strictly.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Query Language: </span>They
              use SQL for defining and manipulating the data. SQL is a powerful
              language that provides extensive features for querying and
              managing databases.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Transactions: </span>SQL
              databases support ACID (Atomicity, Consistency, Isolation,
              Durability) properties, which ensure reliable transactions and
              data integrity.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-2">NoSQL Databases:</h4>
            <p className="mb-3">
              <span className="text-lg font-medium">Structure: </span>NoSQL
              databases can be document-based, key-value pairs, wide-column
              stores, or graph databases. They are designed for unstructured
              data.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Schema: </span>NoSQL
              databases are schema-less, meaning they can store data without a
              predefined structure. This allows for more flexibility and
              scalability when dealing with diverse data types.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Query Language: </span>NoSQL
              databases do not have a standard query language. Queries can vary
              depending on the type of NoSQL database. For example, MongoDB uses
              a query language similar to JSON.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Transactions: </span>NoSQL
              databases often prioritize scalability and performance over strict
              adherence to ACID properties. Many NoSQL databases use BASE
              (Basically Available, Soft state, Eventual consistency)
              principles.
            </p>
          </div>
        </div>
      </div>
      {/* What is JWT, and how does it work? */}
      <div className="flex gap-6 justify-between mb-28">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            What is JWT, and how does it work?
          </h3>
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as a JSON object. The
            information contained in the JWT is digitally signed using either a
            secret (with the HMAC algorithm) or a public/private key pair (using
            RSA or ECDSA), making it verifiable and trustworthy. A JWT consists
            of three parts: the header, the payload, and the signature. The
            header specifies the token type (JWT) and the signing algorithm. The
            payload contains claims, which are statements about an entity
            (typically the user) and additional data, such as user ID and
            expiration time. The signature is created by encoding the header and
            payload using Base64Url, combining them, and then signing them with
            a secret or private key. When a user logs in, a JWT is generated and
            returned to the client, which stores it (usually in local storage or
            a cookie). For subsequent requests to protected routes, the client
            includes the JWT in the request header. The server then verifies the
            JWT&apos;s signature to ensure its validity and extracts the user
            information from the payload to process the request. This mechanism
            allows for secure and stateless authentication, as the JWT contains
            all the necessary information about the user, eliminating the need
            for frequent database queries.
          </p>
        </div>
        <img className="w-1/2" src={JWT} alt="" />
      </div>
      {/* What is the difference between javascript and NodeJS? */}
      <div className="flex gap-6 justify-between mb-28">
        <img className="w-1/2" src={JsVsNode} alt="" />
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            What is the difference between javascript and NodeJS?
          </h3>

          <div className="mb-5">
            <p className="mb-3">
              <span className="text-lg font-medium">Execution Context: </span>
              JavaScript runs in the browser, while Node.js runs on the server.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">APIs: </span>JavaScript in
              the browser has access to the DOM, window, and other
              browser-specific APIs, whereas Node.js provides APIs for file
              system access, network communication, and other server-side
              functionalities.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Use Cases: </span>JavaScript
              is primarily used for front-end development to create interactive
              web pages, whereas Node.js is used for back-end development to
              build server-side applications and services.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Module System: </span>
              Node.js uses the CommonJS module system, where require() is used
              to import modules, while modern JavaScript (ES6) uses the import
              statement for module imports. data integrity.
            </p>
            <p className="mb-3">
              <span className="text-lg font-medium">Event Loop: </span>
              Both JavaScript and Node.js use an event-driven model, but Node.js
              extends this model to the server side, making it suitable for
              handling multiple concurrent connections efficiently.
            </p>
            <p className="mb-3">
              In summary, JavaScript is a versatile language used mainly for
              client-side scripting, while Node.js is a runtime environment that
              enables JavaScript to be used for server-side development.
            </p>
          </div>
        </div>
      </div>

      {/* How does NodeJS handle multiple requests at the same time? */}
      <div className="flex gap-6 justify-between mb-28">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            How does NodeJS handle multiple requests at the same time?
          </h3>
          <p>
            Node.js handles multiple requests simultaneously through its
            event-driven, non-blocking I/O model, which allows it to efficiently
            manage many concurrent connections using a single main thread. When
            a request is received, Node.js initiates any necessary I/O
            operations asynchronously, meaning it doesn&apos;t wait for these
            operations to complete before moving on to handle other requests.
            Instead, it registers a callback for each operation, which is
            executed once the operation finishes. The event loop, at the core of
            Node.js, continuously checks for completed operations and executes
            their callbacks, ensuring that the main thread is always free to
            handle incoming requests. Additionally, Node.js uses libuv, a
            library that provides a thread pool for handling operations that
            cannot be performed asynchronously at the OS level, like file system
            operations. This design allows Node.js to process thousands of
            requests concurrently without the overhead of creating a new thread
            for each request, making it highly efficient and scalable for
            I/O-bound tasks.
          </p>
        </div>
        <img className="w-1/2" src={nodejs} alt="" />
      </div>
    </div>
  );
};

export default Blog;