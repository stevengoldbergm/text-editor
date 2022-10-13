const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    // Add text to the button if necessary
    
    // Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', async () => {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!'
    });
});



// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.alert('App successfully installed!');
    console.log('Thumbs Up!', 'appinstalled', event)
});
