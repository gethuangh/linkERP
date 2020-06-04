<template>
    <h2>{{ title }}</h2>
</template>

<script>
export default {
    props: ["title"]
};
</script>

<style lang='scss' scoped>
h2 {
    margin: 20px 0;
    font-size: 16px;
    color: #6666bc;
}
</style>
