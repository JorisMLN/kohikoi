<template>
  <footer>
    <div>
      <Icon class="iconFooter" size="50" name="heroicons:bars-3" />
      <Icon class="iconFooter" size="50" name="mdi:menu" />
      <Icon class="iconFooter" size="50" name="heroicons:bars-3" />
      <Icon class="iconFooter" size="60" name="mdi:close" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  height: 30vh;
  background: url("../assets/images/footer2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  

  div{
    @include flex-center;
    height: 30%;
    width: 100%;
    color: white;

    .iconFooter{
      margin: 10px;
    }
  }
  
  @include mobile {    
    padding: 1rem;
  }
}
</style>