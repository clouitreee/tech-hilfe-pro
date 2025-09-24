// public/scripts/typed.js
(() => {
  const WORDS = [
    "WLAN",
    "Windows-PC",
    "Mac",
    "Arbeitsplatz",
    "Drucker & Scanner",
    "Überwachungskamera",
    "Tablet",
    "Smartphone",
    "Smart-Home-Geräte",
    "Heimnetz"
  ];

  const SPEED_TYPE = 55;    // ms por carácter (escritura)
  const SPEED_DELETE = 35;  // ms por carácter (borrado)
  const PAUSE_WORD = 1200;  // ms de pausa con palabra completa

  const el = document.getElementById("typed-word");
  if (!el) return; // si no existe el contenedor, no hacemos nada

  // Respeto a usuarios con motion reducido: no animar
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  el.setAttribute("aria-hidden", "true");

  if (reduced) {
    el.textContent = WORDS[0];
    return;
  }

  // Intento de analítica, sin dramas si no existe
  try { window.umami?.track("Hero: Typed Start"); } catch (_) {}

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function typeWord(word) {
    // escribir
    for (const ch of word) {
      el.textContent += ch;
      await sleep(SPEED_TYPE);
    }
    await sleep(PAUSE_WORD);
    // borrar
    for (let i = word.length; i > 0; i--) {
      el.textContent = el.textContent.slice(0, i - 1);
      await sleep(SPEED_DELETE);
    }
  }

  // Pausar si la pestaña no está visible, así no gastamos CPU a lo tonto
  const waitUntilVisible = async () => {
    while (document.hidden) await sleep(250);
  };

  (async () => {
    let i = 0;
    while (true) {
      await waitUntilVisible();
      const word = WORDS[i % WORDS.length];
      await typeWord(word);
      i++;
    }
  })();
})();
