<template>
    <div>
     <span @click="btn">登录</span>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        
    },
    methods:{
        btn(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="less">

</style>