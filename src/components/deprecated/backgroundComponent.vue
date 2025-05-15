<script setup>
import picoCssSimpleComponent from "./picoCssSimpleComponent.vue"

</script>


<template>
    <div class="my-div">
        <!-- <img class="my-background" width="500" height="600"> -->
        <!-- <picoCssSimpleComponent /> -->
    <div class="specific-divForh2">
        <h2 class="specific-h2">picoCSS-Component mounted</h2>
    </div>
    <table class="my-table--1">
        <thead>
            <tr>
            <th scope="col">Planet</th>
            <th scope="col">Diameter (km)</th>
            <th scope="col">Distance to Sun (AU)</th>
            <th scope="col">Orbit (days)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Mercury</th>
            <td>4,880</td>
            <td>0.39</td>
            <td>88</td>
            </tr>
            <tr>
            <th scope="row">Venus</th>
            <td>12,104</td>
            <td>0.72</td>
            <td>225</td>
            </tr>
            <tr>
            <th scope="row">Earth</th>
            <td>12,742</td>
            <td>1.00</td>
            <td>365</td>
            </tr>
            <tr>
            <th scope="row">Mars</th>
            <td>6,779</td>
            <td>1.52</td>
            <td>687</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="row">Average</th>
                <td>9,126</td>
                <td>0.91</td>
                <td>341</td>
            </tr>
        </tfoot>
    </table>

    </div>
</template>


<style scoped>
@import '../assets/picoEveryElse.css';
td {
    background-color:rgba(0, 0, 0, 0);
    border-color: black;
}
.Average-row {
    border-top-color: black;
}
tfoot > tr {
    border-top-color: rgb(208, 214, 226);
}
tfoot > tr > td {
    border-top-color: black;
}
.specific-divForh2 {
    background: white;
}
.specific-h2 {
    margin: 0;
    padding: 21px;
    background: white;
    /* linear-gradient-css */
    background: #2A7B9B;
    background: linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* linear-gradient-css-end */

}
.my-div{
    width: 100%;
    /* height: 1000px; */
    /* display: flex; */
    background: #2A7B9B;
    background: linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);

}

/* .my-background {
    background: #2A7B9B;
    background: linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);
    flex-grow: 1;
} */

</style>
