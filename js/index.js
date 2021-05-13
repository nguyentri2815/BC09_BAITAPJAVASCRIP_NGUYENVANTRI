// ===============================================bài tập js buổi 1 =========================================

/* bài 1 tính tiền lương nhận viên
    * đầu vào: 
        - tạo biến tiền làm 1 ngày,số ngày làm
    * giải thuật:
        - tính số lương phải tra :ngày làm * tiền trả 1 ngày
    * đầu ra : 
        - tiền lương
*/
// bài 1 : tính tiền lương nhân viên
function calcSalary() {
  var daySalary = 100000;
  var workDay = +document.getElementById("workDay").value;
  var salary = daySalary * workDay;
  document.getElementById("resultSalary").innerHTML = salary + "VND";
}
/* bài 2 tính giá trị trung bình 
    * đầu vào: 
        - tạo 5 biến number và biến kết quả TB
    * giải thuật:
        - tính kết quả TB = 5 số cộng lại chia 5
    * đầu ra : 
        - Ket quả TB 
*/
function calcTB() {
  var number1 = +document.getElementById("num1").value;
  var number2 = +document.getElementById("num2").value;
  var number3 = +document.getElementById("num3").value;
  var number4 = +document.getElementById("num4").value;
  var number5 = +document.getElementById("num5").value;
  var TB = (number1 + number2 + number3 + number4 + number5) / 5;
  document.getElementById("resultTB").innerHTML = TB;
}
/* bài 3 quy đổi tiền
    * đầu vào: 
        - tạo biến usd,số tiền nhập và kết quả quỷ đổi
    * giải thuật:
        - tính kết quả quy đổi bằng usd * số tiền
    * đầu ra : 
        - Ket quả quy đổi 
*/
function calcQD() {
  var USD = 23500;
  var numberMoney = +document.getElementById("numberMoney").value;
  var resultQD = numberMoney * USD;
  document.getElementById("resultQD").innerHTML = resultQD + "VND";
}
/* bài 4 tính diện tích, chu vi hình chữ nhật
    * đầu vào: 
        - tạo biến chiều dài. chiều rộng, kết quả chiều dài, kết quả chiều rộng
    * giải thuật:
        - tính kết quả diện tích = dài * rộng, chu vi= ( dài + rộng)/2
    * đầu ra : 
        - diện tích , chu vi hình chữ  nhật
*/
function calcDTCV() {
  var length = +document.getElementById("length").value;
  var width = +document.getElementById("width").value;
  var resultDT = length * width;
  var resultCV = (length + width) / 2;
  document.getElementById("resultDT").innerHTML = "diện tích :" + resultDT;
  document.getElementById("resultCV").innerHTML = "chu vi :" + resultCV;
}
/* bài 5  tính tổng 2 ký số
    * đầu vào: 
        - tạo biến số nhập vào, ký số thứ nhất, ký số thứ2
    * giải thuật:
        - tính ký số thứ 1 = số nhập vào/10
        - tính ký số thứ 2 = số nhaaoj vào %10
    * đầu ra : 
        - tổng 32 ký số
*/
function calcTotol() {
  var number2word = +document.getElementById("number2word").value;
  var number1 = +(number2word % 10);
  var number2 = +(number2word / 10).toFixed(0);
  var resultTotol = number1 + number2;
  document.getElementById("resultTotol").innerHTML =
    "tổng 2 ký số :" + resultTotol;
}

// ===============================================bài tập js buổi 2 =========================================

