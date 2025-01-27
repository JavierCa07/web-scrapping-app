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

# Future improvements

- give status feedback (using polling, Server-sent events, websockets...)
- optimize serching time (implement some type of cache, avoid creating result files by downloading the dumps once).
- make simple adding or removing new data sources
- When clicking on the source, highlight the text in the source
- Assess the performance of NodeJS in this use case, and how its single-threaded architecture might impact the performance
- implementing fuzzy-logic (with N-gram) for searching for similar text
- add support for collapsing results (in the UI)
- as of now we are searching paper abstracts, but we could also search the whole paper
- have a historic of searches (no need for a DB, as it can be stored in the browser)
- exact match checkbox in the UI
- Hightlight the matching chunks in the abstract (in the result list)


# Example queries
- `The body mass index was first described almost 200 years ago` -> fast
- `low-grade chronic inflammation` -> not so fast
- `Overweight and obesity (OWO) are linked to dyslipidemia and low-grade chronic inflammation` -> gives a mix of 100% and 50% results
- `Severe obesity is associated with a low-grade chronic inflammation, and high-sensitivity C-reactive protein (hs-CRP) is a marker that can be used to evaluate chronic inflammation status. Metabolic bariatric surgery (MBS) is shown to decrease hs-CRP level, but long-term results are scarce, and association with weight loss outcomes is undetermined.` -> slow
- `Most cases of COVID-19 infection were second-generation human-to-human transmissions from Wuhan and were mild in severity. The clinical characteristics of COVID-19 varied. Oxyhemoglobin saturation, oxygenation index, CRP and SAA levels, and CT features were reliable parameters to evaluate the severity of COVID-19 infection. However, a few patients with mild COVID-19 disease lacked typical characteristics such as fever and changes in CT imaging features.` -> takes 3-4 minutes
