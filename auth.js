// auth.js

// เก็บข้อมูลบัญชีคณะสี
const facultyAccounts = {
  "malai@sns.ac.th": { password: "malai123", faculty: "มาลัยพิรุณ" },
  "praijit@sns.ac.th": { password: "praijit123", faculty: "ไพรจิตเวหาส" },
  "opas@sns.ac.th": { password: "opas123", faculty: "โอภาสรวี" },
  "chantra@sns.ac.th": { password: "chantra123", faculty: "จันทราอำไพร" },
  "rasamee@sns.ac.th": { password: "rasamee123", faculty: "รัศมีดารา" }
};

// ✅ เก็บข้อมูลห้องเรียนของแต่ละคณะ
const facultyClassroom = {
  //1/4 1/9 2/5 2/10 3/1 3/6 3/11 6/2 6/7 6/12
  "มาลัยพิรุณ": ["1/4","1/9","2/5","2/10","3/1","3/6","3/11","4/1", "4/6", "4/11", "5/2","5/12", "6/2","6/7","6/12"],
  //1/5 1/10 2/1 2/6 2/11 3/2 3/7 3/12 4/2  4/12 5/3 5/8 6/3 6/8 6/11
  "ไพรจิตเวหาส": ["1/5", "1/10", "2/1", "2/6", "2/11", "3/2", "3/7", "3/12", "4/2", "4/12", "5/3", "5/8", "6/3", "6/8", "6/11"],
  //1/1 1/6 1/11 2/2 2/7 3/3 3/8 4/3 4/8 4/13 5/4 5/9 5/11 6/4 6/9
  "โอภาสรวี": ["1/1", "1/6", "1/11", "2/2", "2/7", "3/3", "3/8", "4/3", "4/8", "4/13", "5/4", "5/9", "5/11", "6/4", "6/9"],
  //1/3 1/8 1/13 2/4 2/9 3/5 3/10 4/5 4/7 4/10 /5/1 5/6 6/5 6/6 6/13
  "จันทราอำไพร": ["1/3", "1/8", "1/13", "2/4", "2/9", "3/5", "3/10", "4/5", "4/7", "4/10", "5/1", "5/6", "6/5", "6/6", "6/13"],
  //1/2 1/7 1/12 2/3 2/8 2/13 3/4 3/9 4/4 4/9 5/5 5/7 5/10 5/13 6/1 6/10
  "รัศมีดารา": ["1/2", "1/7", "1/12", "2/3", "2/8", "2/13", "3/4", "3/9", "4/4", "4/9", "5/5", "5/7", "5/10", "5/13", "6/1", "6/10"]
};
// ฟังก์ชันล็อกอิน
function login() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (facultyAccounts[email] && facultyAccounts[email].password === password) {
    // เก็บชื่อคณะและอีเมลลง localStorage
    localStorage.setItem("currentFaculty", facultyAccounts[email].faculty);
    localStorage.setItem("userEmail", email);

    // ส่งไปหน้าครู
    window.location = "teacher.html";
  } else {
    msg.innerText = "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
  }
}
