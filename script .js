// عناصر الصفحة
const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');
const recoverScreen = document.getElementById('recover-screen');
const mainContent = document.getElementById('main-content');

const loginBtn = document.getElementById('login-btn');
const registerLink = document.getElementById('register-link');
const recoverLink = document.getElementById('recover-link');
const backToLogin = document.getElementById('back-to-login');
const backToLoginRecover = document.getElementById('back-to-login-recover');
const createAccountBtn = document.getElementById('create-account-btn');

// استرداد بيانات المستخدمين من Local Storage أو استخدام مصفوفة فارغة
let users = JSON.parse(localStorage.getItem('users')) || [];

// التحقق من تسجيل الدخول
loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        loginScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
});

// الانتقال إلى شاشة إنشاء حساب
registerLink.addEventListener('click', () => {
    loginScreen.classList.add('hidden');
    registerScreen.classList.remove('hidden');
});

// العودة إلى تسجيل الدخول
backToLogin.addEventListener('click', () => {
    registerScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
});

// الانتقال إلى شاشة استرداد الحساب
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
    const newUsername = document.getElementById('new-username').value.trim();
    const newPassword = document.getElementById('new-password').value.trim();

    if (newUsername && newPassword) {
        const existingUser = users.find(u => u.username === newUsername);
        if (existingUser) {
            alert("اسم المستخدم موجود بالفعل. يرجى اختيار اسم مستخدم آخر.");
        } else {
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users)); // حفظ البيانات في Local Storage
            alert("تم إنشاء الحساب بنجاح!");
            registerScreen.classList.add('hidden');
            loginScreen.classList.remove('hidden');
        }
    } else {
        alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
    }
});

// استرداد الحساب
document.getElementById('recover-account-btn').addEventListener('click', () => {
    const recoverUsername = document.getElementById('recover-username').value.trim();
    const recoverEmail = document.getElementById('recover-email').value.trim();

    const user = users.find(u => u.username === recoverUsername);
    if (user) {
        alert(`تم استرداد الحساب بنجاح! اسم المستخدم: ${user.username}`);
    } else {
        alert("لا يوجد حساب بهذا الاسم. يرجى التأكد من البيانات.");
    }
});
