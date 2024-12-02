export const ResultList = ({ results }) => {
    return results.map((result) => {
      return <span>{result.text}</span>
      // TODO: display results correctly
    })
}