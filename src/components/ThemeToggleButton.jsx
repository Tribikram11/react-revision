import { useTheme } from './ThemeContext';

function ThemeToggleButton() {
  // Consume state directly through the custom hook
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}. Click to toggle!
    </button>
  );
}

export default ThemeToggleButton