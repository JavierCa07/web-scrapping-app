import { Search } from './pages/search/search.component';
import { onSearchAction } from './actions/search.api';
import { useState } from 'react';
import { getTimeEstimationString } from './App.utils';

// App component
// This is the top-level component of the application.
export default function App() {
  const [results, setResults] = useState() as any; // state to store the results of the search
  const [timeEstimation, setTimeEstimation] = useState(""); // state to store the estimated time of the search

  // remove result list
  const resetResults = () => {
    setResults(null);
  }

  // search action: here we call the API to get the results of the search
  const searchAction = (query: string) => {
    setTimeEstimation(getTimeEstimationString(query)); // calculate time estimation
    onSearchAction(query) // call the action that makes the actual API call
    .then((response: any) => {
      setResults(response);
      setTimeEstimation(""); // reset time estimation
    });
  }
  return <Search onSearchClick={searchAction} results={results} resetResults={resetResults} timeEstimation={timeEstimation} />;
}

