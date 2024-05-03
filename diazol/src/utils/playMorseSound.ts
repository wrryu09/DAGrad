/** 모스부호 사운드 재생 */
export const playMorseSound = (morse: string, type: number) => {
  if (typeof window !== "undefined") {
    let AudioContext = window.AudioContext;
    let ctx = new AudioContext();
    let preSound = new AudioContext();
    let dot = 1.2 / 15;

    let preTime = ctx.currentTime;
    let time = ctx.currentTime + 0.6;

    let oscillator = ctx.createOscillator();
    let preOscillator1 = preSound.createOscillator();
    preOscillator1.type = "sine";
    oscillator.type = "sine";
    let freq = 500;
    switch (type) {
      case 1:
        freq = 600;
        break;
      case 2:
        freq = 1200;
        break;
      case 3:
        freq = 100;
        break;
    }
    console.log(freq);
    console.log(type);

    preOscillator1.frequency.value = 100;
    oscillator.frequency.value = freq;

    let gainNode = ctx.createGain();
    let gainPreNode = preSound.createGain();

    gainNode.gain.setValueAtTime(0, time);

    gainPreNode.gain.setValueAtTime(1, time);
    gainPreNode.gain.setValueAtTime(0, preTime);

    morse.split("").forEach((c) => {
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

    for (let i = 0; i < 3; i++) {
      gainPreNode.gain.setValueAtTime(1, preTime);
      preTime += 0.2;
      gainPreNode.gain.setValueAtTime(0, preTime);
      preTime += 0.2;
    }
    oscillator.connect(gainNode);
    preOscillator1.connect(gainPreNode);
    gainNode.connect(ctx.destination);
    gainPreNode.connect(preSound.destination);

    oscillator.start();
    setTimeout(() => {
      preOscillator1.frequency.value = 600;
    }, 400);
    setTimeout(() => {
      preOscillator1.frequency.value = 1200;
    }, 800);
    preOscillator1.start();

    return false;
  } else {
    console.log("cannot play morse sound");
  }
};
