<script setup lang="ts">
definePageMeta({
  redirect: (a) => {
    const { slug, secret, id, is_incontext_editing_mode } = a.query
    return `${slug}?preview=1&secret=${secret}&id=${id}&is_incontext_editing_mode=${is_incontext_editing_mode}`
  },
})
</script>
