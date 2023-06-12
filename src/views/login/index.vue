<template>
    <a-form :form="form" :hideRequiredMark="true" :loading="loading" @submit="handleSubmit">
        <a-form-item>
            <a-input v-decorator="['username', { rules: [{ required: true, message: '请输入用户名' }] }]" placeholder="用户名"
                prefix-icon="user" />
        </a-form-item>
        <a-form-item>
            <a-input v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]" placeholder="密码"
                prefix-icon="lock" type="password" />
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" :loading="loading" class="login-form-button">
                登录
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.login-form-button {
    width: 100%;
}
</style>