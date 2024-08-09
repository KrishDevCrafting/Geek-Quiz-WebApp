import React from "react";
import "./Navbar.css";
const NavbarA = () => {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div class="select">
          <div
            class="selected"
            data-default="All"
            data-one="Vaishuu"
            data-two="option-2"
            data-three="option-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              class="arrow">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
            </svg>
          </div>
          <div class="options">
            <div title="all">
              <input id="all" name="option" type="radio" checked="" />
              <label class="option" for="all" data-txt="All"></label>
            </div>
            <div title="my-Love">
              <input id="option" name="option" type="radio" />
              <label class="option" for="option-1" data-txt="vaishu"></label>
            </div>
            <div title="Name">
              <input id="option-2" name="option" type="radio" />
              <label class="option" for="option-2" data-txt="Krish"></label>
            </div>
            <div title="My-plan">
              <input id="option-3" name="option" type="radio" />
              <label class="option" for="option-3" data-txt="Bmw M5 cs Competition"></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarA;
