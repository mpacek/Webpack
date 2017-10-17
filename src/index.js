const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer') // System is a global es6 variable
    .then(module => {
      module.default();
    });
};

document.body.appendChild(button);
