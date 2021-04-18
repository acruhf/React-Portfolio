import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark">
      <p class="navbar-brand">Austin Ruhf</p>
      <div class="navbar-nav" >
        <a class="nav-link active" href="index.html">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="portfolio.html">Portfolio</a>
        <a class="nav-link" href="contact.html">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;