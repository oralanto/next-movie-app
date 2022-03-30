import List from "../components/List";

function Serie({ results }) {
  return (
    <>
      <List results={results} />
    </>
  );
}

Serie.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  const search = ctx?.query?.query ?? "";
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=42b5a54d&s=${search}&type=series`
  );
  const data = await response.json();
  const results = data.Search ?? [];
  return { results };
};

export default Serie;
