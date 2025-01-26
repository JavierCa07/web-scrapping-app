import { Search } from './pages/search/search.component';
import { onSearchAction } from './actions/search.api';
import { useState } from 'react';
import { getTimeEstimationString } from './App.utils';

export default function App() {
  const [results, setResults] = useState() as any; // TODO: remove this any
  const [timeEstimation, setTimeEstimation] = useState("");

  const resetResults = () => {
    setResults(null);
  }

  const searchAction = (query: string) => {
    setTimeEstimation(getTimeEstimationString(query));
    onSearchAction(query)
    .then((response: any) => { // TODO: remove this any
      setResults(response);
      setTimeEstimation("");
    });
  }
  return <Search onSearchClick={searchAction} results={results} resetResults={resetResults} timeEstimation={timeEstimation} />;
}

