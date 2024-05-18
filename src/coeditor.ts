import { whenReady } from './utils';

await whenReady();

Entry.commander.doEvent.attach(null, (command, data) => {
  console.log(command, data);
});
