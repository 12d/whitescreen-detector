
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

      const WhitescreenDetect = {
        init(root, options){
            this.observer = new MutationObserver(this._changeHandler.bind(this));
            this.root = root;
            this.observer.observe(root, options);
            this._changeHandler();
        },
        isValidScreen(){
          return this.root.offsetHeight > NORMAL_PAGE_MINI_HEIGHT
        },
        _changeHandler(e){
          this._tick && clearTimeout(this._tick);
          this._tick = setTimeout(()=>{
            !this.isValidScreen() && this._detectedHandler()
          }, WHITE_STATUS_DURATION)
        },
        detect(callback){
          this._detectedHandler = callback;
        }
      }

      WhitescreenDetect.init(rootElement, options);

      WhitescreenDetect.detect(function(){
          let data = {
            ua: navigator.userAgent,
            html: this.root.innerHTML,
            url: location.href
          }
          //上报数据
          console.log(data)
      })
    })
  }
