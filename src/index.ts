import iohook from "iohook";

console.log('Start app.');

declare interface Event {
    type: string
    keychar?: number
    keycode?: number
    rawcode?: number
    button?: number
    clicks?: number
    x?: number
    y?: number
}

iohook.on('keydown', (event: Event) => {
    console.log('"'+String.fromCharCode((event.rawcode as number))+'"');
});

iohook.start(false);

console.log('Start...');

