// function openModal(event) {
//   let name = event.currentTarget.getElementsByClassName("seriesName")[0];
//   let number = event.currentTarget.getElementsByClassName("seriesNumber")[0];
//   document.getElementById("modalNumber").innerHTML = number.innerHTML;
//   document.getElementById("modalName").innerHTML = name.innerHTML;
//   modal.style.display = "flex";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const currentPath = window.location.pathname;
//   const initData = btoa(window.Telegram.WebApp.initData);

//   if (currentPath === "/") {
//     fetch("https://test0123481.ru/api/user/profile/?lang=ru", {
//       headers: { Authorization: initData },
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const userName = `${data.user.firstName} ${data.user.lastName}`;
//         const balance = `${data.user.balance}`;
//         const name = `${data.series.name}`;
//         const number = `${data.series.number}`;
//         const progressValue = `${data.progress}`;
//         const newsArray = data.news;
//         document.getElementById("userName").innerHTML = userName;
//         document.getElementById("balance").textContent = balance;
//         document.getElementById("name").textContent = `Серия ${number}`;
//         document.getElementById("number").textContent = `"${name}"`;
//         document.getElementById("progress").style.width =
//           progressValue * 100 + "%";
//         document.getElementById("avatarLink").src = data.user.avatarLink;
//         document.getElementById("communityLink").href = data.communityLink;
//         document.getElementById("iconLink").href = data.iconLink;
//         document.getElementById("supportLink").href = data.supportLink;

//         for (let i = 0; i < newsArray.length; i++) {
//           let newsElement = `<a href="${newsArray[i].telegraphLink}" class="advertising__blocks" style="height: inherit;"><img src='${newsArray[i].imageLink}' style='height: inherit; border-radius: 10px;width:100%;'></a>`;
//           document.getElementById("newsContainer").innerHTML += newsElement;
//         }
//       })
//       .catch((error) => console.error("Ошибка:", error));
//   } else if (currentPath === "/page2.html") {
//     window.Telegram.WebApp.BackButton.show();
//     window.Telegram.WebApp.BackButton.onClick(function (event) {
//       window.Telegram.WebApp.BackButton.hide();
//       window.location.href = "/";
//     });

//     fetch("https://test0123481.ru/api/series/list/?lang=ru", {
//       headers: { Authorization: initData },
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const userName = `${data.user.firstName} ${data.user.lastName}`;
//         const balance = `${data.user.balance}`;
//         const series = data.series;

//         document.getElementById("userName").innerHTML = userName;
//         document.getElementById("balance").textContent = balance;
//         document.getElementById("avatarLink").src = data.user.avatarLink;

//         for (let i = 0; i < series.length; i++) {
//           let iconPath =
//             "M26.8736 11.3928H21.2486V7.01782C21.2486 5.19446 20.5243 3.44578 19.235 2.15646C17.9456 0.867151 16.197 0.142822 14.3736 0.142822C12.5502 0.142822 10.8015 0.867151 9.51224 2.15646C8.22292 3.44578 7.4986 5.19446 7.4986 7.01782V11.3928H1.8736C1.37632 11.3928 0.899401 11.5904 0.547771 11.942C0.19614 12.2936 -0.00140381 12.7705 -0.00140381 13.2678V30.7678C-0.00140381 31.2651 0.19614 31.742 0.547771 32.0936C0.899401 32.4453 1.37632 32.6428 1.8736 32.6428H26.8736C27.3709 32.6428 27.8478 32.4453 28.1994 32.0936C28.5511 31.742 28.7486 31.2651 28.7486 30.7678V13.2678C28.7486 12.7705 28.5511 12.2936 28.1994 11.942C27.8478 11.5904 27.3709 11.3928 26.8736 11.3928ZM8.7486 7.01782C8.7486 5.52598 9.34123 4.09524 10.3961 3.04035C11.451 1.98545 12.8818 1.39282 14.3736 1.39282C15.8654 1.39282 17.2962 1.98545 18.3511 3.04035C19.406 4.09524 19.9986 5.52598 19.9986 7.01782V11.3928H8.7486V7.01782ZM27.4986 30.7678C27.4986 30.9336 27.4327 31.0926 27.3155 31.2098C27.1983 31.327 27.0394 31.3928 26.8736 31.3928H1.8736C1.70784 31.3928 1.54886 31.327 1.43165 31.2098C1.31444 31.0926 1.2486 30.9336 1.2486 30.7678V13.2678C1.2486 13.1021 1.31444 12.9431 1.43165 12.8259C1.54886 12.7087 1.70784 12.6428 1.8736 12.6428H26.8736C27.0394 12.6428 27.1983 12.7087 27.3155 12.8259C27.4327 12.9431 27.4986 13.1021 27.4986 13.2678V30.7678ZM15.6236 22.0178C15.6236 22.265 15.5503 22.5067 15.4129 22.7123C15.2756 22.9178 15.0804 23.0781 14.8519 23.1727C14.6235 23.2673 14.3722 23.292 14.1297 23.2438C13.8873 23.1956 13.6645 23.0765 13.4897 22.9017C13.3149 22.7269 13.1958 22.5042 13.1476 22.2617C13.0994 22.0192 13.1241 21.7679 13.2187 21.5395C13.3134 21.3111 13.4736 21.1158 13.6791 20.9785C13.8847 20.8411 14.1264 20.7678 14.3736 20.7678C14.7051 20.7678 15.0231 20.8995 15.2575 21.1339C15.4919 21.3684 15.6236 21.6863 15.6236 22.0178Z";
//           if (series[i].isBought) {
//             iconPath =
//               "M3.67798 9.59583L5.26948 8.05L13.938 16.4748C14.0777 16.6098 14.1886 16.7703 14.2643 16.9471C14.3399 17.124 14.3789 17.3136 14.3789 17.5051C14.3789 17.6966 14.3399 17.8862 14.2643 18.0631C14.1886 18.2399 14.0777 18.4004 13.938 18.5354L5.26948 26.9646L3.67948 25.4188L11.8155 17.5073L3.67798 9.59583Z";
//           }

