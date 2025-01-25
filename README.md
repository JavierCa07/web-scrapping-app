# Web Scrapping App
This web based project has the aim to be abel to help students when making their essay.
For example if you are doing your essay and you have a quote which you do not know where it is from then the idea is that you input the quote into the search bar and the web site will inform you on where that quote is from i.e from which website it is. This will facilitate the citation process and will help stuednt acheive a higher mark on their essay.

# Running the App

- Install dependencies for backend

```bash
    npm install
```

- Install dependencies for frontend

```bash
    cd frontend
    npm install
```

- Install paperscraper (python library for doing web scrapping)

```bash
    pip install paperscraper
```

- Run the backend server

```bash
    npm run dev:backend
```

- Run the frontend server

```bash
    npm run dev:frontend
```

# Troubleshooting

If you find this error:

```bash
    ModuleNotFoundError: No module named 'pkg_resources'
```

Just install the missing package `setuptools`:

```bash
    pip install setuptools
```