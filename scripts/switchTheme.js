// Save Theme on Local Storage
export const switchTheme = () => {
  const toggle = document.querySelector('.toggle__checkbox');

  const defaultTheme = '#d4a736';
  const alternativeTheme = '#ef4f67';

  // Apply initial theme on page load
  const initialTheme = localStorage.getItem('theme') || defaultTheme; // Default theme
  document.documentElement.style.setProperty('--theme-color', initialTheme);
  toggle.checked = initialTheme === alternativeTheme; // Set checkbox state based on the saved theme

  toggle.addEventListener('change', (e) => {
    const theme = e.target.checked ? alternativeTheme : defaultTheme; // Concise theme assignment based on checkbox state
    localStorage.setItem('theme', theme);
    document.documentElement.style.setProperty('--theme-color', theme); // Apply the theme
  });

  // CSS should use the variable for theming
  document.documentElement.style.setProperty('--theme-color', initialTheme);
}


