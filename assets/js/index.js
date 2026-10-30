// Toggle button

const toggleBtn = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-mobile");
  sidebar.style.zIndex = "1000";
});

window.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
    sidebar.classList.add("sidebar-mobile");
  }
});

//side bar linkes And Open Sections

let sidebarLinks = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll(".app-section");

for (let i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener("click", () => {
    for (let j = 0; j < sidebarLinks.length; j++) {
      sidebarLinks[j].classList.remove("active");
      sections[j].classList.add("hidden");
    }

    sidebarLinks[i].classList.add("active");
    sections[i].classList.remove("hidden");
  });
}

//  Show The Image in New Tap
const theImageScale = document.getElementById("apod-image");
const theButtonScaleImage = document.getElementById("theButtonScaleImage");
theButtonScaleImage.addEventListener("click", () => {
  const theSrcImage = theImageScale.getAttribute("src");
  window.open(theSrcImage);
});

// The Lunches Api and Set  The Cardes
// Api

async function GetLaunches() {
  let response = await fetch(
    "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10",
  );
  let DataLaunches = await response.json();
  displayLaunches(DataLaunches.results);
}
GetLaunches();
let displayLaunches = (dataLaunches1) => {
  document.querySelector(".main-launches").innerHTML =
    `  <div class="flex flex-col justify-between">
                  <div>
                    <div class="flex items-center gap-3 mb-4">
                      <span
                        class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2"
                      >
                        <i class="fas fa-star"></i>
                        Featured Launch
                      </span>
                      <span
                        class="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold"
                      >
                        Go
                      </span>
                    </div>
                    <h3 class="text-3xl font-bold mb-3 leading-tight">
                      ${dataLaunches1[0].name}
                    </h3>
                    <div
                      class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400"
                    >
                      <div class="flex items-center gap-2">
                        <i class="fas fa-building"></i>
                        <span>SpaceX</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <i class="fas fa-rocket"></i>
                        <span>${dataLaunches1[0].name.split(" ", 2).join(" ")}</span>
                      </div>
                    </div>
                    <div
                      class="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6"
                    >
                      <i class="fas fa-clock text-2xl text-blue-400"></i>
                      <div>
                        <p class="text-2xl font-bold text-blue-400">2</p>
                        <p class="text-xs text-slate-400">Days Until Launch</p>
                      </div>
                    </div>
                    <div class="grid xl:grid-cols-2 gap-4 mb-6">
                      <div class="bg-slate-900/50 rounded-xl p-4">
                        <p
                          class="text-xs text-slate-400 mb-1 flex items-center gap-2"
                        >
                          <i class="fas fa-calendar"></i>
                          Launch Date
                        </p>
                        <p class="font-semibold">${new Date(dataLaunches1[0].net).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
                      </div>
                      <div class="bg-slate-900/50 rounded-xl p-4">
                        <p
                          class="text-xs text-slate-400 mb-1 flex items-center gap-2"
                        >
                          <i class="fas fa-clock"></i>
                          Launch Time
                        </p>
                        <p class="font-semibold">${new Date(dataLaunches1[0].net).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}</p>
                      </div>
                      <div class="bg-slate-900/50 rounded-xl p-4">
                        <p
                          class="text-xs text-slate-400 mb-1 flex items-center gap-2"
                        >
                          <i class="fas fa-map-marker-alt"></i>
                          Location
                        </p>
                        <p class="font-semibold text-sm">${dataLaunches1[0].pad.location.name}</p>
                      </div>
                      <div class="bg-slate-900/50 rounded-xl p-4">
                        <p
                          class="text-xs text-slate-400 mb-1 flex items-center gap-2"
                        >
                          <i class="fas fa-globe"></i>
                          Country
                        </p>
<p class="font-semibold">United States of America</p>
                      </div>
                    </div>
                    <p class="text-slate-300 leading-relaxed mb-6">
                      ${dataLaunches1[0].mission.description}
                    </p>
                  </div>
                  <div class="flex flex-col md:flex-row gap-3">
                    <button
                      class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <i class="fas fa-info-circle"></i>
                      View Full Details
                    </button>
                    <div class="icons self-end md:self-center">
                      <button
                        class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
                      >
                        <i class="far fa-heart"></i>
                      </button>
                      <button
                        class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
                      >
                        <i class="fas fa-bell"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div
                    class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50"
                  >
                    <img src="${dataLaunches1[0].image.image_url}" class="h-full"  alt="${dataLaunches1[0].image.name}">
                    
                    <div
                      class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"
                    ></div>
                  </div>
                </div>`;

  let cartona = ``;
  for (let i = 1; i < dataLaunches1.length; i++)
    cartona += `
     <div
            class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer">
            <div class="relative h-48 bg-slate-900/50 flex items-center justify-center">
            <img src="${dataLaunches1[i].image.image_url}" alt="${dataLaunches1[i].image.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute top-3 right-3">
                <span class="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold">
                  ${i === 1 ? `Go` : `TBC`}
                </span>
              </div>
            </div>
            <div class="p-5">
              <div class="mb-3">
                <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  ${dataLaunches1[i].name}
                </h4>
                <p class="text-sm text-slate-400 flex items-center gap-2">
                  <i class="fas fa-building text-xs"></i>
                  ${dataLaunches1[i].image.credit}
                  </p>
              </div>
              <div class="space-y-2 mb-4">
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-calendar text-slate-500 w-4"></i>
                  <span class="text-slate-300">${new Date(dataLaunches1[i].net).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-clock text-slate-500 w-4"></i>
                  <span class="text-slate-300">${new Date(dataLaunches1[i].net).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-rocket text-slate-500 w-4"></i>
                  <span class="text-slate-300">${dataLaunches1[i].name.split(" ", 2).join(" ")}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                  <span class="text-slate-300 line-clamp-1">${dataLaunches1[i].pad.location.name}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
                <button
                  class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">
                  Details
                </button>
                <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <i class="far fa-heart"></i>
                </button>
              </div>
            </div>
          </div>

    `;
  document.getElementById("launches-grid").innerHTML = cartona;
};

