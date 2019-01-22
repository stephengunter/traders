class Helper {
   
   static getScrollBarWidth() {
      return Common.getScrollBarWidth();
   }
   static resolveErrorData(error)
   {
      console.log(error);
      if(!error) return null;
      if(error.status && error.status === 400) return error.data;
      return null;      
   }
   static BusEmitError(error, title) {

      let msgtitle = title
      if (error.data && error.data.msg) {
         msgtitle = error.data.msg;
      }
      if (!msgtitle) {
         msgtitle = "系統無回應，請稍後再試"
      }

      Bus.$emit('errors', {
         title: msgtitle,
         status: error.status
      })
   }
   static BusEmitOK(title) {
      let msgtitle = '資料已存檔'
      if (title) msgtitle = title
      let msg = {
            title: msgtitle,
            status: 200
      }

      Bus.$emit('okmsg', msg);
   }
   static tryParseInt(val) {
      if (!val) return 0
      return parseInt(val)
   }
   static isTrue(val) {
      if (typeof val == 'number') {
         return val > 0
      } else if (typeof val == 'string') {
         if (val.toLowerCase() == 'true') return true
         if (val == '1') return true
         return false
      } else if (typeof val == 'boolean') {
         return val
      }

      return false
   }
   static buildQuery(url, searchParams) {
      url += '?'
      for (let field in searchParams) {
         let value = searchParams[field];
         url += field + '=' + value + '&';
      }
      return url.substr(0, url.length - 1);
   }
   static genderOptions(){
      return [{
          value: 1,
          text: '男'
       },{
          value: 0,
          text: '女'
       }];
   }
   static toDateString(val){ 
      val = String(val);
      if(val.length != 8) return '';

      let year = val.substring(0, 4);
      let month = val.substring(4, 6);
      let day =  val.substring(6, 8);
      return `${year}-${month}-${day}`;
   }
   static dateNumber(val){ 
      let date = new Date(val);
      let year = this.toNumberString(date.getFullYear());
      let month = this.toNumberString(date.getMonth() + 1);
      let day = this.toNumberString(date.getDate());
      return `${year}${month}${day}`;
   }
   
}

export default Helper;