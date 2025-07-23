// 🫦 Read Lips GM Listener
Hooks.once("ready", () => {
  if (!game.user.isGM) return;

  console.log("🫦 Read Lips GM Listener is active.");

  Hooks.on("createChatMessage", async (msg) => {
    if (!msg.isWhisper) return;

    // Only whisper to the GM and includes 👄
    const isToGM = msg.whisper?.some(id => id === game.user.id);
    if (!isToGM) return;

    if (msg.content?.includes("👄")) {
      try {
        await AudioHelper.play({
          src: "modules/monks-tokenbar/sounds/RollRequestAlert.ogg",
          volume: 0.8,
          autoplay: true,
          loop: false
        }, true);
      } catch (err) {
        console.warn("🔇 Failed to play Read Lips sound:", err);
      }
    }
  });
});
