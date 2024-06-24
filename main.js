// FUNCTION 카테고리 가기 위한 패스워드 창
function passWord() {
  var pass1 = prompt('관계자만 이용할 수 있습니다.');
  if (pass1.toLowerCase() === "1234") {
    location.href = "function.html";
  }
  return "";
}

/*-----------------------------------*/

// API 적용
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search-button').addEventListener('click', function() {
    const name = document.getElementById('search-input').value.trim();
    if (!name) return;

    fetch(`http://localhost:4000/${name}`).then(response => response.json()).then(data => {
      clearHighlights();    // 이전 표시 없애기
      if (data.where) {     // 입력이 주어지면
        highlightSection(data.where, data.genre, data.position);    // 맞는 곳에 표시
      }
    }).catch(error => {
      console.error('Fetch error:', error);
    })
  });

  /* 하이라이트 없애기 */
  function clearHighlights() {
    const elements = document.querySelectorAll('.highlight');
    elements.forEach(element => element.classList.remove('highlight'));
  }

  /* 하이라이트 */
  function highlightSection(where, genre, position) {
    if (where === 'pre') {    // 준비기일 때
      if (genre) {
        document.getElementById(`pre-${genre}`).classList.add('highlight');
      }
      if (position) {
        document.getElementById(`pre-${position}`).classList.add('highlight');
      }
    } else if (where === 'atv') {   // 활동기일 때
      if (genre) {
        document.getElementById(`atv-${genre}`).classList.add('highlight');
      }
      if (position) {
        document.getElementById(`atv-${position}`).classList.add('highlight');
      }
    } else if (where === 'reserve') {    // 예비역일 때
      if (genre) {
        document.getElementById(`reserve-${genre}`).classList.add('highlight');
      }
      if (position) {
        document.getElementById(`reserve-${position}`).classList.add('highlight');
      }
    }
  }
});