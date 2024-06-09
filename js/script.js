body {
  font-family: "Arial", sans-serif;
  background-color: #f7fafc; /* Gray 100 */
}
.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #1e3a8a; /* Blue 800 */
  color: white;
  transition: background-color 0.3s;
}
.fixed-header.scrolled {
  background-color: rgba(30, 58, 138, 0.9);
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  height: 40px;
  margin-right: 10px;
}
.hero {
  background-image: url('path/to/your-hero-image.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
  position: relative;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.hero-content {
  position: relative;
  z-index: 1;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.btn-primary {
  background-color: #1e3a8a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
}
.btn-primary:hover {
  background-color: #2c5282; /* Blue 600 */
}
.section {
  padding: 4rem 2rem;
  transition: background-color 0.3s, padding 0.3s;
}
.section.bg-gray-100 {
  background-color: #f7fafc; /* Gray 100 */
}
.section.bg-blue-100 {
  background-color: #ebf8ff; /* Blue 100 */
}
.section.bg-blue-200 {
  background-color: #bee3f8; /* Blue 200 */
}
.cta {
  background-color: #2c5282; /* Blue 600 */
  color: white;
  padding: 2rem;
  text-align: center;
}
.cta a {
  color: #fff;
  text-decoration: underline;
  transition: color 0.3s;
}
.cta a:hover {
  color: #e2e8f0; /* Gray 200 */
}
.footer {
  background-color: #1a202c; /* Gray 900 */
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}
.transition-all {
  transition: all 0.3s;
}
.hover-translate-y {
  transform: translateY(0);
}
.hover-translate-y:hover {
  transform: translateY(-10px);
}
.bg-pattern {
  background-image: url('path/to/your-pattern.png');
  background-size: cover;
}