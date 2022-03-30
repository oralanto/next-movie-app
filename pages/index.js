import List from "../components/List";

function Home({ results }) {
  return (
    <>
      <List results={results} />
    </>
  );
}

Home.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  const search = ctx?.query?.query ?? "";
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=42b5a54d&s=harry+potter`
  );
  const data = await response.json();
  const results = data.Search ?? [];
  return {
    results,
  };
};

export default Home;
