<template>
  <footer>
    <div>
      <Icon class="iconFooter" size="50" name="healthicons:ui-user-profile" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  height: 20vh;
  background: url("../assets/images/footer2short.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  div{
    @include flex-center;
    height: 30%;
    width: 100%;
    color: white;

    .iconFooter{
      margin-bottom: 20px;
    }
  }
  
  @include mobile {    
    padding: 1rem;
  }
}
</style>