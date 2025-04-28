<script setup>

</script>

<template>
  <h2>mvpComponent Mounted</h2>
  <section>
    <aside>
      <img src="https://plus.unsplash.com/premium_vector-1713913589831-611a54b0641c?q=80&w=1277&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="computers" height="150">
      <h3>HTML and You're Done</h3>
      <p>
        MVP styles your root HTML elements, so you don't need to learn a new CSS framework or naming conventions.
      </p>
      <p>
        <a href="#" target="">
          <em>HTML Guide</em>
        </a>
      </p>
    </aside>
    <aside>
      <img src="https://plus.unsplash.com/premium_vector-1731582098973-2d2c341b7791?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="computers" height="150">
      <h3>Mobile-friendly UI</h3>
      <p>
      Mobile-friendly UIMVP is designed to look great on all browsers and devices out of the box for rapid prototyping.
      </p>
      <p>
      It's like an amped up CSS reset that you can toss into any project to get decent styling.
      </p>
    </aside>
    <aside>
      <img src="https://images.unsplash.com/vector-1738934022191-816477188009?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="computers" height="150">
      <h3>MIT License</h3>
      <p>
      Mobile-friendly UIMVP is designed to look great on all browsers and devices out of the box for rapid prototyping.
      </p>
      <p>
      It's like an amped up CSS reset that you can toss into any project to get decent styling.
      </p>
    </aside>
  </section>
</template>

<style scoped>
/* Headers */
article header,
div header,
main header {
  padding-top: 0;
}

header {
  text-align: var(--justify-important);
}

header a b,
header a em,
header a i,
header a strong {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

header nav img {
  margin: 1rem 0;
}

section header {
  padding-top: 0;
  width: 100%;
}

/* Nav */
nav {
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 7rem;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin: 0 0.5rem;
  position: relative;
  text-align: left;
}

/* Nav Dropdown */
nav ul li:hover ul {
  display: block;
}

nav ul li ul {
  background: var(--color-bg);
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow) var(--color-shadow);
  display: none;
  height: auto;
  left: -2px;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 1.7rem;
  white-space: nowrap;
  width: auto;
  z-index: 1;
}

nav ul li ul::before {
  /* fill gap above to make mousing over them easier */
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -0.5rem;
  height: 0.5rem;
}

nav ul li ul li,
nav ul li ul li a {
  display: block;
}

/* Nav for Mobile */
@media (max-width: 768px) {
  nav {
    flex-wrap: wrap;
  }

  nav ul li {
    width: calc(100% - 1em);
  }

  nav ul li ul {
    border: none;
    box-shadow: none;
    display: block;
    position: static;
  }
}

/* Typography */
code,
samp {
  background-color: var(--color-accent);
  border-radius: var(--border-radius);
  color: var(--color-text);
  display: inline-block;
  margin: 0 0.1rem;
  padding: 0 0.5rem;
}

details {
  margin: 1.3rem 0;
}

details summary {
  font-weight: bold;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: var(--line-height);
  text-wrap: balance;
}

mark {
  padding: 0.1rem;
}

ol li,
ul li {
  padding: 0.2rem 0;
}

p {
  margin: 0.75rem 0;
  padding: 0;
  width: 100%;
}

pre {
  margin: 1rem 0;
  max-width: var(--width-card-wide);
  padding: 1rem 0;
}

pre code,
pre samp {
  display: block;
  max-width: var(--width-card-wide);
  padding: 0.5rem 2rem;
  white-space: pre-wrap;
}

small {
  color: var(--color-text-secondary);
}

sup {
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  color: var(--color-bg);
  font-size: xx-small;
  font-weight: bold;
  margin: 0.2rem;
  padding: 0.2rem 0.3rem;
  position: relative;
  top: -2px;
}

/* Links */
a {
  color: var(--color-link);
  display: inline-block;
  font-weight: bold;
  text-decoration: underline;
}

a:hover {
  filter: brightness(var(--hover-brightness));
}

a:active {
  filter: brightness(var(--active-brightness));
}

a b,
a em,
a i,
a strong,
button,
input[type="submit"] {
  border-radius: var(--border-radius);
  display: inline-block;
  font-size: medium;
  font-weight: bold;
  line-height: var(--line-height);
  margin: 0.5rem 0;
  padding: 1rem 2rem;
}

