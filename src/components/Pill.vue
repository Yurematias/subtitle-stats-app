<template>
  <div class="pill">
      <span class="name">{{name}}</span>
      <span class="amount">{{amount}}</span>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        amount: Number
    }
}
</script>

<style scoped>
    .pill {
        margin: 10px;
        background-color: crimson;
        color: #FFF;
        border-radius: 30px;
        height: 55px;
        font-size: 1.3rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .pill > .name {
        margin-left: 15px;
    }

    .pill > .amount {
        margin: 10px;
        padding: 5px;
        height: 35px;
        width: 35px;
        border-radius: 18px;
        background-color: white;
        color: crimson;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }
</style>