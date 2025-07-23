// 🫦 Read Lips GM Listener
Hooks.once("ready", () => {
  if (!game.user.isGM) return;

  console.log("🫦 Read Lips GM Listener is active.");

  Hooks.on("createChatMessage", async (msg) => {
    if (!msg.isWhisper) return;

    const isToGM = msg.whisper?.some(id => id === game.user.id);
    if (!isToGM) return;

    if (msg.content?.includes("👄")) {
      console.log("👂 Whisper received with 👄 emoji, attempting to play sound...");
      try {
        await AudioHelper.play({
          src: "modules/monks-tokenbar/sounds/RollRequestAlert.ogg",
          volume: 0.8,
          autoplay: true,
          loop: false
        }, true);
        console.log("🔊 Sound played!");
      } catch (err) {
        console.warn("🔇 Failed to play Read Lips sound:", err);
      }
    }
  });
});
