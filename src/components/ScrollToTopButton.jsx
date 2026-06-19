import { IconArrowUp } from './icons';

export default function ScrollToTopButton() {
  return (
    <button
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Go to top"
    >
      <IconArrowUp />
    </button>
  );
}
