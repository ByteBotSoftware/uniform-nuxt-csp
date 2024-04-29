<script setup lang="ts">
definePageMeta({
  redirect: (to) => {
    const { path } = to.query;
    return {
      path: (Array.isArray(path) ? path[0] : path) ?? "/",
      query: to.query,
    };
  },
});
</script>
