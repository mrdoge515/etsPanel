<h1 align="center">
etsPanel
</h1>

<p align="center">
	<a href="https://github.com/mrdoge515/etsPanel/stargazers">
		<img alt="Stargazers" src="https://img.shields.io/github/stars/mrdoge515/etsPanel?style=for-the-badge&logo=starship&color=C9CBFF&logoColor=D9E0EE&labelColor=302D41"></a>
	<a href="https://github.com/mrdoge515/etsPanel/releases/latest">
		<img alt="Releases" src="https://img.shields.io/github/release/mrdoge515/etsPanel.svg?style=for-the-badge&logo=github&color=F2CDCD&logoColor=D9E0EE&labelColor=302D41"/></a>
	<a href="https://github.com/mrdoge515/etsPanel/issues">
		<img alt="Issues" src="https://img.shields.io/github/issues/mrdoge515/etsPanel?style=for-the-badge&logo=gitbook&color=B5E8E0&logoColor=D9E0EE&labelColor=302D41"></a>
</p>

## Overview

Control panel that allows you to click buttons through your phone. Works with ETS2 and ATS, you can also use it for other purposes, as all the program does is emulate clicks.

## Features

- control your truck through phone
- clean and easy UI

## How to run?

### Requirements

- `node ^19.8.1`
- `npm ^9.5.0`
- `python ^3.11.3`
- `pip ^22.3.1`
- `git` (optional)

### Installation

1. Clone this repo using `git clone https://github.com/mrdoge515/etsPanel` or download ZIP
2. Navigate to `server` directory and open a terminal window
3. Run command `pip install -r requirements.txt` - it should install all dependencies
4. Navigate to `client` directory and open a terminal window
5. Run command `npm install`

### Run

1. In `server` directory run command `flask --app main run --host="0.0.0.0"` (do not close the terminal window)
2. Copy the third adress and paste it in `/client/src/lib/stores.js/` in the `apiIP` const
3. In `client` directory run `npm run dev` command (use another terminal window and do not close it)
4. Now to access the panel navigate to the adress printed in the console

## Credits

Lights logo: <a href="https://www.flaticon.com/free-icons/car-light" title="car light icons">Car light icons created by Freepik - Flaticon</a> <br />
Key logo: <a href="https://www.flaticon.com/free-icons/car-key" title="car key icons">Car key icons created by Those Icons - Flaticon</a> <br />
Trailer: <a href="https://www.flaticon.com/free-icons/truck" title="truck icons">Truck icons created by Andrejs Kirma - Flaticon</a>

---

<p style="color: gray" align="center">
<a href="https://www.mrdoge.xyz">mrdoge</a> &nbsp;&middot;&nbsp;
Github <a href="https://github.com/mrdoge515">@mrdoge515</a> &nbsp;&middot;&nbsp;
Twitter <a href="https://twitter.com/mrdoge515">@mrdoge515</a>
</p>
