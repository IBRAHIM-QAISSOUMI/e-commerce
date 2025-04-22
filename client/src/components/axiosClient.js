import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;





// import axios from 'axios';

// const axiosClient = axios.create({
//   baseURL: 'http://localhost:8000',
//   headers: {
//     Accept: 'application/json',
//     // لا تحدد 'Content-Type' هنا إذا كنت تستخدم FormData
//   },
// });

// // إضافة Token إلى الهيدر في الطلبات
// axiosClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // إضافة التعامل مع المحتوى عند إرسال ملفات
// axiosClient.interceptors.request.use(config => {
//   if (config.headers['Content-Type'] === 'multipart/form-data') {
//     // إذا كان الطلب يحتوي على ملفات، تأكد من أن الكود يدير الإرسال بشكل صحيح
//     config.headers['Content-Type'] = 'multipart/form-data';
//   }
//   return config;
// });

// export default axiosClient;
