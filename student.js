function showScore(type) {
  const resultDiv = document.getElementById("scoreResult");

  // ดึงคะแนนจาก localStorage
  let scores = JSON.parse(localStorage.getItem("studentScores")) || {
    late: 0,
    clean: 0,
    lineup: 0
  };

  let text = "";
  if (type === "late") {
    text = "คะแนนคนมาสาย: " + scores.late;
  } else if (type === "clean") {
    text = "คะแนนความสะอาด: " + scores.clean;
  } else if (type === "lineup") {
    text = "คะแนนการเข้าแถว: " + scores.lineup;
  }

  resultDiv.innerHTML = `<h3>${text}</h3>`;
}