// The Planets Api --------------------->

//Api

async function GetPlanets() {
  let response = await fetch(
    "https://solar-system-opendata-proxy.vercel.app/api/planets",
  );
  let dataPlanets = await response.json();
  changePlanet(dataPlanets.bodies);
}
GetPlanets();

const allTogglePlanets = document.querySelectorAll(
  "#planets-grid .planet-card",
);
const displayPlanetAllData = document.querySelector(".displayPlanetAllData");

function changePlanet(dataPlanets) {
  for (let i = 0; i < dataPlanets.length; i++) {
    allTogglePlanets[i].addEventListener("click", () => {
      displayPlanetAllData.innerHTML = `
        <div class="xl:col-span-2 bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
            <div class=" flex flex-col xl:flex-row xl:items-start space-y-4 xl:space-y-0">
              <div class="relative h-48 w-48 md:h-64 md:w-64 shrink-0 mx-auto xl:mr-6">
                <img id="planet-detail-image" class="w-full h-full object-contain" src="${dataPlanets[i].image}"
                  alt="${dataPlanets[i].description}" />
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-3 md:mb-4">
                  <h3 id="planet-detail-name" class="text-2xl md:text-3xl font-space font-bold">
                    ${dataPlanets[i].name == "La Terre" ? "Earth" : dataPlanets[i].name}
                  </h3>
                  <button class="w-10 h-10 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
                <p id="planet-detail-description"
                  class="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
           ${dataPlanets[i].description}
                </p>
              </div>
            </div>

            <div class=" grid grid-cols-2 gap-2 md:gap-4 mt-4">
              <div class="bg-slate-900/50 rounded-lg p-3 md:p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-ruler text-xs"></i>
                  <span class="text-xs">Semimajor Axis</span>
                </p>
                <p id="planet-distance" class="text-sm md:text-lg font-semibold">
               ${(dataPlanets[i].semimajorAxis / 1000000).toFixed(1)}M km
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-circle"></i>
                  Mean Radius
                </p>
                <p id="planet-radius" class="text-lg font-semibold">
               ${dataPlanets[i].meanRadius} km
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-weight"></i>
                  Mass
                </p>
                <p id="planet-mass" class="text-lg font-semibold">
                 ${dataPlanets[i].mass.massValue} × 10^${dataPlanets[i].mass.massExponent} kg
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-compress"></i>
                  Density
                </p>
                <p id="planet-density" class="text-lg font-semibold">
                 ${dataPlanets[i].density} g/cm³
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-sync-alt"></i>
                  Orbital Period
                </p>
                <p id="planet-orbital-period" class="text-lg font-semibold">
                  ${dataPlanets[i].sideralOrbit.toFixed(2)} days
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-redo"></i>
                  Rotation Period
                </p>
                <p id="planet-rotation" class="text-lg font-semibold">
                  ${dataPlanets[i].sideralRotation.toFixed(2)} hours
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-moon"></i>
                  Moons
                </p>
                <p id="planet-moons" class="text-lg font-semibold">${dataPlanets[i].moons ? dataPlanets[i].moons.length : 0}</p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-arrows-alt-v"></i>
                  Gravity
                </p>
                <p id="planet-gravity" class="text-lg font-semibold">
${dataPlanets[i].gravity} m/s²
                </p>
              </div>
            </div>
          </div>


        
          <div class="space-y-6">
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 class="font-semibold mb-4 flex items-center">
                <i class="fas fa-user-astronaut text-purple-400 mr-2"></i>
                Discovery Info
              </h4>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Discovered By</span>
                  <span id="planet-discoverer" class="font-semibold text-right">${dataPlanets[i].discoveredBy ? dataPlanets[i].discoveredBy : "Unknown since antiquity"}</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Discovery Date</span>
                  <span id="planet-discovery-date" class="font-semibold">${dataPlanets[i].discoveryDate ? dataPlanets[i].discoveryDate : "ِAcient  time "}</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Body Type</span>
                  <span id="planet-body-type" class="font-semibold">${dataPlanets[i].bodyType}</span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-slate-400">Volume</span>
                  <span id="planet-volume" class="font-semibold">${dataPlanets[i].vol ? dataPlanets[i].vol.volValue + " × 10^" + dataPlanets[i].vol.volExponent + " km³" : "N/A"}</span>
                </div>
              </div>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 class="font-semibold mb-4 flex items-center">
                <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
                Quick Facts
              </h4>
              <ul id="planet-facts" class="space-y-3 text-sm">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                  <span class="text-slate-300">Mass: ${dataPlanets[i].mass.massValue} × 10^${dataPlanets[i].mass.massExponent} kg</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                  <span class="text-slate-300">Surface gravity: ${dataPlanets[i].gravity} m/s²</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                  <span class="text-slate-300">Density: ${dataPlanets[i].density} g/cm³</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                  <span class="text-slate-300">Axial tilt: ${dataPlanets[i].axialTilt}°</span>
                </li>
              </ul>
            </div>


        
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 class="font-semibold mb-4 flex items-center">
                <i class="fas fa-satellite text-blue-400 mr-2"></i>
                Orbital Characteristics
              </h4>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Perihelion</span>
                  <span id="planet-perihelion" class="font-semibold">${(dataPlanets[i].perihelion / 1000000).toFixed(1)}M km</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Aphelion</span>
                  <span id="planet-aphelion" class="font-semibold">${(dataPlanets[i].aphelion / 1000000).toFixed(1)}M km</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Eccentricity</span>
                  <span id="planet-eccentricity" class="font-semibold">${dataPlanets[i].eccentricity.toFixed(5)}</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Inclination</span>
                  <span id="planet-inclination" class="font-semibold">${dataPlanets[i].inclination.toFixed(2)}°</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Axial Tilt</span>
                  <span id="planet-axial-tilt" class="font-semibold">${dataPlanets[i].axialTilt.toFixed(2)}°</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Avg Temperature</span>
                  <span id="planet-temp" class="font-semibold">${dataPlanets[i].avgTemp - 273} °C</span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-slate-400">Escape Velocity</span>
                  <span id="planet-escape" class="font-semibold">${(dataPlanets[i].escape / 1000).toFixed(2)} km/s</span>
                </div>
              </div>
            </div>
            <button class="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              <i class="fas fa-book mr-2"></i>Learn More
            </button>
          </div>
        
        `;
    });
  }
}

