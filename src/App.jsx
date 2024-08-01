import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const Card = ({ id, name, username, email }) => (
  <div>
    <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
    <div>
      <h2>{name}</h2>
      <p>
        {username} | {email}
      </p>
    </div>
  </div>
);

export default function App() {
  const [currentRobots, setCurrentRobots] = useState(robots);

  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   if (searchQuery === "") {
  //     setCurrentRobots(robots);
  //   } else {
  //     const query = searchQuery.toLowerCase();
  //     setCurrentRobots(
  //       robots.filter((robot) =>
  //         Object.values(robot).some(
  //           (field) =>
  //             typeof field === "string" && field.toLowerCase().match(query)
  //         )
  //       )
  //     );
  //   }
  // }, [searchQuery]);

  const search = (query) => {
    query = query.toLowerCase();
    if (query === "") {
      setCurrentRobots(robots);
    } else {
      setCurrentRobots(
        robots.filter((robot) =>
          Object.values(robot).some(
            (field) =>
              typeof field === "string" && field.toLowerCase().match(query)
          )
        )
      );
    }
  };

  return (
    <div>
      <input
        type="search"
        onChange={(e) => search(e.target.value)}
        placeholder="Search Robots"
      />
      {currentRobots.length > 0 ? (
        currentRobots.map((robot) => <Card {...robot} />)
      ) : (
        <h1>No robot found </h1>
      )}
    </div>
  );
}
