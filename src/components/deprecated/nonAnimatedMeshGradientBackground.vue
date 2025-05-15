<script setup>

</script>


<template>
    <div class="main-body">
        <div class="absolute-self">
            <!-- absolute inset-0 justify-center -->
            <div class="picture-container absolute-self inset-0--self justify-center--self">
                <div class="bg-shape1 bg-teal opacity-50 bg-blur"></div>
                <div class="bg-shape2 bg-primary opacity-50 bg-blur"></div>
                <div class="bg-shape3 bg-purple opacity-50 bg-blur"></div>
            </div>
            <div class="center-div-self"><h1 class="margin-block-start-end-reset my-class-h1-newComponent">Hello World</h1></div>
            <div class="absolute-self-100"></div>
        </div>
    </div>
</template>

    
<style scoped>
.picture-container { /* works-as--intended */
    min-width: 1200px;
    background: rgba(0, 0, 0, 0.123);
    /* background: linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%); */
    /* background: linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(171, 166, 166, 1) 42%, rgba(255, 255, 255, 1) 100%); */
}
.absolute-self-100 {   /* did not work-as--intended */
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: black;
    /* filter: blur(10px);
    opacity: 0.75; */
    z-index: -10;
}
.main-body {
    height: 400px;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid black;
    overflow: hidden;
    margin-bottom: 13px;
    /* background-color: black;
    filter: blur(10px);
    opacity: 0.75;
    z-index: -10; */
}
.absolute-self {
    width: 100%;
    position: relative;
    /* top: 50px; */
    justify-content: center;
    display: inline-flex;
    flex-direction: row;
}
.justify-center--self {
    justify-content: center;
}
.inset-0--self {
    inset: 0;
}
.bg-shape1 {
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    background-color: black;
    position: relative;
    animation: one 10s 1;
}
.bg-shape2 {
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    background-color: aliceblue;
    position: relative;
    animation: two 10s 1;    
}
.bg-shape3 {
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    background-color: burlywood;
    position: relative;
    /* animation: three 10s 1; */
}


@keyframes one {
    0%{left: 0px; top: 0px;}
    25%{left: -100px; top: 70px;}
    50%{left: 20px; top: 150px;}
    75%{left: 50px; top: 100px;}
    100%{left: 0px; top: 0px;}
}

/* @keyframes two {
    0%{left: 0px; top: 0px;}
    25%{left: 50px; top: 10px;}
    50%{left: 100px; top: 50px;}
    75%{left: 50px; top: 100px;}
    100%{left: 0px; top: 0px;}
} */

.opacity-50 {
    opacity: .5;
}
.bg-blur {
    filter: blur(10px);
}
.center-div-self {
    height: 63px;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -63%);
    line-height: 63px;
    text-align: center;
}
.margin-block-start-end-reset {
    margin-top: 0;
    margin-bottom: 0;
}
/* .my-class-h1-newComponent {
    margin: 0 auto;
    top: 100px;
    text-align: center;
    position: relative;
} */


</style>

