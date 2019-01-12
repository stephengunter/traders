<template>
   <ul v-if="model">
      <li v-for="(v, k) in model.errors" :key="k" v-text="v[0]">
      </li>
   </ul>
</template>

<script>

export default {
   name: 'ErrorList',
   props: {
      model: {
         type: Object,
         default: null
      }
   },
};
</script>
