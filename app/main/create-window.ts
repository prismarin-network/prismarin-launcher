import {
  screen,
  BrowserWindow,
  BrowserWindowConstructorOptions,
} from 'electron';
import Store from 'electron-store';

export default (windowName: string, options: BrowserWindowConstructorOptions): BrowserWindow => {
  const key = 'window-state';
  const name = `window-state-${windowName}`;
  const store = new Store({ name });
  const defaultSize = {
    width: 1600,
    height: 900,
  };
  let state = {};
  // eslint-disable-next-line prefer-const
  let win;

  const restore = () => store.get(key, defaultSize);

  const getCurrentPosition = () => {
    const position = win.getPosition();
    const size = win.getSize();
    return {
      x: position[0],
      y: position[1],
      width: 1600,
      height: 900,
    };
  };

  const windowWithinBounds = (windowState, bounds) => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    );
  };

  const resetToDefaults = () => {
    const bounds = screen.getPrimaryDisplay().bounds;
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2,
    });
  };

  const ensureVisibleOnSomeDisplay = windowState => {
    const visible = screen.getAllDisplays().some(display => {
      return windowWithinBounds(windowState, display.bounds);
    });
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }
    return windowState;
  };

  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }
    store.set(key, state);
  };

  state = ensureVisibleOnSomeDisplay(restore());

  const browserOptions: BrowserWindowConstructorOptions = {
    ...options,
    ...state,
    title: "Prismarin",
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      ...options.webPreferences,
    },
  };
  win = new BrowserWindow(browserOptions);

  win.on('close', saveState);

  return win;
};