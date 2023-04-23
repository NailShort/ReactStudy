// 每個檔案只能有一個預設匯出
export default{
  myName:'王政文',
  fn(){
    console.log('我的名子是王政文');
  }
}

// 具名匯出：每個檔案能有多個具名匯出
export const myName='王政文'

export function fn(){
  console.log('我的名子是王政文');
}