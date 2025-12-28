<script setup lang="ts">
interface Props {
  days: boolean[]
}

const props = defineProps<Props>()

const dayKanji = ['月', '火', '水', '木', '金', '土', '日']
const dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
</script>

<template>
  <div class="opening-days">
    <span 
      v-for="(isOpen, index) in props.days"
      :key="index"
      class="day"
      :class="{ 'day--open': isOpen, 'day--closed': !isOpen }"
    >
      {{ dayKanji[index] }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.opening-days {
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
  
  .day {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
    font-size: 0.85rem;
    font-weight: 600;
    font-family: $font-primary;
    
    &--open {
      color: $color-gold-light;
    }
    
    &--closed {
      color: $color-text-light;
      opacity: 0.4;
    }
  }
}
</style>