import router from '@system.router';
export default {
  data: {
    choosedList:[],
    jsApi: [
      [
        {
          name:"容器组件",
          list:[
            {
              name:"div",
              url:'pages/somehtml/divview/divview'
            },
            {
              name:"list",
              url:"pages/somehtml/listview/listview"
            },
            {
              name:"stack",
              url:"pages/somehtml/stackview/stackview"
            },
            {
              name:"swiper",
              url:'pages/somehtml/swiperview/swiperview'
            },
            {
              name:"tabs",
              url:"pages/somehtml/tabsview/tabsview"
            },
            {
              name:"popup",
              url:"pages/somehtml/popupview/popupview"
            },
            {
              name:"refresh",
              url:"pages/somehtml/refreshview/refreshview"
            },
            {
              name:"dialog",
              url:"pages/somehtml/dialogview/dialogview"
            },
          ]
        },
        {
          name:"基础组件",
          list:[
            {
              name:"组件集合",
              url:'pages/somehtml/atomcmpnt/atomcmpnt'
            }
          ]
        },
        {
          name:"媒体组件",
          list:[
            {
              name:"video",
              url:"pages/somehtml/videoview/videoview"
            }
          ]
        },
        {
          name:"画布组件",
          list:[
            {
              name:"canvas",
              url:''
            }
          ]
        }
      ],
      [
        {
          name:'基本功能',
          list:[
            {
              name:"页面路由",
              url:""
            },
            {
              name:"弹窗",
              url:""
            }
          ]
        },
        {
          name:'网络访问',
          list:[
            {
              name:"上传下载",
              url:""
            },
            {
              name:"数据请求",
              url:""
            },
          ]
        },
        {
          name:'文件数据',
          list:[
            {
              name:"数据存储",
              url:""
            },
            {
              name:"文件存储",
              url:""
            },
          ]
        },
        {
          name:'分部署能力',
          list:[
            {
              name:"分布式迁移",
              url:""
            },
          ]
        },
        {
          name:'系统能力',
          list:[
            {
              name:"通知消息",
              url:"pages/somehtml/sendPhoneMsg/sendPhoneMsg"
            },
            {
              name:"振动",
              url:""
            },
            {
              name:"传感器",
              url:""
            },
            {
              name:"地理位置",
              url:""
            },
            {
              name:"网络状态",
              url:""
            },
            {
              name:"设备信息",
              url:""
            },
            {
              name:"屏幕亮度",
              url:""
            },
            {
              name:"电量信息",
              url:""
            },
            {
              name:"应用管理",
              url:""
            },
            {
              name:"媒体查询",
              url:""
            },
          ]
        },
        {
          name:'跨语言 Js & Java',
          list:[
            {
              name:"FA模块（Js SDK接口）",
              url:""
            },
            {
              name:"Ability (JAVA接口)",
              url:""
            },
            {
              name:"AceInternalAbility类（Java）",
              url:""
            },
            {
              name:"AceInternalAbilityHandler接口(JAVA)",
              url:""
            },
            {
              name:"JS端返回结果格式",
              url:""
            },
            {
              name:"综合示例",
              url:""
            },
          ]
        }
      ]
    ]
  },
  //打开窗口
  showDialog(menuI,itemI){
    this.$element('dialog').show()
    this.choosedList = this.jsApi[menuI][itemI].list
  },
  //清空窗口中 list 数据
  cancelDialog(){
    this.choosedList = []
  },
  //跳转
  toOtherPage(url){
    console.log('跳转页面')
    router.push({
      uri:url
    });
  },
  onInit() {
    this.title = this.$t('strings.world');

    console.log('跳转页面')
  }
}
