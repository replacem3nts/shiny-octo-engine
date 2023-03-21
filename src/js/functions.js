const colorPojo = [
  ['#e6adcf', '#d1b0b3', '#2d0060'],
  ['#ffff00', '#ff8c00', '#0024cc'],
  ['#ffbf6e', '#bf36e0', '#9161f2'],
  ['#f5f5b8', '#bf36e0', '#9161f2'],
  ['#6c2b11', '#d99e73', '#405416'],
  ['#d60036', '#ffb852', '#00d973'],
  ['#ff7399', '#f2ff26', '#6b2e63'],
  ['#730f1f', '#e0b81f', '#99b333'],
  ['#ebd999', '#e0b81f', '#0024cc'],
  ['#ffbf6e', '#56aa69', '#4d52de'],
  ['#ffe600', '#b68400', '#96bfe6'],
  ['#b85e00', '#a10b2b', '#2619d1'],
  ['#b85e00', '#de4500', '#00cf91'],
  ['#f5f5b8', '#fa9442', '#a6d40d'],
  ['#740909', '#a6d40d', '#33ff7d'],
  ['#f5f5b8', '#328e13', '#96bfe6'],
  ['#d50c42', '#19cc33', '#3400a3'],
  ['#fa9442', '#f2ff26', '#6bffb3'],
  ['#96bfe6', '#000831', '#b5d1cc'],
  ['#fa9442', '#008aa1', '#1b3644'],
  ['#ff5200', '#a6ff47', '#0d2b52'],
  ['#9e194d', '#baa600', '#96bfe6'],
  ['#0d75ff', '#b875eb', '#9cb29e'],
  ['#b319ab', '#ff5200', '#000000'],
  ['#b68400', '#505423', '#1b8e13'],
  ['#ff4dc9', '#740909', '#b5ffc2'],
  ['#d1bd19', '#ffab00', '#29bdad'],
  ['#d1bd19', '#ff5200', '#0f261f'],
  ['#c9303e', '#681916', '#a6e6db'],
  ['#d60036', '#ffff00', '#0d75ff'],
  ['#fa2b00', '#00d973', '#000831'],
  ['#d1bd19', '#94ff94', '#2619d1'],
  ['#6f0043', '#d1bd19', '#4f8fe6'],
  ['#f2ff26', '#c2612c', '#7aff00'],
  ['#b68400', '#80ffcc', '#b8b8ff'],
  ['#baa600', '#5e4017', '#417777'],
  ['#ffe600', '#b5ffc2', '#008aa1'],
  ['#e81900', '#ffab00', '#2619d1'],
  ['#ff616b', '#faed8f', '#0f261f'],
  ['#ffa6d9', '#fff59e', '#9cb29e'],
  ['#b319ab', '#ffab00', '#3400a3'],
  ['#730f1f', '#ff8c00', '#b3e8c2'],
  ['#c2612c', '#008aa1', '#3400a3'],
  ['#f2ff26', '#651300', '#b5ffc2'],
  ['#ffa6d9', '#bfabcc', '#6b2e63'],
  ['#f2ad78', '#bcd382', '#4733ff'],
  ['#ffb3f0', '#ffcfc4', '#80ffcc'],
  ['#730f1f', '#888d2a', '#b8b8ff'],
  ['#ebd999', '#a6e6db', '#2dbc94'],
  ['#e81900', '#fa9442', '#0024cc'],
  ['#a10b2b', '#2619d1', '#340059'],
  ['#b85e00', '#362304', '#000831'],
  ['#5c7287', '#7e3075', '#3400a3'],
  ['#ff4dc9', '#ebd999', '#76844e'],
  ['#b08699', '#c9303e', '#fff59e'],
  ['#681916', '#d99e73', '#0d75ff'],
  ['#0057ba', '#bfabcc', '#9c52f2'],
  ['#f2ff26', '#172713', '#6bffb3'],
  ['#ebd999', '#de4500', '#000000'],
  ['#b08699', '#e0b81f', '#0d75ff'],
  ['#ffb852', '#362304', '#5c7287'],
  ['#ff616b', '#faed8f', '#23c17c'],
  ['#fa2b00', '#ffcfc4', '#4f8fe6'],
  ['#ff4dc9', '#fff59e', '#b5d1cc'],
  ['#ff5ec4', '#4d52de', '#b5d1cc'],
  ['#a7374b', '#706934', '#0024cc'],
  ['#a10b2b', '#bcd382', '#85b857'],
  ['#ff616b', '#718600', '#94ff94'],
  ['#b5ffc2', '#94ff94', '#1b3644'],
  ['#fff59e', '#f59994', '#405416'],
  ['#b319ab', '#c2612c', '#a6e6db'],
  ['#730f1f', '#f59994', '#2619d1'],
  ['#9b5348', '#b3e8c2', '#000000'],
  ['#f5f5b8', '#2dbc94', '#008aa1'],
  ['#ebd999', '#ff8c00', '#96bfe6'],
  ['#ffbf6e', '#f2ff26', '#405416'],
  ['#ff7340', '#99b333', '#000831'],
  ['#a90636', '#8c6510', '#96bfe6'],
  ['#f59994', '#ffe600', '#abf5ed'],
  ['#ebd999', '#9b5348', '#2619d1'],
  ['#fa2b00', '#40c945', '#000000'],
  ['#730f1f', '#d99e73', '#1b8e13'],
  ['#0057ba', '#b8b8ff', '#5c7287'],
  ['#fa2b00', '#85b857', '#00592e'],
  ['#b90078', '#d99e73', '#9c52f2'],
  ['#a10b2b', '#b5d1cc', '#000000'],
  ['#e0b81f', '#ff8c00', '#c05200'],
  ['#b08699', '#d99e73', '#b5ffc2'],
  ['#ff4dc9', '#417777', '#6b2e63'],
  ['#d60036', '#00592e', '#53225c'],
  ['#5c2c45', '#ffb852', '#2619d1'],
  ['#ffb3f0', '#a6e6db', '#29bdad'],
  ['#a10b2b', '#fff59e', '#b5d1cc'],
  ['#ff616b', '#b5ffc2', '#94ff94'],
  ['#d60036', '#f2ad78', '#000831'],
  ['#a10b2b', '#888d2a', '#202d85'],
  ['#ffbf6e', '#5e4017', '#abf5ed'],
  ['#ebd999', '#ff8c00', '#bfabcc'],
  ['#b68400', '#0024cc', '#754260'],
  ['#d99e73', '#340059', '#9cb29e'],
  ['#b08699', '#c4bf33', '#b3e8c2'],
  ['#ff788c', '#ffff00', '#29bdad'],
  ['#f20000', '#ebd999', '#00d973'],
  ['#b85e00', '#f2ff26', '#ff3319'],
  ['#f20000', '#ebd999', '#9c52f2'],
  ['#f2ad78', '#ffe600', '#b5ffc2'],
  ['#f20000', '#a32100', '#4733ff'],
  ['#ffbf6e', '#651300', '#000000'],
  ['#a32100', '#ff7340', '#23c17c'],
  ['#ffab00', '#00592e', '#bfabcc'],
  ['#a93400', '#ebd999', '#505423'],
  ['#b5ffc2', '#bdf226', '#5c8a73'],
];

