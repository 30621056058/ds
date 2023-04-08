<template>
    <div>
       <a-input v-model:value="inputvalue.one" placeholder="关键字:例如：安装问题" />
        <a-input v-model:value="inputvalue.two" placeholder="完整的问题" />
        <a-button type="primary" :disabled="inputvalue.one=='' || inputvalue.two==''" @click="submitvalue">提交问题</a-button>
    </div>
    <div>
        <a-list
    v-if="comments.length"
    :data-source="comments"
    :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
    item-layout="horizontal">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
          </a-list-item>
    </template>
  </a-list>
   <a-comment>
    <template #avatar>
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea :rows="4" v-model:value="value" />
      </a-form-item>
      <a-form-item>
        <a-tooltip placement="topLeft">
        <template #title>
          <span>需要填写提交上面的问题</span>
        </template>
        <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit" :disabled="istrue=='' || value==''">
         提交答案
        </a-button>
      </a-tooltip>
       
      </a-form-item>
    </template>
  </a-comment>
  <div>提交答案的例子：已安装退货（无质量问题）-和用户沟通已安装的机器不支持退换-用户投诉-告知用户退货需要承担所有费用，拆机+运费+折旧费30%</div>
  <div>每一个步骤需要用：-隔开,因为我用字符串的split方法分割字符串的</div>
    </div>
  
</template>
<script>
import api from '../utils/request'
import {  reactive, ref } from 'vue';
import moment from 'moment';
import { message } from 'ant-design-vue';
export default {
    setup(){
        // const value = ref('');
        let inputvalue = reactive({
                one:"",
                two:""
        })
        let istrue = ref('')
        //问题提交
        function submitvalue(){
           
             api({
        url:"users/addvalue",
        params:{
            question:inputvalue.two,
            keywords:inputvalue.one
        }
      }).then(res=>{
        console.log(res)
         istrue.value = true
          message.success('添加成功');
      }).catch(err=>{
        console.log(err)
         message.error('请求报错,在试一次');
        return Promise.reject("请求报错")
      })
        }
        //问题提交
       const comments = ref([]);
    const submitting = ref(false);
    const value = ref('');
    const handleSubmit = () => {
      if (!value.value) {
        return;
      }
      api({
        url:"users/addvalueanswer",
        params:{
            answer1:value.value,
            keyword:inputvalue.two
        }
      }).then(res=>{
        console.log(res)
         istrue.value = true
          message.success('添加成功');
      }).catch(err=>{
        console.log(err)
         message.error('请求报错,在试一次');
        return Promise.reject("请求报错")
      })
      submitting.value = true;
      setTimeout(() => {
        submitting.value = false;
        comments.value = [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: value.value,
            datetime: moment().fromNow(),
          },
          ...comments.value,
        ];
        value.value = '';
      }, 1000);
    };
    return {
      value,
      inputvalue,
       comments,
      submitting,
      handleSubmit,
      istrue,
      submitvalue
    };
    }
}
</script>