<script setup lang="ts">
definePageMeta({
  redirect: (to) => {
    // netlify doesn't like the "path" and "slug" query params
    // and causes the "too many redirects" error
    const { path, slug: _, ...rest } = to.query;
    return {
      path: (Array.isArray(path) ? path[0] : path) ?? "/",
      query: rest,
    };
  },
});
</script>
