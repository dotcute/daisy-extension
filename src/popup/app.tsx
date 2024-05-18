import { HashRouter, Route } from '@solidjs/router';
import Main from './routes/main';

export default function App() {
  return (
    <div class='w-80'>
      <HashRouter>
        <Route path='/' component={Main} />
      </HashRouter>
    </div>
  );
}
