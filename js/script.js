// domm(html태그 로딩 완료시 실행)
$(document).ready(function () {
  // 클래스 nav의 li를 찾아라
  // 저장한다. 재활용하기 위해서
//   var boxs = $(".nav ul li"); // var >>> 왠만하면 쓰지 말자
//   const boxs = $(".nav ul li"); //const >>>절대 변하지 않는 변수 >>>제일 사용하기 1순위
//   let boxs = $(".nav ul li"); //let >>>> 자주 변하는 변수
const boxs = $(".nav ul li");
});
// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function () {
  // 클래스 nav의 li를 찾아라
  // document.querySelector(".nav ul li")
  document.querySelectorAll(".nav ul li");
  var boxs = document.querySelectorAll(".nav ul li");
  const boxs = document.querySelectorAll(".nav ul li");
  let boxs = document.querySelectorAll(".nav ul li");
};
