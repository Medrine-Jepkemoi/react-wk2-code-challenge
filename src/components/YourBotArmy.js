import { useState } from "react";
import BotCollection from "./BotCollection";

function YourBotArmy() {
  const [renderBots, setrenderBots] = useState([]);

  function renderBot(bot) {
    if (!renderBots.includes(bot)) {
      setrenderBots([...renderBots, bot]);
    }
  }
  return (
    <div>
      <h1>Your Bot Army</h1>
      <div className="card-container">
        {renderBots.map((bot) => (
          <div key={bot.id} className="card">
            <img src={bot.avatar_url} alt={bot.name} />
            <div className="card-content">
              <h3>{bot.name}</h3>
              <p>Bot Class: {bot.bot_class}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
              <button className="delete-button">X</button>
            </div>
          </div>
        ))}
      </div>
      <BotCollection onrenderBot={renderBot} />
    </div>
  );
}

export default YourBotArmy;
