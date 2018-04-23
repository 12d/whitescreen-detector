if(typeof window.MutationObserver!=='undefined'){
  window.addEventListener('DOMContentLoaded', function(){
    let options = {
      'subtree': true,
      'arrtibutes': true,
      'childList': true,
    }
    let rootElement = document.body;
    const WHITE_STATUS_DURATION = 1000;
    const NORMAL_PAGE_MINI_HEIGHT = 100;
    const STORAGE_KEY = 'ERROR_WHITE_SCREEN';
    const WhitescreenDetect = {
      init(root, options){
          this.observer = new MutationObserver(this._changeHandler.bind(this));
          this.root = root;
          this.observer.observe(root, options);
          this._changeHandler();
          this.syncLog();
      },
      isValidScreen(){
        return this.root.offsetHeight > NORMAL_PAGE_MINI_HEIGHT
      },
      _changeHandler(e){
        this._tick && clearTimeout(this._tick);
        this._tick = setTimeout(()=>{
          !this.isValidScreen() && this._detectedHandler(this.getClientInfo())
        }, WHITE_STATUS_DURATION)
      },
      detect(callback){
        this._detectedHandler = callback;
      },
      getClientInfo(){
        let data = {
          ua: navigator.userAgent,
          html: this.root.innerHTML,
          url: location.href
        }
        //如果因为断网
        if(navigator.onLine===false){
          data.offline = true;
        }
        return data;
      },
      saveLogLocal(data){
        let last = localStorage.getItem(STORAGE_KEY);
        last = last ? JSON.parse(last) : [];
        last.push(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(last))
      },
      syncLog(){
        let last = localStorage.getItem(STORAGE_KEY);

        if(last){
          this.report(last);
          localStorage.removeItem(STORAGE_KEY);
        }
      },
      report(jsonStr){
        console.log('report', jsonStr)
      }
    };
    let onDetected=(data)=>{
      if(!data) return;
      if(navigator.onLine){
        //上报数据
        WhitescreenDetect.report(JSON.stringify(data));

      }else{
        WhitescreenDetect.saveLogLocal(data);
      }
    }
    WhitescreenDetect.init(rootElement, options);

    WhitescreenDetect.detect(onDetected);
  })
}
