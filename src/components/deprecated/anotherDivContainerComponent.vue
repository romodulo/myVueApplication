<script setup>

</script>


<template>
    <div class="main-container-self">
        <div class="relative-container-self opacity--50--self"><span>Average askdljfalskjdf a;sldkjfal;skdjfakl;sjd</span></div>
    </div>

</template>


<style scoped>
.main-container-self {
    box-sizing: border-box;
    height: 400px;
    position: relative;
}
.relative-container-self {
    height: 100px;
    width: 100px;
    position: relative;
    background-color: cadetblue;
    border-radius: 5px;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: 100px;
    overflow: hidden;
}
.relative-container-self > span {
    display: inline-block;
    vertical-align: middle;
    line-height: 18px; /* <-- change this ---if neccessary */
}
.opacity--50--self {
    opacity: 50%;
}


</style>
