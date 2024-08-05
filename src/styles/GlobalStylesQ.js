import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* The :root pseudo-class targets the highest-level element in the document tree */
  &, &.light-mode {
  /* Grey */


--color-grey-0: #FFF2DB;      /* Lightest yellow-brown */
--color-grey-50: #FFE4C4;     /* Very light yellow-brown */
--color-grey-100: #FAE1C4;    /* Very light yellow-brown */
--color-grey-150: #F7D4B2;    /* Light yellow-brown */
--color-grey-200: #ECC9A8;    /* Light yellow-brown */
--color-grey-250: #E8BC9F;    /* Very light brown */
--color-grey-300: #DFB39B;    /* Lighter brown */
--color-grey-350: #D7A293;    /* Light brown */
--color-grey-400: #C59B8A;    /* Light brown */
--color-grey-450: #B88A7E;    /* Light medium brown */
--color-grey-500: #A78278;    /* Lighter medium brown */
--color-grey-550: #997269;    /* Medium brown */
--color-grey-600: #8A6A62;    /* Slightly lighter medium brown */
--color-grey-650: #7A5B54;    /* Medium dark brown */
--color-grey-700: #6C514C;    /* Medium darker brown */
--color-grey-750: #5B4442;    /* Dark brown */
--color-grey-800: #4D3938;    /* Darker brown */
--color-grey-850: #3D2C2E;    /* Very dark brown */
--color-grey-900: #2B1F20;    /* Very very dark brown */
--color-grey-950: #000000;    /* Black */

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0;
  --image-opacity: 100%;
  }
  


  &.dark-mode {
    --color-grey-0: #000000;      /* Black */
--color-grey-50: #2B1F20;     /* Very very dark brown */
--color-grey-100: #3D2C2E;    /* Very dark brown */
--color-grey-150: #4D3938;    /* Darker brown */
--color-grey-200: #5B4442;    /* Dark brown */
--color-grey-250: #6C514C;    /* Medium darker brown */
--color-grey-300: #7A5B54;    /* Medium dark brown */
--color-grey-350: #8A6A62;    /* Slightly lighter medium brown */
--color-grey-400: #997269;    /* Medium brown */
--color-grey-450: #A78278;    /* Lighter medium brown */
--color-grey-500: #B88A7E;    /* Light medium brown */
--color-grey-550: #C59B8A;    /* Light brown */
--color-grey-600: #D7A293;    /* Light brown */
--color-grey-650: #DFB39B;    /* Lighter brown */
--color-grey-700: #E8BC9F;    /* Very light brown */
--color-grey-750: #ECC9A8;    /* Light yellow-brown */
--color-grey-800: #F7D4B2;    /* Light yellow-brown */
--color-grey-850: #FAE1C4;    /* Very light yellow-brown */
--color-grey-900: #FFE4C4;    /* Very light yellow-brown */
--color-grey-950: #FFF2DB;    /* Lightest yellow-brown */

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }
  
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  background-color: var(--color-grey-100);
  max-width: 100vw;
  outline-color: var(--color-grey-700);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-grey-700);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
