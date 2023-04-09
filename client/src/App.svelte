<script>
  import Button from "./components/Button.svelte";
</script>

<div>
  <Button key="f" />
  <Button key="tab" step={3} color1="#8bd5ca" color2="#a6da95" />
  <Button key="g" step={3} color1="#8aadf4" />
  <Button key="t" />
  <Button key="capslock" toggle={true} color1="#eed49f" step={0} />
  <Button key="`" />
</div>

<style>
  div {
    background-color: #24273a;
    width: 98%;
    min-height: 99%;

    display: grid;
    grid-template-columns: auto auto auto;
    gap: 4vw 4vw;

    padding: 1%;
  }
</style>
