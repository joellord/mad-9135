require("./main.scss");

import { add } from "./lib";

var a = () => {
    var div = document.createElement("div").innerText = "Hello";
      document.querySelector("body").append(div);
};

a();

add(1,1);