function buildPalletteRow() {
  this.palletteRow = document.getElementById('pallettes-row');
  this.palletteArray = colorPojo.map((color, i) => {
    this.singlePallette = document.createElement('div');
    this.singlePallette.className = 'single-pallette';
    this.singlePallette.id = i;

    this.colorOne = document.createElement('div');
    this.colorOne.className = 'pallette-single-color';
    this.colorOne.setAttribute('style', `background: ${color[0]}`);
    this.colorTwo = document.createElement('div');
    this.colorTwo.className = 'pallette-single-color';
    this.colorTwo.setAttribute('style', `background: ${color[1]}`);
    this.colorThree = document.createElement('div');
    this.colorThree.className = 'pallette-single-color';
    this.colorThree.setAttribute('style', `background: ${color[2]}`);

    this.singlePallette.appendChild(this.colorOne);
    this.singlePallette.appendChild(this.colorTwo);
    this.singlePallette.appendChild(this.colorThree);

    return this.singlePallette;
  });

  this.palletteRow.append(...this.palletteArray);
}

function handleClick(evt) {
  this.colorOne = document.getElementById('color-one');
  this.colorTwo = document.getElementById('color-two');
  this.colorThree = document.getElementById('color-three');

  const comboInd = Math.floor(Math.random() * 100);
  const combo = colorPojo[comboInd];
  this.colorOne.setAttribute('style', `background: ${combo[0]}`);
  this.colorTwo.setAttribute('style', `background: ${combo[1]}`);
  this.colorThree.setAttribute('style', `background: ${combo[2]}`);
}

function logClick() {
  this.wrapper = document.getElementById('viewer');
  this.wrapper.addEventListener('click', (evt) => handleClick(evt));
}