//           let seriesElement = `<div class="block openModal" onclick='openModal(event)'>
//             <div class="series__block-logo" id="iconLink">
//                 <img src="${series[i].iconLink}" alt="Логотип">
//             </div>
//             <div class="main-text">
//                 <div class="main-text__title"><span></span><span class="seriesNumber">СЕРИЯ ${series[i].number}</span></div>
//                 <div class="main-text__subtitle seriesName">«${series[i].name}»</div>
//             </div>
//             <div class="arrow">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 33" fill="none">
//                     <path
//                         d="M26.8736 11.3928H21.2486V7.01782C21.2486 5.19446 20.5243 3.44578 19.235 2.15646C17.9456 0.867151 16.197 0.142822 14.3736 0.142822C12.5502 0.142822 10.8015 0.867151 9.51224 2.15646C8.22292 3.44578 7.4986 5.19446 7.4986 7.01782V11.3928H1.8736C1.37632 11.3928 0.899401 11.5904 0.547771 11.942C0.19614 12.2936 -0.00140381 12.7705 -0.00140381 13.2678V30.7678C-0.00140381 31.2651 0.19614 31.742 0.547771 32.0936C0.899401 32.4453 1.37632 32.6428 1.8736 32.6428H26.8736C27.3709 32.6428 27.8478 32.4453 28.1994 32.0936C28.5511 31.742 28.7486 31.2651 28.7486 30.7678V13.2678C28.7486 12.7705 28.5511 12.2936 28.1994 11.942C27.8478 11.5904 27.3709 11.3928 26.8736 11.3928ZM8.7486 7.01782C8.7486 5.52598 9.34123 4.09524 10.3961 3.04035C11.451 1.98545 12.8818 1.39282 14.3736 1.39282C15.8654 1.39282 17.2962 1.98545 18.3511 3.04035C19.406 4.09524 19.9986 5.52598 19.9986 7.01782V11.3928H8.7486V7.01782ZM27.4986 30.7678C27.4986 30.9336 27.4327 31.0926 27.3155 31.2098C27.1983 31.327 27.0394 31.3928 26.8736 31.3928H1.8736C1.70784 31.3928 1.54886 31.327 1.43165 31.2098C1.31444 31.0926 1.2486 30.9336 1.2486 30.7678V13.2678C1.2486 13.1021 1.31444 12.9431 1.43165 12.8259C1.54886 12.7087 1.70784 12.6428 1.8736 12.6428H26.8736C27.0394 12.6428 27.1983 12.7087 27.3155 12.8259C27.4327 12.9431 27.4986 13.1021 27.4986 13.2678V30.7678ZM15.6236 22.0178C15.6236 22.265 15.5503 22.5067 15.4129 22.7123C15.2756 22.9178 15.0804 23.0781 14.8519 23.1727C14.6235 23.2673 14.3722 23.292 14.1297 23.2438C13.8873 23.1956 13.6645 23.0765 13.4897 22.9017C13.3149 22.7269 13.1958 22.5042 13.1476 22.2617C13.0994 22.0192 13.1241 21.7679 13.2187 21.5395C13.3134 21.3111 13.4736 21.1158 13.6791 20.9785C13.8847 20.8411 14.1264 20.7678 14.3736 20.7678C14.7051 20.7678 15.0231 20.8995 15.2575 21.1339C15.4919 21.3684 15.6236 21.6863 15.6236 22.0178Z"
//                         fill="black" />
//                 </svg>
//             </div>
//         </div>`;

