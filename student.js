function showScore(type, roomCount = 1) {
  const resultDiv = document.getElementById("scoreResult");

  // ดึงคะแนนจาก localStorage (เก็บเป็นคณะสี)
  let faculties = JSON.parse(localStorage.getItem("facultyScores")) || {
    "ไพรจิตเวหาส": { late: 0, clean: 0, lineup: 0 },
    "โอภาสรวี": { late: 0, clean: 0, lineup: 0 },
    "รัศมีดารา": { late: 0, clean: 0, lineup: 0 },
    "จันทราอำไพ": { late: 0, clean: 0, lineup: 0 },
    "มาลัยพิรุณ": { late: 0, clean: 0, lineup: 0 },
  };

  let text = "<h3>คะแนนคณะสี</h3><ul>";

  if (type === "late") {
    // คำนวณคะแนนมาสายแบบเปรียบเทียบ
    const minLate = Math.min(...Object.values(faculties).map(f => f.late));
    for (let faculty in faculties) {
      if (faculties[faculty].late === minLate) {
        text += `<li>${faculty}: 9 คะแนน (มาสายน้อยสุด)</li>`;
      } else {
        text += `<li>${faculty}: 5คะแนน</li>`;
      }
    }
  } else if (type === "clean") {
    // ค่าเฉลี่ยความสะอาดทั้งคณะ (รวมคะแนนหารด้วยจำนวนห้อง)
    for (let faculty in faculties) {
      let avgClean = roomCount > 0 ? faculties[faculty].clean / roomCount : faculties[faculty].clean;
      text += `<li>${faculty}: ${avgClean.toFixed(2)} คะแนนเฉลี่ยทั้งคณะ</li>`;
    }
  } else if (type === "lineup") {
    for (let faculty in faculties) {
      text += `<li>${faculty}: ${faculties[faculty].lineup} คะแนน</li>`;
    }
  }

  text += "</ul>";
  resultDiv.innerHTML = text;
}
