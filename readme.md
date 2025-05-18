
**PlainWeb** is a minimalist web development boilerplate designed to build fully functional web applications **without** any build tools, bundlers, or frontend frameworks.

It brings together the power of:
- **Component-based architecture** (similar to React),
- **State management**,
- **Simple client-side routing** (like React Router),
- All using **vanilla JavaScript**, **HTML**, and **CSS**.

---

## Project Structure

```

plainweb/
├── index.html          # Entry point
├── components/         # Reusable UI components
├── scripts/            # State management, router, core logic
├── css/                # Global and modular styles
├── assets/             # Images, icons, fonts, etc.

````

---

## Getting Started

To run this project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/timtjoe/plainweb.git
cd plainweb
````

### 2. Serve the Project

You can use any local server (e.g., XAMPP, Python, Live Server).

#### Option A: With Python (no setup required)

```bash
# Python 3.x
python -m http.server 3000
```

Open `http://localhost:3000` in your browser.

#### Option B: With VS Code Live Server

* Install the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* Open the `plainweb/` folder
* Right-click `index.html` and choose **"Open with Live Server"**

---

## Features

* Lightweight and fast
* Reusable components with rendering logic
* Centralized and reactive state management
* URL-based client-side routing
* No frameworks or bundlers required

---

## Contributing

Contributions are welcome and appreciated! Please follow our [Contribution Code of Conduct](CONTRIBUTING.md) and [Style Guide](STYLEGUIDE.md).

### To Contribute:

1. Fork the repository
2. Create a new branch:
   `git checkout -b feature/your-feature-name`
3. Commit your changes:
   `git commit -m "Add your feature"`
4. Push to your forked repo:
   `git push origin feature/your-feature-name`
5. Create a Pull Request

---

## Contribution Code of Conduct

> Please be respectful to other developers and maintain inclusive, constructive discussions.

* Keep pull requests small and focused.
* Use clear and meaningful commit messages.
* Follow the formatting and naming conventions defined in the [Style Guide](STYLEGUIDE.md).

See full [CONTRIBUTING.md](CONTRIBUTING.md) →

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Author

**Timothy T. Joe** – [@timtjoe](https://github.com/timtjoe)


