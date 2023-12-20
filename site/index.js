import("./node_modules/wasm-game-of-life/wasm_game_of_life.js").then((js) => {
    const pre = document.getElementById("game-of-life-canvas");
    const universe = js.Universe.new();
    const renderLoop = () => {
      //debugger;
      universe.tick();
      pre.textContent = universe.render();

      requestAnimationFrame(renderLoop);
    };
    requestAnimationFrame(renderLoop);

  });