<script setup lang="ts">
definePageMeta({
  redirect: (to) => {
    const { path, slug: _, ...rest } = to.query;
    return {
      path: (Array.isArray(path) ? path[0] : path) ?? "/",
      query: rest,
    };
  },
});
</script>
