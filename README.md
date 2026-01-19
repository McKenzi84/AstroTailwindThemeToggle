How the Website Knows Which Elements to Change
The website determines which elements' backgrounds (and other styles) should change through this mechanism:

Class Toggling: The JavaScript in dark-mode-switch.js adds/removes the "dark" class on the "<html>" element (document.documentElement)

CSS Selectors:

:root selector applies styles when the "dark" class is not present (light mode)
.dark selector applies styles when the "dark" class is present (dark mode)
Automatic Updates: Any element that uses:

CSS custom properties (like var(--bg-gradient))
Tailwind's dark: classes (like dark:bg-gray-900)
Will automatically update when the theme is toggled, because the CSS rules change based on the presence of the .dark class.

Inheritance: Since the body uses the gradient, all child elements inherit the font family, and you can apply the gradient or variables to other elements as needed.

You can customize the gradients and font by changing the values in the :root and .dark sections. For example, to use a different font, change 'Arial', sans-serif to 'Roboto', sans-serif or import Google Fonts.