/* bài 1  xuất 3 số theo thứ tự tăng dần
    * đầu vào: 
        - tạo 3 biến số, biến kết quả sắp xếp, biến gán
    * giải thuật:
        - gán biến kết quả mà mảng 3 số nhập vào
        - lồng 2 vòng lặp
            + bắt đầu từ vị trí 0 for ben trong lặp từ vi trí 1 đến hết mảng
            + nếu vị trí 0 > một trong các vị trí từ vị trí 1 đến hết mảng thì hoáng đổi vị trí 
            + tại vị trí 0 for nhất và chạy hết vong lăp for bên trong  ta thu được số nhỏ nhất nằm ơ vị trí 0
            + chạy hết 2 vòng lặp ta thu được mảng mới được sắp xếp tăng dần
    * đầu ra : 
        - dãy số được sắp xếp tăng dần
*/
function ascending() {
  var num1js2 = +document.getElementById("num1js2").value;
  var num2js2 = +document.getElementById("num2js2").value;
  var num3js2 = +document.getElementById("num3js2").value;
  var resultAscending = [num1js2, num2js2, num3js2];
  let min;
  for (let i = 0; i < resultAscending.length - 1; i++) {
    // console.log('for 1 tại i :',i);
    for (let j = i + 1; j < resultAscending.length; j++) {
      //tim số nhỏ nhất đổi vị trí lên đầu tiên
      if (resultAscending[i] > resultAscending[j]) {
        // Hoan vi 2 so arr[i] va arr[j]
        min = resultAscending[i];
        resultAscending[i] = resultAscending[j];
        resultAscending[j] = min;
        // console.log('tại vị tri j :',j);
        // console.log('lan lap nay gia trị arr tại 0 là:',resultAscending[i]);
        // console.log(resultAscending);
      }
    }
  }

  document.getElementById("resultAscending").innerHTML = resultAscending;
}

/* bài 2  chương trình chào hỏi
    * đầu vào: 
        - khai báo biến tên
    * giải thuật:
        - alert giá trị tên nhập vào
    * đầu ra : 
        - lời chào
*/
function welcom() {
  var name = document.getElementById("namejs2").value;
  alert("xin chao" + " " + name);
}

/* bài 3  tính sổ lẻ, số chẳn
    * đầu vào: 
        - khai 3 biến ố ,biến số chẳn, biến số lẻ,biến kết quả
    * giải thuật:
        - kiểm tra từng số nếu %2 ==0 thì là chản tăng số chẳn lên 1 ngược lại tăng số lẻ lên 1
        - qua hết câu điều kiện thu được tổng số chăn và số lẻ
    * đầu ra : 
        - tính số chẳn , lẻ
*/
function evenOdd() {
  var num1js22 = +document.getElementById("num1js22").value;
  var num2js22 = +document.getElementById("num2js22").value;
  var num3js22 = +document.getElementById("num3js22").value;
  var even = 0;
  var odd = 0;
  num1js22 % 2 ? ++even : ++odd;
  num2js22 % 2 ? ++even : ++odd;
  num3js22 % 2 ? ++even : ++odd;
  var resulteventOdd = `có  ${odd} so chẵn và  ${even}  so lẻ`;
  document.getElementById("resulteventOdd").innerHTML = resulteventOdd;
}
/* bài 3  xác định tam giác gì
    * đầu vào: 
        - khai 3 cạnh tam giác, biến kết quả
    * giải thuật:
        - kiểm tra đk nếu 2 canh bất kỳ bằng nhau và khác cạnh còn lại => tam giác cân
        - kiểm tra đk nếu 3 cạnh bằng nhau => tam giác đều
        - kiểm tra đk nếu bất kỳ 1 cạnh = căn bậc hai 2 cạnh còn lại => tam giác vuông
    * đầu ra : 
        - ket quả tam giác
*/
function triangle() {
  var a = +document.getElementById("a").value;
  var b = +document.getElementById("b").value;
  var c = +document.getElementById("c").value;
  var resulttriangle;
  if ((a == b && a != c) || (a == c && a != b) || (b == c && b !== a)) {
    resulttriangle = "tam giác cân";
  } else if (a == b && a == c) {
    resulttriangle = "tam giác đều";
  } else if (
    a == Math.sqrt(b * b + c * c) ||
    b == Math.sqrt(a * a + c * c) ||
    c == Math.sqrt(a * a + b * b)
  ) {
    resulttriangle = "tam giác vuong";
  } else {
    resulttriangle = "tam giác thuong";
  }
  document.getElementById("resulttriangle").innerHTML = resulttriangle;
}

