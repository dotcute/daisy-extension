import { Logo } from './logo';

export function Header() {
  return (
    <div class='flex items-center gap-x-2 px-4 mt-8'>
      <Logo class='w-[34px] h-[34px]' />
      <h1 class='font-display font-semibold text-[26px]'>Daisy</h1>
    </div>
  );
}
