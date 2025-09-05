const offers = [
  {
    "name": "Cafe Barbera",
    "offer": "اشتري 1 واحصل على الثاني مجانًا",
    "image": "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
    "insta": "https://www.instagram.com/cafebarbera",
    "fb": "https://www.facebook.com/cafebarbera"
  },
  {
    "name": "Talabat",
    "offer": "عروض يومية من طلبات",
    "image": "https://images.unsplash.com/photo-1598514982655-cf5f0c6e36ef?q=80&w=1200&auto=format&fit=crop",
    "insta": "https://www.instagram.com/talabat",
    "fb": "https://www.facebook.com/talabat"
  },
  {
    "name": "Shi Shawerma",
    "offer": "خصم 15%",
    "image": "https://images.unsplash.com/photo-1617196039897-9c593c0f12e8?q=80&w=1200&auto=format&fit=crop",
    "insta": "https://www.instagram.com/shishawerma",
    "fb": "https://www.facebook.com/shishawerma"
  },
  {
    "name": "Tom & Jerry",
    "offer": "خصم 15%",
    "image": "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
    "insta": "https://www.instagram.com/tomandjerry",
    "fb": "https://www.facebook.com/tomandjerry"
  },
  {
    "name": "Papaya",
    "offer": "عرض خاص على العصائر الطبيعية",
    "image": "https://images.unsplash.com/photo-1565958011703-44e58cc2c9f7?q=80&w=1200&auto=format&fit=crop",
    "insta": "https://www.instagram.com/papaya",
    "fb": "https://www.facebook.com/papaya"
  }
];

const homeDiv = document.getElementById('home');
const listDiv = document.getElementById('list');
const restaurantDiv = document.getElementById('restaurant');

function showPage(page, index=null){
  homeDiv.classList.add('hidden');
  listDiv.classList.add('hidden');
  restaurantDiv.classList.add('hidden');
  if(page==='home') homeDiv.classList.remove('hidden');
  if(page==='list') renderList();
  if(page==='restaurant') renderRestaurant(index);
}

function renderList(){
  listDiv.innerHTML = '<h1>قائمة المطاعم</h1>';
  offers.forEach((item, index)=>{
    const link = document.createElement('div');
    link.className = 'card';
    link.innerHTML = `
      ${item.name}
      <br>
      <a href="#" class="btn" onclick="showPage('restaurant', ${index})">شوف العرض</a>
    `;
    listDiv.appendChild(link);
  });
  const back = document.createElement('a');
  back.href = '#';
  back.className = 'menu-btn';
  back.textContent = '⬅ العودة للصفحة الرئيسية';
  back.onclick = ()=>{ showPage('home'); };
  listDiv.appendChild(back);
  listDiv.classList.remove('hidden');
}

function renderRestaurant(index){
  const item = offers[index];
  restaurantDiv.innerHTML = `
    <div class="card">
      <img src="${item.image}" alt="${item.name}">
      <h1>${item.name}</h1>
      <p>${item.offer}</p>
      <div style="margin-top:8px;">
        <a href="${item.insta}" target="_blank" class="btn">Instagram</a>
        <a href="${item.fb}" target="_blank" class="btn">Facebook</a>
      </div>
    </div>
    <a href="#" class="menu-btn" onclick="showPage('list')">⬅ العودة لقائمة المطاعم</a>
    <a href="#" class="menu-btn" onclick="showPage('home')">⬅ العودة للصفحة الرئيسية</a>
  `;
  restaurantDiv.classList.remove('hidden');
}

showPage('home');