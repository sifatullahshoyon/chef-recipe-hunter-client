import React from "react";

import { useRef } from "react";
import LazyLoad from "react-lazy-load";
import generatePDF from "react-to-pdf";

const Blog = () => {
  const targetRef = useRef();
  return (
    <section className="bg-white">
      <div className="container mx-auto px-10 py-32">
        <div ref={targetRef}>
          <article>
            <h4 className="text-black text-2xl font-bold my-5 tracking-wide">
              1. Tell us the differences between uncontrolled and controlled
              components.
            </h4>
            <p className="font-neue text-black text-lg">
              <span className="font-medium underline">Answer :- </span>
              In the context of web development, the terms "controlled
              components" and "uncontrolled components" are often used in
              relation to forms and input elements. These terms describe two
              different approaches to managing the state of form elements and
              handling user input.
            </p>
            <div>
              <h6 className="capitalize font-bold text-black text-xl my-3">
                controlled components :-
              </h6>
              <ul className="text-black font-mono list-disc pl-7">
                <li>
                  In controlled components, the state of the form elements is
                  managed by the React component's state.
                </li>
                <li>
                  Changes to the form elements are controlled by the component
                  through state updates.
                </li>
                <li>
                  The component re-renders whenever the state changes, and the
                  value of the form elements is controlled by the state.
                </li>
                <li>
                  Examples include using the useState hook in React to manage
                  the state of input elements.
                </li>
              </ul>
            </div>
            <div>
              <h6 className="capitalize font-bold text-black text-xl my-3">
                uncontrolled components :-
              </h6>
              <ul className="text-black font-mono list-disc pl-7">
                <li>
                  In uncontrolled components, the state of the form elements is
                  not managed by React state but instead by the DOM itself.
                </li>
                <li>
                  The DOM maintains the state, and you typically use refs to
                  interact with and access the current value of form elements.
                </li>
                <li>
                  Changes to the form elements are not controlled by the
                  component; instead, you react to changes using event handlers.
                </li>
                <li>
                  Uncontrolled components are sometimes used when you want to
                  integrate with non-React code or manage the form state outside
                  of React.
                </li>
              </ul>
            </div>
          </article>
          <article>
            <h4 className="text-black text-2xl font-bold my-5 tracking-wide">
              2. How to validate React props using PropTypes?.
            </h4>
            <p className="font-neue text-black text-lg">
              <span className="font-medium underline">Answer :- </span>
              In React, you can use the prop-types library to validate the props
              that are passed to your components. PropTypes allow you to define
              the types of the expected props and, in some cases, specify
              additional constraints. Here's how you can use PropTypes to
              validate React props:
            </p>
            <ul className="font-neue text-black">
              <li>PropTypes.string</li>
              <li>PropTypes.number</li>
              <li>PropTypes.object</li>
              <li>PropTypes.bool</li>
              <li>PropTypes.array</li>
              <li>PropTypes.func</li>
              <li>PropTypes.node</li>
              <li>PropTypes.element</li>
              <li>PropTypes.isRequired</li>
            </ul>
          </article>
          <article>
            <h4 className="text-black text-2xl font-bold my-5 tracking-wide">
              3. Tell us the difference between nodejs and express js.?
            </h4>
            <p className="font-neue text-black text-lg">
              <span className="font-medium underline">Answer :- </span>
              Node JS is a platform for building i/o applications that are
              server-side event-driven and made using JavaScript. Express JS is
              a framework based on Node JS which is used for building web
              applications using approaches and principles of Node JS
              event-driven architecture.
            </p>
          </article>
          <article>
            <h4 className="text-black text-2xl font-bold my-5 tracking-wide">
              4. What is a custom hook, and why will you create a custom hook??
            </h4>
            <div className="font-neue text-black text-lg">
              <span className="font-medium underline">Answer :- </span>
              In React, a custom hook is a JavaScript function that encapsulates
              reusable logic related to a specific concern or feature. Custom
              hooks are a way to extract and share stateful logic among
              components without the need for duplication. They follow a naming
              convention: their names typically start with the word "use" to
              indicate that they are hooks.
              <br />
              <h6 className="mt-2">
                Here are some key characteristics and reasons for creating
                custom hooks in React:
              </h6>
              <br />
              <p>
                <span className="underline">1. Reusable Logic :- </span>Custom
                hooks allow you to encapsulate and reuse logic that can be
                shared across multiple components. This helps in avoiding code
                duplication and makes the codebase more maintainabl
              </p>
              <p>
                <span className="underline">
                  2. Abstraction of Complex Logic :-{" "}
                </span>
                If you have complex logic that involves state management, side
                effects, or subscriptions, custom hooks provide a way to
                abstract and encapsulate that logic, making components cleaner
                and more focused
              </p>
              <p>
                <span className="underline">3. Composition of Hooks :- </span>
                Custom hooks can use other hooks, including built-in React hooks
                or other custom hooks. This allows you to compose smaller,
                focused hooks to create more complex behavior without cluttering
                the components.
              </p>
              <p>
                <span className="underline">4. Separation of Concerns :- </span>{" "}
                By creating custom hooks, you can separate concerns within your
                application. For example, you can have a custom hook for
                handling data fetching, another for managing local state, and
                yet another for handling some specific aspect of your
                application's behavior.
              </p>
              <p>
                <span className="underline">5. Improved Testing :- </span>{" "}
                Custom hooks make it easier to test and mock specific pieces of
                logic independently of the components that use them. This
                separation of concerns enhances the testability of your code.
              </p>
              <p>
                <span className="underline">
                  6. Better Code Organization :-{" "}
                </span>{" "}
                Custom hooks contribute to a more organized codebase. Logic that
                might clutter component files can be abstracted into custom
                hooks, making component files more concise and focused on
                rendering and presentation.
              </p>
            </div>
          </article>
          <button
            onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
            className="btn btn-primary my-5"
          >
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
