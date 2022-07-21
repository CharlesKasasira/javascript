import React from "react";
import { useAuth } from "../Context/AuthContext";

function Datatypes() {
  const { presentMode, setPresentMode } = useAuth();
  return (
    <div>
      <h1 className={`font-bold text-2xl my-5 ${presentMode && "text-4xl"}`}>
        JavaScript Data Types
      </h1>

      <div className="my-10">
      <h4 className="font-bold">Today's Objectives</h4>
          <ul>
            <li>
              - Get familiar with the different data types in javaScript.
            </li>
            <li>- A little bit of How JavaScript works.</li>
            <li>- Be able to understand JavaScript Code when you see.</li>
          </ul>
      </div>

      <main>
        <p>Data types in JavaScript describe the different types or kinds of data that you will be working with and storing in variables. It’s important that you learn each of these data types because otherwise data can get stored in an improper format which will result in issues in your code later on. In this video, you will learn about five of the more common data types and how to implement them in your code</p>

        The most common Data types in JavaScript:
        <ul>
          <li>Boolean</li>
          <li>Null</li>
          <li>Undefined</li>
          <li>Number</li>
          <li>BigInt</li>
          <li>String</li>
          <li>Symbol</li>
          <li>Object</li>
        </ul>
      </main>
    </div>
  );
}

export default Datatypes;
