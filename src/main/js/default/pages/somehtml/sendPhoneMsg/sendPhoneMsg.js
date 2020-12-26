import notification from '@system.notification';

export default {
  data: {
    title: 'World'
  },
  sendPhoneMsg(){
    notification.show({
      contentTitle: '一条JsApi测试消息',
      contentText: '打开应用 JsPage2',
      clickAction: {
        bundleName: 'com.example.jsapidemo',
        abilityName: 'com.example.jsapidemo.MainAbility',
        uri: "/",
      },
    });
  }
}
