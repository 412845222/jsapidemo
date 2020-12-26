export default {
  data: {
    title: 'World',
    imgarr:[
      {src: '/common/img/gif/skeleton-run_00.png'},
      {src: '/common/img/gif/skeleton-run_01.png'},
      {src: '/common/img/gif/skeleton-run_02.png'},
      {src: '/common/img/gif/skeleton-run_03.png'},
      {src: '/common/img/gif/skeleton-run_04.png'},
      {src: '/common/img/gif/skeleton-run_05.png'},
      {src: '/common/img/gif/skeleton-run_06.png'},
      {src: '/common/img/gif/skeleton-run_07.png'},
      {src: '/common/img/gif/skeleton-run_08.png'},
      {src: '/common/img/gif/skeleton-run_09.png'},
      {src: '/common/img/gif/skeleton-run_10.png'},
      {src: '/common/img/gif/skeleton-run_11.png'},
      {src: '/common/img/gif/skeleton-run_12.png'},
      {src: '/common/img/gif/skeleton-run_13.png'},
      {src: '/common/img/gif/skeleton-run_14.png'},
      {src: '/common/img/gif/skeleton-run_15.png'},
      {src: '/common/img/gif/skeleton-run_16.png'},
      {src: '/common/img/gif/skeleton-run_17.png'},
      {src: '/common/img/gif/skeleton-run_18.png'},
      {src: '/common/img/gif/skeleton-run_19.png'},
      {src: '/common/img/gif/skeleton-run_20.png'},
      {src: '/common/img/gif/skeleton-run_21.png'}
    ],
    lineData: [
      {
        strokeColor: '#0081ff',
        fillColor: '#cce5ff',
        data: [763, 550, 551, 554, 731, 654, 525, 696, 595, 628, 791, 505, 613, 575, 475, 553, 491, 680, 657, 716],
        gradient: true,
      }
    ],
    lineOps: {
      xAxis: {
        min: 0,
        max: 20,
        display: false,
      },
      yAxis: {
        min: 0,
        max: 1000,
        display: false
      },
      series: {
        lineStyle: {
          width: "5px",
          smooth: true,
        },
        headPoint: {
          shape: "circle",
          size: 20,
          strokeWidth: 5,
          fillColor: '#ffffff',
          strokeColor: '#007aff',
          display: true
        },
        loop: {
          margin: 2,
          gradient: true,
        }
      }
    },
    //下载按钮
    progress: 5,
    downloadText: "点击下载",
    //picker
    textrange:[1,2,3,4,5],
    multitext:[[1,2,3],['a','b','c'],['一','二','三']]
  },
  setProgress(e) {
    this.progress += 10;
    this.downloadText = this.progress + "%";
    this.$element('download-btn').setProgress({ progress: this.progress });
    if (this.progress >= 100) {
      this.downloadText = "下载完成";
    }
    if (this.downloadText == "下载完成") {
      this.downloadText = "点击下载";
      this.progress = 5
    }
  },
  //帧动画开启
  startAnimator(){
    this.$ref.animator.start()
  },
  showMenu(){
    this.$element('menu').show()
  },
    addData() {
    this.$refs.linechart.append({
      serial: 0,
      data: [Math.floor(Math.random() * 400) + 400]
    })
  },
  onInit(){

  },
  onShow(){
    this.startAnimator()
  }
}