// ===============================================bài tập js buổi 3 =========================================
/* bài 1  quản lý tuyển sinh
    * đầu vào: 
        - biến điểm chuẩn
        - 3 biến 3 điểm nhập vào
        - biến khu vực
        - biến đối tượng
        - biến điểm chuẩn
    * giải thuật:
        - lấy giá trị 3 điểm nhập vào
        - kiểm tra đối tượng thuôc khu vực nào, đối tượng ưu tiên nào
        - tính tổng điểm + ưu tiên so sánh với điểm chuẩn
        - gán kết quả đậu rớt
    * đầu ra : 
        - ket quả rớt hay đậu
*/
//kiem tra tính điểm khu vực
function calcAreaGrade(area) {
  //input erea a/b/c/x
  switch (area) {
    case "x":
      return 0;
    case "a":
      return 2;
    case "b":
      return 1;
    case "c":
      return 0.5;
    default:
      break;
  }
  //return diêm
}
//kiểm tra tính điểm ưu tiên đối tượng
function calcStudentGrade(type) {
  //input 1,2,3,0
  switch (type) {
    case 0:
      return 0;
    case 1:
      return 2;
    case 2:
      return 1.5;
    case 3:
      return 1;
    default:
      break;
  }
  // return điểm
}
//tính tổng điểm
function calcTotalGrade(sub1, sub2, sub3, areaGrade, typeGrade) {
  //input
  return sub1 + sub2 + sub3 + areaGrade + typeGrade;
  //return tổng điểm
}
//kiểm tra thng bao dau hay rot
function checkResult(totalGrade, standardGrade) {
  //return đâu// rớt
  if (totalGrade >= standardGrade) {
    return "ban dau";
  } else {
    return "ban rot";
  }
}
function main() {
  var sub1 = document.getElementById("sub1").value;
  var sub2 = document.getElementById("sub2").value;
  var sub3 = document.getElementById("sub3").value;
  var area = document.getElementById("area").value;
  var type = document.getElementById("type").value;
  var standardGrade = document.getElementById("standard").value;

  sub1 = +sub1;
  sub2 = +sub2;
  sub3 = +sub3;
  type = +type;

  if (sub1 === 0 || sub2 === 0 || sub3 === 0) return;

  var areaGrade = calcAreaGrade(area);
  var typeGrade = calcStudentGrade(type);
  var total = calcTotalGrade(sub1, sub2, sub3, areaGrade, typeGrade);
  var result = checkResult(total, standardGrade);
  document.getElementById("resultStudent").innerHTML = result;
}
/* bài 2  quản lý tuyển sinh
    * đầu vào: 
        - biếntên
        - biến số kw
        - biến kết quả
    * giải thuật:
        - kiểm trâ số kw <50 resultBill = kw * 500;
        - kiểm trâ số kw <100 resultBill = 50 * 500 + (kw - 50) * 650;
        - kiểm trâ số kw <200 resultBill = 50 * 500 + 50 * 650 + (kw - 100) * 850;
        - kiểm trâ số kw <350 resultBill = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
        - kiểm trâ số kw >350 resultBill = resultBill =50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    * đầu ra : 
        - số tiền điện
*/
function countElectricityBill() {
  var nameBill = document.getElementById("nameBill").value;
  var kw = +document.getElementById("kw").value;
  var resultBill;
  if (kw < 50) {
    resultBill = kw * 500;
  } else if (kw <= 100) {
    resultBill = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    resultBill = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    resultBill = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    resultBill =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  document.getElementById(
    "resultBill"
  ).innerHTML = `tiền điện của ông/ba ${nameBill} là ${resultBill} VND`;
}
/* bài 3  tính thuế thu nhập cá nhận
    * đầu vào: 
        - biến tên người nộp thuế
        - biến tổng thu nhập năm
        - biến số người ohuj thuộc
        - biến tính người này có thu nhập >60tr /1 năm ko
        - biến kết quả
    * giải thuật:
        - nếu tổng thu nhập/năm <60 thì người này ko cần nộp thúe
        - nếu tổng thu nhập/năm =60 thì người này nop 5% thuế
        - nếu tổng thu nhập/năm <=120 thì người này nop 10% /thu nhập chịu thuế
        - nếu tổng thu nhập/năm <=216 thì người này nop 15% /thu nhập chịu thuế
        - nếu tổng thu nhập/năm <=384 thì người này nop 20% /thu nhập chịu thuế
        - nếu tổng thu nhập/năm <=624 thì người này nop 25% /thu nhập chịu thuế
        - nếu tổng thu nhập/năm <=960 thì người này nop 30% /thu nhập chịu thuế
        - nếu tổng thu nhập/năm >960 thì người này nop 35% /thu nhập chịu thuế
    * đầu ra : 
        - số tiền phải nộp thuế
*/

function incomeTax() {
  var nameTax = document.getElementById("nameTax").value;
  var totalIncome = +document.getElementById("totalIncome").value;
  var dependent = +document.getElementById("dependent").value;
  var isTax = totalIncome - 4 - dependent * 1.6;
  var resultTax;
  console.log(isTax);
  if (isTax > 0 && isTax < 60) {
    resultTax = 0;
  } else if (isTax == 60) {
    resultTax = isTax * 0.05;
  } else if (isTax <= 120) {
    resultTax = isTax * 0.1;
  } else if (isTax <= 216) {
    resultTax = isTax * 0.15;
  } else if (isTax <= 384) {
    resultTax = isTax * 0.2;
  } else if (isTax <= 624) {
    resultTax = isTax * 0.25;
  } else if (isTax <= 960) {
    resultTax = isTax * 0.3;
  } else {
    resultTax = isTax * 0.35;
  }
  document.getElementById(
    "resultTax"
  ).innerHTML = ` thuế phải nôp của ông/ba ${nameTax} là ${resultTax} TR`;
}
/* bài 4  tính tiền cáp
    * đầu vào: 
        - biến mã khách hàng
        - biến loại khách hàng
        - biến số kênh cao cấp
        - biến số kênh kết nối/ dành cho khách hàng daonh nghiệp
        - biến kết quả tính cho kết nối trê 10 kênh của doanh nghiệp
    * giải thuật:
        - kiểm tra là loại khách hàng nào
        - nếu nhà dân thì onchange ẩn input nhập số kên kết nối ngược lại mở ra
        - tùy vào lọa khách hàng nào tiền tính khách nhau 
        - dom in kq ra giao diện
    * đầu ra : 
        - in hóa đơn tính tiền cáp
*/
function changeSelect() {
  var typeCustommer = document.getElementById("typeCustommer").value;
  if (typeCustommer == "1") {
    document.getElementById("chanelConect").style.display = "none";
  } else {
    document.getElementById("chanelConect").style.display = "inline-block";
  }
}
function calcMoney() {
  var codeCustommer = document.getElementById("codeCustommer").value;
  var typeCustommer = document.getElementById("typeCustommer").value;
  var highChannel = +document.getElementById("highChannel").value;
  var chanelConect = +document.getElementById("chanelConect").value;
  var payservice;
  if (typeCustommer == "1") {
    document.getElementById("billChanel").innerHTML = `
            <p>Mã khách hàng :<b>#${codeCustommer}</b></p>
            <p>loại khách hàng :<b>nhà dân</b></p>
            <p>phí xử lý đơn hàng :<b>4.5$</b></p>
            <p>phí dịch vụ cơ bản :<b>20.5$</b></p>
            <p>thuê kênh cao cấp :<b>${highChannel * 7.5}$</b></p>
            <p>tiền phải trả  :<b>${4.5 + 20.5 + highChannel * 7.5}$</b></p>
        `;
  } else {
    if (chanelConect <= 10) {
      payservice = 75;
    } else {
      payservice = 75 * 10 + (chanelConect - 10) * 5;
    }
    document.getElementById("billChanel").innerHTML = `
            <p>Mã khách hàng :<b>#${codeCustommer}</b></p>
            <p>loại khách hàng :<b>doanh nghiệp</b></p>
            <p>phí xử lý đơn hàng :<b>15$</b></p>
            <p>phí dịch vụ cơ bản :<b>${payservice}$</b></p>
            <p>thuê kênh cao cấp :<b>${highChannel * 50}$</b></p>
            <p>tiền phải trả  :<b>${15 + payservice + highChannel * 50}$</b></p>

        `;
  }
}
