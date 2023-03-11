<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback = [];
  console.log(feedback);
</script>

<h1>FeedbackList</h1>
{#each feedback as fb (fb.id)}
  <FeedbackItem item={fb} on:delete-feedback />
{/each}
