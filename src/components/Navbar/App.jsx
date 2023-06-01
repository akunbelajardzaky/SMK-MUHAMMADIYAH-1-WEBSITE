"use client";

import { Button } from "@sanity/ui";
import React from "react";

function App() {
  return (
    <div class="navbar bg-white">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white font-semibold rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl">
          SMK Muhammadiyah 1
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/tentang-kami">Tentang kami</a>
          </li>
          <li>
            <a href="/akademik">Akademik</a>
          </li>
          <li>
            <a href="/prestasi">Prestasi</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
