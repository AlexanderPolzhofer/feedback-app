<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  let feedback = [
    {
      id: 1,
      rating: 10,
      text: "This is the feedback text für the highest possible rating.",
    },
    {
      id: 2,
      rating: 9,
      text: "Irure in nisi dolor voluptate magna Lorem aliquip esse est nulla aute do.",
    },
    {
      id: 3,
      rating: 8,
      text: "Irure in nisi dolor voluptate magna Lorem aliquip esse est nulla aute do.",
    },
  ];

  $: count = feedback.length;
  $: average = feedback.reduce((a, { rating }) => a + rating, 0) / count;

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
