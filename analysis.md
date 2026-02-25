# Client-Side Rendering vs Server-Side Rendering

## Project Overview

This project compares **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)** using two versions of the same webpage.

Both pages use:
- The same content
- The same layout
- The same CSS styling

The only difference is **how and when the content is rendered**.

---

## Server-Side Rendering (SSR)

The SSR page (`ssr.html`) contains all main content directly in the HTML file.

- Content is visible immediately when the page loads
- JavaScript is not required for the content to appear
- The page still works if JavaScript is disabled

This simulates how a real server-side rendered page sends complete HTML to the browser.

---

## Client-Side Rendering (CSR)

The CSR page (`csr.html`) starts with an empty container.

- All main content is created using JavaScript (`csr.js`)
- The page depends on JavaScript to display content
- If JavaScript is disabled, the page remains blank

This simulates how client-side rendering works in modern web applications.

---

## Performance

### Time to First Visible Content
- **SSR:** Content appears immediately because it is already in the HTML.
- **CSR:** There is a short delay while JavaScript runs before content appears.

### Perceived Loading Speed
- **SSR:** Feels faster because users see content right away.
- **CSR:** Can feel slower due to the initial blank screen.

### JavaScript Execution Impact
- **SSR:** JavaScript is optional and only used for small interactions.
- **CSR:** JavaScript is required to build and display the entire page.

---

## SEO (Search Engine Optimisation)

- **SSR:** All content and metadata are present in the initial HTML, making it easy for search engines to read and index.
- **CSR:** Content is not present in the initial HTML, which can make SEO more difficult unless extra tools are used.

---

## User Experience

### Blank Screen vs Immediate Content
- **SSR:** Users see content immediately.
- **CSR:** Users may briefly see a blank screen.

### Dependency on JavaScript
- **SSR:** Works even if JavaScript fails or is disabled.
- **CSR:** Fully dependent on JavaScript.

### Reliability
- **SSR:** More reliable on slow devices or networks.
- **CSR:** Less reliable if JavaScript is slow or fails to load.

---

## Conclusion

Server-Side Rendering provides faster first content display, better SEO, and higher reliability.

Client-Side Rendering allows more control in the browser but depends heavily on JavaScript and can feel slower on first load.

This project demonstrates the key differences between the two approaches using the same design and data.
