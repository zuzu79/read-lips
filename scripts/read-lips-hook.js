// 👄 Read Lips GM Listener — Foundry VTT v14

Hooks.once("ready", () => {
  // Only run this listener for GMs.
  if (!game.user.isGM) return;

  console.log("👄 Read Lips GM Listener is active.");

  Hooks.on("createChatMessage", async (msg) => {
    // Ignore messages that are not whispers.
    if (!msg.isWhisper) return;

    // Only react if this GM is one of the whisper recipients.
    const isToGM = msg.whisper?.some(id => id === game.user.id);
    if (!isToGM) return;

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
      console.warn("🔇 Read Lips GM Listener failed to play its alert sound:", err);
    }
  });
});
