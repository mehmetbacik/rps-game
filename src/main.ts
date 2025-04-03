import Phaser from "phaser";
import StartScene from "./scenes/StartScene";
import GameScene from "./scenes/GameScene";
import UIScene from "./scenes/UIScene";

import "./styles/main.scss";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [StartScene, GameScene, UIScene],
  parent: "game-container",
  backgroundColor: "#282c34",
};

new Phaser.Game(config);
