/// <reference types="@entrylabs/entry/types/window" />

import '@entrylabs/entry/types/entry';

declare module '@entrylabs/entry/types/entry' {
  class EntryEvent {
    attach<T>(
      obj: T,
      fn: (command: number, data: any[]) => void,
    ): { obj: T; fn: (command: number, data: any[]) => void; destroy(): void };
  }

  interface IEntry {
    commander: {
      doEvent: EntryEvent;
      logEvent: EntryEvent;
    };
  }
}
