// عناصر الصفحة
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const registerScreen = document.getElementById('register-screen');
const recoverScreen = document.getElementById('recover-screen');

const loginBtn = document.getElementById('login-btn');
const registerLink = document.getElementById('register-link');
const recoverLink = document.getElementById('recover-link');
const backToLogin = document.getElementById('back-to-login');
const backToLoginRecover = document.getElementById('back-to-login-recover');
const createAccountBtn = document.getElementById('create-account-btn');

// بيانات تسجيل دخول وهمية
const users = [
    { username: "user123", password: "pass123" }
];

// التحقق من تسجيل الدخول
loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        loginScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
});

// التنقل إلى إنشاء حساب
registerLink.addEventListener('click', () => {
    loginScreen.classList.add('hidden');
    registerScreen.classList.remove('hidden');
});

// العودة من إنشاء الحساب
backToLogin.addEventListener('click', () => {
    registerScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
});

// التنقل إلى استرداد الحساب
recoverLink.addEventListener('click', () => {
    loginScreen.classList.add('hidden');
    recoverScreen.classList.remove('hidden');
});

// العودة من استرداد الحساب
backToLoginRecover.addEventListener('click', () => {
    recoverScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
});

// إنشاء حساب جديد
createAccountBtn.addEventListener('click', () => {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        users.push({ username: newUsername, password: newPassword });
        alert("تم إنشاء الحساب بنجاح!");
        registerScreen.classList.add('hidden');
        loginScreen.classList.remove('hidden');
    } else {
        alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
    }
});
