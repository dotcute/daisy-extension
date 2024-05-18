export function whenReady() {
  return new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (window.Entry?.commander?.doEvent) {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
}
