// 🫦 Read Lips GM Listener
Hooks.once("ready", () => {
  if (!game.user.isGM) return;

  console.log("🫦 Read Lips GM Listener is active.");

  Hooks.on("createChatMessage", (msg) => {
    if (!msg.isWhisper) return;

    // Trigger sound on messages containing the lip-reading emoji
    if (msg.content?.includes("👄")) {
      AudioHelper.play({
        src: "modules/monks-tokenbar/sounds/RollRequestAlert.ogg",
        volume: 0.8,
        autoplay: true,
        loop: false
      }, true);
    }
  });
});
