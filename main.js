const { app, globalShortcut, Tray } = require('electron');

let tray = null;
let capslockOn = false;
const capslockOffImage = './capslockoff.png';
const capslockOnImage = './capslockon.png';

app.on('ready', () => {
  tray = new Tray(capslockOffImage);
  tray.setToolTip('Capslock Listener');

  globalShortcut.register('Capslock', () => {
    if (capslockOn) {
      tray.setImage(capslockOffImage)
    } else {
      tray.setImage(capslockOnImage)
    }
    capslockOn = !capslockOn;
  });
});