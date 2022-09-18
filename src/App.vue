<template>
    <div id="app">
        <Header />
        <!-- 路由组件出口的地方 -->
        <router-view> </router-view>
        <!-- 根据路由判断是否显示某个组件 -->
        <Footer v-show="$route.meta.show" />
    </div>
</template>

<script>
// 引入组件
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
    mounted() {
        // 通知Vuex发送请求，获取数据，存储于仓库中
        this.$store.dispatch("categoryList");
    },
};
</script>

<style>
</style>
