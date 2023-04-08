<template>
   <div class="content_inside">
                
                <div class="content_header">
                     <a-form
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="输入问题">
        <template #prefix><QuestionOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <!-- <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item> -->
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' "
      >
        搜索
      </a-button>
    </a-form-item>
  </a-form>
                </div>
                <div class="content_main">
                    <a-list
    class="demo-loadmore-list"
    :loading="loading"
    item-layout="horizontal"
    :data-source="dataList"
  >
    <template #loadMore>
      <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <a-spin v-if="loadingMore" />
        <a-button v-else @click="loadMore">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a>edit</a>
          <a>more</a>
        </template>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name.last }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
        <div>content</div>
      </a-list-item>
    </template>
  </a-list>
                </div>
                <div class="content_footer">
                     <a-timeline>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
                </div>
   </div>
</template>
<script>
import { useLoadMore } from 'vue-request';
const getFakeData = () => `https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo`;
import "../css/first.css"
import { defineComponent, ref, watch,reactive } from 'vue';
import { QuestionOutlined} from '@ant-design/icons-vue';
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
      QuestionOutlined,
    };
  },
  components: {
    //  UserOutlined,
    // LockOutlined,
    
  QuestionOutlined
   
   
    
  },
});
</script>