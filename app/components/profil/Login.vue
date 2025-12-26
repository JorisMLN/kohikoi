<script setup lang="ts">
    const { locale, t } = useLanguage()
</script>

<template>
   <div class="container">
    <h3> Login </h3>
      <input 
        type="search" 
        :placeholder="t('login')"
      />
      <input 
        type="search" 
        :placeholder="t('password')"
      />
      <button>{{t('validate')}}</button>
   </div>

</template>

<style scoped lang="scss">
.container {
  background-color: beige;
}
</style>