const Card = ({ Title, Poster, Year, imdbID }) => {
  const placeholderImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ";

  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <div className="card-body d-flex justify-content-between">
        <div className="d-flex align-items-start">
          <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank">
            <img
              className="mr-2 rounded"
              src={Poster === "N/A" ? placeholderImg : Poster}
              alt="placeholder"
              width="100"
              height="130"
            />

            <span className="title" style={{ fontSize: "20px" }}>
              {Title}
            </span>
          </a>
        </div>
        <p style={{ fontSize: "20px", color: "#9c88ff" }}>{Year}</p>
      </div>
    </div>
  );
};

export default Card;
