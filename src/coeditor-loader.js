import coeditor from './coeditor?script&module';

const script = document.createElement('script');
script.src = chrome.runtime.getURL(coeditor);
script.type = 'module';
document.head.prepend(script);