//           document.getElementById("seriesContainer").innerHTML += seriesElement;
//         }
//       //   fetch('https://test0123481.ru/api/series/buy', {
//       //     method: 'POST',
//       //     headers: {
//       //         'Content-Type': 'application/json'
//       //     },
//       //     body: JSON.stringify({ amount: parseInt(amount, 10) })
//       // })
//       // .then(response => {
//       //     if (response.ok) {
//       //         console.log('204 OK');
//       //     } else if (response.status === 409) {
//       //       console.error('409 Не достаточно средств');
//       //     } else {
//       //         console.log('Ошибка сети');
//       //     }
//       // })
//       // .catch(error => {
//       //     // Обработка ошибок
//       //     console.error('Ошибка:', error);
//       // });
//       })
//       .catch((error) => console.error("Ошибка:", error));
//   } else if (currentPath === "/page3.html") {
//     window.Telegram.WebApp.BackButton.show();
//     window.Telegram.WebApp.BackButton.onClick(function (event) {
//         window.Telegram.WebApp.BackButton.hide();
//         window.location.href = "/page2.html";
//     });

//     fetch("https://test0123481.ru/api/referral/profile", {
//         headers: { Authorization: initData },
//         method: "GET",
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         const userName = `${data.user.firstName} ${data.user.lastName}`;
//         const balance = `${data.user.balance}`;
//         const referralLink = `${data.referralLink}`;
//         const referralBalance = `${data.referralBalance}`;
//         const referralBalanceInDollars = `${data.referralBalanceInDollars}`;

//         document.getElementById("userName").innerHTML = userName;
//         document.getElementById("referralLink").innerHTML = referralLink;
//         document.getElementById("referralBalance").innerHTML = referralBalance;
//         document.getElementById("referralBalanceInDollars").innerHTML = referralBalanceInDollars;
//         document.getElementById("balance").textContent = balance;
//         document.getElementById("avatarLink").src = data.user.avatarLink;

//         const copyButton = document.getElementById("copyBtn");
//         copyButton.addEventListener("click", function() {
//             navigator.clipboard.writeText(referralLink).then(function() {
//                 console.log('Реферальная ссылка скопирована в буфер обмена');
//             }).catch(function(error) {
//                 console.error('Ошибка при копировании: ', error);
//             });
//         });

//         const submitBtn = document.getElementById("submitBtn");
//         const inputNumber = document.getElementById("inputNumber");

//         submitBtn.addEventListener("click", function() {
//           let amount = inputNumber.value.trim();

//           // Оставляем только цифры
//           amount = amount.replace(/[^\d]/g, ''); 

//           if (!amount) {
//               console.log('Пожалуйста, введите число.');
//               return;
//           }

//             fetch('https://test0123481.ru/api/referral/order/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ amount: parseInt(amount, 10) })
//             })
//             .then(response => {
//                 if (response.ok) {
//                     console.log('204 OK');
//                 } else if (response.status === 409) {
//                   console.error('409 Не достаточно средств');
//                 } else {
//                     console.log('Ошибка сети');
//                 }
//             })
//             .catch(error => {
//                 // Обработка ошибок
//                 console.error('Ошибка:', error);
//             });
//         });
//     })
//     .catch((error) => console.error("Ошибка:", error));
// }


//   const modal = document.getElementById("modal");

//   function closeModal() {
//     modal.style.display = "none";
//   }

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       closeModal();
//     }
//   };
//   window.ontouchstart = function (event) {
//     if (event.target == modal) {
//       closeModal();
//     }
//   };
// });

// const swiper = new Swiper(".swiper-container", {
//   direction: "horizontal",
//   loop: false,
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop: false,
// });

// // Инициализация Video.js плеера
// const videoPlayer = videojs("fullscreen-video");
// const icon1 = document.getElementById("icon1");
// // Обработчик события смены слайда
// swiper.on("slideChange", function () {
//   // Останавливаем видео при смене слайда
//   if (!videoPlayer.paused()) {
//     videoPlayer.pause(); // Остановить видео при смене слайда
//   }
// });

// // Обработчик клавиатурных событий
// document.addEventListener("keydown", function (event) {
//   // Обработка стрелок
//   if (event.code === "ArrowRight") {
//     swiper.slideNext(); // Переход к следующему слайду
//   } else if (event.code === "ArrowLeft") {
//     swiper.slidePrev(); // Переход к предыдущему слайду
//   }
// });

// // Отключаем свайпы, когда видео играет
// videoPlayer.on("play", function () {
//   swiper.allowTouchMove = false; // Отключаем свайпы, пока видео играет
//   icon1.style.display = "none";
// });

// // Разрешаем свайпы, когда видео на паузе
// videoPlayer.on("pause", function () {
//   swiper.allowTouchMove = true; // Разрешаем свайпы, когда видео на паузе
//   icon1.style.display = "block";
// });

// // Разрешаем свайпы после завершения видео
// videoPlayer.on("ended", function () {
//   swiper.allowTouchMove = true; // Разрешаем свайпы после завершения видео
//   icon1.style.display = "block";
// });
