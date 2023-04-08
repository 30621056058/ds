<template>
    <a-layout>
    <a-layout-sider style="width:404px !important">
        <a-menu
    id="dddddd"
    style="width: 256px"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    @click="handleClick"
  >
    <a-sub-menu key="sub1" @titleClick="titleClick">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>安装问题</template>
      <a-menu-item-group key="g1">
        <template #icon>
          <QqOutlined />
        </template>
        <template #title>常见问题</template>
        <a-menu-item key="1"><router-link to="search">安装的时候发现机器问题</router-link> </a-menu-item>
        <a-menu-item key="2">师傅一直不上门</a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group key="g2" title="紧急问题">
        <a-menu-item key="3">安装的时候发现没有支架</a-menu-item>
        <a-menu-item key="4">安装导致用户投诉</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-sub-menu key="sub2" @titleClick="titleClick">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>用户投诉</template>
      <a-menu-item key="5">工商投诉</a-menu-item>
      <a-menu-item key="6">时效投诉</a-menu-item>
      <a-sub-menu key="sub3" title="服务商导致的投诉">
        <a-menu-item key="7">安装导致的</a-menu-item>
        <a-menu-item key="8">师傅沟通不好导致的</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub4">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>退货问题</template>
      <a-menu-item key="9">拦截</a-menu-item>
      <a-menu-item key="10">拒收</a-menu-item>
      <a-menu-item key="11">拆机退货</a-menu-item>
      <a-menu-item key="12">用户自费退货</a-menu-item>
    </a-sub-menu>
  </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{padding:'0px 0px 0px 50px' }">
        <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail">
      <template #icon>
        <mail-outlined />
      </template>
      <router-link to="/first_page">
        解决方案
      </router-link>
    
    </a-menu-item>
    <a-menu-item key="app" >
      <template #icon>
        <appstore-outlined />
      </template>
      <router-link to="/upload"> 
     上传解决方案
      </router-link>
 
    </a-menu-item>
    <a-sub-menu>
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>
        <router-link to="/first_page"> 修改解决方案</router-link>
       </template>
    
    </a-sub-menu>
    <a-menu-item key="alipay">
     <router-link to="/first_page"> 讨论区</router-link>
       
     
    </a-menu-item>
  </a-menu>
      </a-layout-header>
      <a-layout-content :style="{padding:'24px 60px'}">
        <router-view></router-view>
            <div class="content_inside">
            </div>
      </a-layout-content>
      <a-layout-footer :style="{padding:'24px 60px'}">Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { useLoadMore } from 'vue-request';
const getFakeData = () => `https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo`;
import "../css/first.css"
import { defineComponent, ref, watch,reactive } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
      const { dataList, loading, loadingMore, loadMore } = useLoadMore(getFakeData, {
      listKey: 'results',
    });
    const formState = reactive({
      user: '',
      password: '',
    });
    const current = ref(['mail']);
    const selectedKeys = ref(['1']);
    const openKeys = ref(['sub1']);
    const handleClick = e => {
      console.log('click', e);
    };
     const handleFinish = values => {
      console.log(values, formState);
    };
    const handleFinishFailed = errors => {
      console.log(errors);
    };
    const titleClick = e => {
      console.log('titleClick', e);
    };
    watch(
      () => openKeys,
      val => {
        console.log('openKeys', val);
      },
    );
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
       current,
         formState,
      handleFinish,
      handleFinishFailed,
        loading,
      loadingMore,
      dataList,
      loadMore,
    };
  },
  components: {
    //  UserOutlined,
    // LockOutlined,
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
    // QuestionOutlined,
  },
});
</script>