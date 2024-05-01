let AudioContext = window.AudioContext;
let ctx = new AudioContext();
let dot = 1.2 / 15;

export const playMorseSound = (morse: string) => {
  let time = ctx.currentTime;

  let oscillator = ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = 600;

  let gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, time);

  console.log("playMorseSound : ", morse);
  morse.split("").forEach((c) => {
    console.log(c);
    switch (c) {
      case ".":
        gainNode.gain.setValueAtTime(1, time);
        time += dot;
        gainNode.gain.setValueAtTime(0, time);
        time += dot;
        break;
      case "-":
        gainNode.gain.setValueAtTime(1, time);
        time += 3 * dot;
        gainNode.gain.setValueAtTime(0, time);
        time += dot;
        break;
      case " ":
        time += 7 * dot;
        break;
    }
  });

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();

  return false;
};
