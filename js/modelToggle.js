const storageKey = 'theme-preference'
const toggleBtn = document.getElementById("theme-toggle");
const html = document.body;

const onClick = () => {
    if (theme.value === 'light-mode') {
        html.classList.remove("light-mode");
        html.classList.add("dark-mode");
        theme.value = 'dark-mode';
    } else {
        html.classList.remove("dark-mode");
        html.classList.add("light-mode");
        theme.value = 'light-mode';
    }
    setPreference();
};

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey);
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark-mode'
            : 'light-mode';
};

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
};

const reflectPreference = () => {
    document.firstElementChild
        .setAttribute('class', theme.value);

    document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', theme.value);
};

const theme = {
    value: getColorPreference(),
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    toggleBtn.addEventListener('click', onClick);
};

// sync with system changes
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark-mode' : 'light-mode';
        setPreference();
    });

// Default to light mode if not dark
if (!html.classList.contains("dark-mode")) {
    html.classList.add("light-mode");
}
