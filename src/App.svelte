<script>
  import FeedbackList from "./components/FeedbackList.svelte";
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

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };
</script>

<main class="container">
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
