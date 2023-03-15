<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";
  export let item;

  const dispatch = createEventDispatcher();

  const handleClick = (itemID) => {
    dispatch("delete-feedback", itemID);
  };
</script>

<Card>
  <div class="num-display">{item.rating}</div>
  <button class="close" on:click={() => handleClick(item.id)}>x</button>
  <p class="text-display">{item.text}</p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    font-size: 19px;
    text-shadow: 1.5px 1.5px 1.5px #373f43;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
    font-weight: 500;
    font-size: large;
  }
</style>
