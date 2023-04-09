<script>
  import { apiIP } from "../lib/stores";

  // Icons
  import lightsLogo from "/icons/lights.svg";
  import lightsLongLogo from "/icons/lights-long.svg";
  import startLogo from "/icons/start.svg";
  import trailer from "/icons/trailer.svg";

  export let key = "capslock";
  export let step = 1;
  export let color1 = "#363a4f";
  export let color2 = "#363a4f";

  const colorDef = "#363a4f";
  let color = "#363a4f";
  let currentStep = 1;

  function click() {
    fetch(`http://${apiIP}/press/${key}`).catch((err) =>
      console.log("[!] Error: ", err)
    );

    if (step == 1) {
      color = "#ed8796";
      setTimeout(() => {
        color = colorDef;
      }, 1000);
    } else if (step == 2) {
      if (currentStep == 1) {
        currentStep += 1;
        color = color1;
      } else {
        currentStep = 1;
        color = colorDef;
      }
    } else if (step == 3) {
      if (currentStep == 1) {
        currentStep += 1;
        color = color1;
      } else if (currentStep == 2) {
        currentStep += 1;
        color = color2;
      } else {
        currentStep = 1;
        color = colorDef;
      }
    }
  }
</script>

<button on:click={() => click()} style="--bg: {color}">
  {#if key == "f"}
    <img src={startLogo} alt="Start logo" />
  {:else if key == "tab"}
    <img src={lightsLogo} alt="Lights logo" />
  {:else if key == "g"}
    <img src={lightsLongLogo} alt="Long lights logo" />
  {:else if key == "t"}
    <img src={trailer} alt="Trailer logo" />
  {/if}
</button>

<style>
  button {
    background-color: var(--bg);
    border-radius: 10%;
    border: none;

    height: 30vw;
    width: 30vw;
    padding: 0;
    margin: 0;

    transition: background-color ease-in-out 0.5s;
  }
  img {
    height: 20vw;
    filter: invert(82%) sepia(16%) saturate(519%) hue-rotate(194deg)
      brightness(102%) contrast(92%);
  }
</style>