//          (  Todat in Space  )
// function showDate() {
//   dateText.textContent = new Date(theCalenderChoose.value).toLocaleDateString(
//     "en-US",
//     { month: "short",
//        day: "numeric",
//        year: "numeric" },
//   );
// }
// theCalenderChoose.addEventListener("change", showDate);

const setTheDateToday = document.getElementById("today-apod-btn");

const theCalenderChoose = document.getElementById("apod-date-input");
const dateText = document.querySelector(".setDate");


setTheDateToday.addEventListener("click", () => {
  dateText.innerHTML = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
});


theCalenderChoose.addEventListener("change", function () {
  dateText.textContent = new Date(theCalenderChoose.value).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );
});



//   API

async function  getTodayPhoto()
{
  let response = await  fetch(`https://api.nasa.gov/planetary/apod?api_key=6x5eBIlEyofM32ocgo5kBue7SW4DOAR028AUCWix`)
  let data =  await response.json()
console.log(data)
displayTheDayPhoto(data)
displayTheDayPhotoData(data)
}
getTodayPhoto()

function  displayTheDayPhoto(data)
{
    document.getElementById("apod-loading").classList.add("hidden")
document.getElementById("apod-image").setAttribute("src" , `${data.hdurl}`) 
document.getElementById("apod-image").classList.remove("hidden")
}

function displayTheDayPhotoData(data)
{
document.querySelector(".planetInfo").innerHTML=`
 <div class="bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 id="apod-title" class="text-lg md:text-2xl font-semibold mb-3 md:mb-4">
${data.title}     
         </h3>
              <div class="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                <span id="apod-date-detail"><i class="far fa-calendar mr-2"></i>${data.date}</span>
              </div>
              <p id="apod-explanation" class="text-slate-300 leading-relaxed mb-4">
                ${data.explanation}
              </p>
              <div id="apod-copyright" class="text-xs text-slate-400 italic mb-4">
                &copy; NASA/JPL
              </div>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 class="font-semibold mb-3 flex items-center">
                <i class="fas fa-info-circle text-blue-400 mr-2"></i>
                Image Details
              </h4>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="text-slate-400">Date</span>
                  <span id="apod-date-info" class="font-medium">${data.date}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Media Type</span>
                  <span id="apod-media-type" class="font-medium">Image</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Source</span>
                  <span class="font-medium">${data.service_version}</span>
                </div>
              </div>
            </div>
`
}