button,
input[type="submit"] {
  font-family: var(--font-family);
}

button:hover,
input[type="submit"]:hover {
  cursor: pointer;
  filter: brightness(var(--hover-brightness));
}

button:active,
input[type="submit"]:active {
  filter: brightness(var(--active-brightness));
}

a b,
a strong,
button,
input[type="submit"] {
  background-color: var(--color-link);
  border: 2px solid var(--color-link);
  color: var(--color-bg);
}

a em,
a i {
  border: 2px solid var(--color-link);
  border-radius: var(--border-radius);
  color: var(--color-link);
  display: inline-block;
  padding: 1rem 2rem;
}

article aside a {
  color: var(--color-secondary);
}

/* Images */
figure {
  margin: 0;
  padding: 0;
}

figure img {
  max-width: 100%;
}

figure figcaption {
  color: var(--color-text-secondary);
}

/* Forms */
button:disabled,
input:disabled {
  background: var(--color-bg-secondary);
  border-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  cursor: not-allowed;
}

button[disabled]:hover,
input[type="submit"][disabled]:hover {
  filter: none;
}

form {
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow) var(--color-shadow);
  display: block;
  max-width: var(--width-card-wide);
  min-width: var(--width-card);
  padding: 1.5rem;
  text-align: var(--justify-normal);
}

form header {
  margin: 1.5rem 0;
  padding: 1.5rem 0;
}

input,
label,
select,
textarea {
  display: block;
  font-size: inherit;
  max-width: var(--width-card-wide);
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  display: inline-block;
  font-weight: normal;
  position: relative;
  top: 1px;
}

input[type="range"] {
  padding: 0.4rem 0;
}

input,
select,
textarea {
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  padding: 0.4rem 0.8rem;
}

input[type="text"],
input[type="password"],
input[type="email"],
textarea {
  width: calc(100% - 1.6rem);
}

input[readonly],
textarea[readonly] {
  background-color: var(--color-bg-secondary);
}

label {
  font-weight: bold;
  margin-bottom: 0.2rem;
}

/* Popups */
dialog {
  max-width: 90%;
  max-height: 85dvh;
  margin: auto;
  padding-block: 0;
  padding-inline: 20px;
  border: 1px solid var(--color-bg-secondary);
  border-radius: 0.5rem;
  overscroll-behavior: contain;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  scrollbar-color: transparent transparent;
  animation: bottom-to-top 0.25s ease-in-out forwards;
}

dialog::-webkit-scrollbar {
  width: 0;
  display: none;
}

dialog::-webkit-scrollbar-track {
  background: transparent;
}

dialog::-webkit-scrollbar-thumb {
  background-color: transparent;
}

@media (min-width: 650px) {
  dialog {
    max-width: 39rem;
  }
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

@keyframes bottom-to-top {
  0% {
    opacity: 0;
    transform: translateY(10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

dialog hr {
  margin-block: 1rem;
}

/* Tables */
table {
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  border-spacing: 0;
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
  padding: 0;
  white-space: nowrap;
}

table td,
table th,
table tr {
  padding: 0.4rem 0.8rem;
  text-align: var(--justify-important);
}

table thead {
  background-color: var(--color-table);
  border-collapse: collapse;
  border-radius: var(--border-radius);
  color: var(--color-bg);
  margin: 0;
  padding: 0;
}

table thead tr:first-child th:first-child {
  border-top-left-radius: var(--border-radius);
}

table thead tr:first-child th:last-child {
  border-top-right-radius: var(--border-radius);
}

table thead th:first-child,
table tr td:first-child {
  text-align: var(--justify-normal);
}

table tr:nth-child(even) {
  background-color: var(--color-accent);
}

/* Quotes */
blockquote {
  display: block;
  font-size: x-large;
  line-height: var(--line-height);
  margin: 1rem auto;
  max-width: var(--width-card-medium);
  padding: 1.5rem 1rem;
  text-align: var(--justify-important);
}

blockquote footer {
  color: var(--color-text-secondary);
  display: block;
  font-size: small;
  line-height: var(--line-height);
  padding: 1.5rem 0;
}

/* Scrollbars */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-scrollbar) transparent;
}

*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--color-scrollbar);
  border-radius: 10px;
}
</style>
