import React from "react";
import Quest from "./Quest";

function Remainer({ quests }) {
  return (
    <div>
      <p>
        Here is daily
        ---------------------------------------------------------------qwe
      </p>
      <ul>
        {quests.map((quest) => (
          <Quest key={quest.id} quest={quest} type={"daily"} />
        ))}
      </ul>
      <p>
        Here is weekly
        ---------------------------------------------------------------qwe
      </p>
      <ul>
        {quests.map((quest) => (
          <Quest key={quest.id} quest={quest} type={"weekly"} />
        ))}
      </ul>
      <p>
        Here is general
        ---------------------------------------------------------------qwe
      </p>
      <ul>
        {quests.map((quest) => (
          <Quest key={quest.id} quest={quest} />
        ))}
      </ul>
    </div>
  );
}

export default Remainer;
