
export default class Cookie {
    constructor(el) {
      this.el = el;
      this.store = { sdate: null, edate: null };
    }
    /**
     * cookieNameAdd 옵션값 startDate, enddate 값이 있을경우에 사용되는 메소드.
     * @type {object}
     * @param {string}
     */
    cookieNameAdd(cookiename) {
      const { dataKey, startdate, enddate } = this.el;
      this.store.sdate = new Date(startdate);
      this.store.edate = new Date(enddate);
      const { sdate, edate } = this.store;
  
      if (Date.now() >= sdate && Date.now() <= edate) {
        /** 현재 (시작날짜, 끝날짜) 모두 비교해여 만족하면 활성화되는 조건 */
        cookiename && openWinCookie(cookiename);
        dataKey && dataAttrCookie(cookiename, dataKey);
      }
    }
}