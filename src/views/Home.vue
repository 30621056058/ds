<template>
    <div class="big">
       <div class="big_header">
      <a-input v-model:value="quertion" placeholder="请输入搜索的内容">
        <template #prefix><FileUnknownOutlined  style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    
    
      <a-button
      @click="search"
        type="primary"
        html-type="submit"
        :disabled="quertion ===''"
      >
        搜索
      </a-button>
   
            
       </div>
       <div class="main">
            <a-card title="下面显示搜索结果">
                <!-- <template #extra><a-button type="primary">搜索</a-button></template> -->
                <p  style="cursor: pointer;" v-for="item in quertionabj.obj" :key="item.id" @click="answerfn(item)">{{item.question}}</p>
    <!-- <p style="cursor: pointer;">card content</p>
    <p style="cursor: pointer;">card content</p> -->
            </a-card>
       </div>
       <div class="footer">
        <div class="footer_inside">
                <ul>
                   
                    <li v-for="item in answer.ans" :key="item.id">{{item}}</li>
                 
                    <!-- <li>安装上去</li>
                 
                    <li>无质量问题</li>
             
                    <li>无发错货</li>
                   
                    <li>与用户沟通解释</li>
                   
                    <li>解释再解释</li> -->
                </ul>
                <button @click="a">完善一下数据库</button>
        </div>
       </div>
    </div>
   
</template>

<script>
import api from "../utils/request"
import { FileUnknownOutlined } from '@ant-design/icons-vue';
// import { defineComponent, reactive } from 'vue';
import {reactive, ref} from "vue"
import "../css/home.css"
export default {
setup(){
     let  quertion = ref()
     let  quertionabj = reactive({
        obj:''
     })
     let answer =reactive({
        ans:""
     })
  function search(){
    console.log(quertion)
    api({
           url:"users/selectquertion",
           method:"get",
            params:{
                    keywords:quertion.value
                }
    }).then(res=>{
        // console.log(res)
          console.log(res.data)
                if(res.data.length==0){
                    alert("无数据")

                }
                console.log(quertionabj,11111)

                quertionabj.obj =res.data
                console.log(quertionabj,222)

    }).catch(err=>{
        console.log(err)
    })
  
  }

  function answerfn(value){
    console.log(value.question)
    api({
        url:"users/select",
        method:"get",
        params:{
            keywords:value.question
        }
    }).then(res=>{
        console.log(res)
        console.log( res.data[0].answer1)
    var a =   res.data[0].answer1.split("-")
            console.log(a)
            answer.ans = a
    }).catch(err=>{
        console.log(err)
    })
  }
    function a(){
            api({
                url:"/users/selectquertion",
                method:"get",
                params:{
                    keywords:"安装问题"
                },
            }).then((result) => {
                console.log(result.data)
                if(result.data.length==0){
                    alert("无数据")
                }
            }).catch((err) => {
                console.log(err)
            });
    }
   
    function handleFinish(){
            console.log(1)
    }
    function  handleFinishFailed(){
        console.log(2)
    }
    
    return {
        answerfn,
        answer,
        // UserOutlined,
        quertionabj,
        search,
        a,
        quertion,
        handleFinish,
        handleFinishFailed,
        FileUnknownOutlined
    }
},
components:{
        // UserOutlined
        FileUnknownOutlined
    }
}

</script>