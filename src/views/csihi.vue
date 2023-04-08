<template>
  <div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="用户名" :colon="false">
        <a-input v-model="username" />
      </a-form-item>
      <a-form-item label="密码" :colon="false">
        <a-input v-model="password" type="password" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent ,ref} from 'vue';
import { Form, FormItem, Input, Button } from 'ant-design-vue';

export default defineComponent({
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-input': Input,
    'a-button': Button,
  },
  setup() {
    const form = Form.useForm()[0];
    const username = ref('');
    const password = ref('');

    const handleSubmit = () => {
      // 处理表单提交
    };

    return {
      form,
      username,
      password,
      handleSubmit,
    };
  },
});
</script>
