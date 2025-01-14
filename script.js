const flashCard = document.getElementById("flash-card");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

// รายการ Flash Card สูงสุด 30 คำ
const flashCards = [
    { question: "Athlete", answer: "นักกีฬา" },
    { question: "Genuine", answer: "แท้จริง" },
    { question: "Neglect", answer: "เพิกเฉย" },
    { question: "failure", answer: "ความล้มเหลว" },
    { question: "Pension", answer: "เงินบำนาญ" },
    { question: "Chairman", answer: "ประธาน" },
    { question: "Enhance", answer: "เสริม,ปรับปรุง" },
    { question: "Obligation", answer: "ภาระหน้าที่" },
    { question: "Scheme", answer: "แผนการ" },
    { question: "industrial", answer: "เกี่ยวกับอุตสาหกรรม" },
    { question: "Undertake", answer: "รับภาระ" },
    { question: "Attachment", answer: "การแนบ" },
    { question: "Welfare", answer: "สวัสดิการ" },
    { question: "military", answer: "ทหาร" },
    { question: "Agriculture", answer: "เกษตรกรรม" },
    { question: "Evaluate", answer: "ประเมิน" },
    { question: "Representative", answer: "ตัวแทน" },
    { question: "Nightmare", answer: "ฝันร้าย" },
    { question: "Faith", answer: "ศรัทธา" },
    { question: "Valid", answer: "ใช้ได้จริง" },
    { question: "Harmful", answer: "เป็นอันตราย" },
    { question: "Phenomenob", answer: "ปรากฏการณ์" },
    { question: "Relevant", answer: "เข้าประเด็น" },
    { question: "Negotiation", answer: "การเจรจา" },
    { question: "Labor", answer: "แรงงาน" },
    { question: "Popularity", answer: "ความเป็นที่นิยม" },
    { question: "Hesitate", answer: "ลังเล" },
    { question: "Theaten", answer: "คุกคาม" },
    { question: "suspect", answer: "สงสัย" },
    { question: "massive", answer: "ใหญ่โต" }
];

let currentIndex = 0;

// ฟังก์ชันแสดง Flash Card
function showCard(index) {
    const card = flashCards[index];
    cardFront.textContent = card.question;
    cardBack.textContent = card.answer;
    flashCard.classList.remove("flipped");
}

// ฟังก์ชันแสดงการ์ดถัดไป
function showNextCard() {
    currentIndex = (currentIndex + 1) % flashCards.length;
    showCard(currentIndex);
}

// ฟังก์ชันแสดงการ์ดก่อนหน้า
function showPrevCard() {
    currentIndex = (currentIndex - 1 + flashCards.length) % flashCards.length;
    showCard(currentIndex);
}

// สลับระหว่างหน้าและหลัง
flashCard.addEventListener("click", () => {
    flashCard.classList.toggle("flipped");
});

// เปลี่ยน Flash Card เมื่อคลิกปุ่ม
nextBtn.addEventListener("click", showNextCard);
prevBtn.addEventListener("click", showPrevCard);

// แสดงการ์ดแรกเมื่อโหลดหน้าเว็บ
showCard(currentIndex);