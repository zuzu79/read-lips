// 👄 Read Lips GM Listener — Foundry VTT v14

Hooks.once("ready", () => {
  // Only run this listener for GMs.
  if (!game.user.isGM) return;

  console.log("👄 Read Lips GM Listener is active.");

  Hooks.on("createChatMessage", async (msg) => {
    // Only react to whispers sent to this GM.
    const whisperRecipients = msg.whisper ?? [];
    if (!whisperRecipients.includes(game.user.id)) return;

    // Read Lips macros identify themselves with the 👄 emoji.
    if (!msg.content?.includes("👄")) return;

    console.log("👂 Read Lips whisper received. Playing alert sound...");

    try {
      await AudioHelper.play({
        src: "modules/monks-tokenbar/sounds/RollRequestAlert.ogg",
        volume: 0.8,
        autoplay: true,
        loop: false
      }, true);

      console.log("🔊 Read Lips alert sound played.");
    } catch (err) {
      console.warn(
        "🔇 Read Lips GM Listener failed to play its alert sound:",
        err
      );
    }
  });
});
