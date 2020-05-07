<template>
    <div>
        <div class="logo">
            <i class="iconfont icon-dianying1"></i>
        </div>
        <div class="mobile">
            <input type="text" placeholder="手机号">
        </div>
        <div class="code">
            <input type="text" placeholder="验证码">
        </div>
        <div class="login">
            <span>登录</span> 
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },

    methods: {

    }
}
</script>

<style lang="scss" scoped>
.logo{
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-top: 79px;
    margin-bottom: 40px;
    i{
        font-size: 60px;
    }
} 
.mobile, .code{
    width: 100%;
    // padding: 20px 20px 0px 20px;
    input{
        outline-style: none;
        border: 0px;
        border-bottom: 1px solid rgb(228, 227, 227);
        width: 100%;
        padding: 20px;
        font-size: 16px;
    }
}
.login{
    margin: 70px 25px 0px 25px;
    background: orange;
    border-radius: 5px;
    height: 44px;
    span{
        text-align: center;
        display: block;
    }
}
</style>