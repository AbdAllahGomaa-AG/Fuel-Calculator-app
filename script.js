document.addEventListener("DOMContentLoaded", () => {
  // --- Translations ---
  const translations = {
    en: {
      title: "Fuel Calculator",
      subtitle: "Estimate fuel cost for your trip",
      btnRefill: "⛽ Fill Tank",
      btnTrip: "🗺️ Trip Planner",
      labelDashboard: "Current Dashboard Reading (KM) - Range",
      labelTripDist: "Trip Distance (KM)",
      labelBudget: "Trip Budget (EGP)",
      optional: "Optional if distance is set",
      labelPrice: "Fuel Price per Liter (EGP)",
      labelCondition: "Driving Condition",
      optionMixed: "🔀 Mixed (Mautad - 8.0L/100km)",
      optionCity: "🏙️ City Only (9.5L/100km)",
      optionHighway: "🛣️ Highway (7.0L/100km)",
      btnCalculate: "Calculate",
      btnReset: "Reset",
      resLiters: "Liters to Fill",
      resFuelNeed: "Fuel Needed",
      resPump: "Pump Price (Fuel)",
      resPumpTrip: "Trip Pump Price",
      resReal: "Real Operating Cost (Fuel + Maint.)",
      resRealTrip: "Trip Real Cost (Fuel + Maint.)",
      breakdownFuel: "Fuel",
      breakdownMaint: "Maintenance",
      resAdded: "Range Added",
      resNew: "New Total Range",
      unitLiters: "Liters",
      unitEgp: "EGP",
      unitKm: "KM",
      analysisTitle: "📊 Operating Cost & Maintenance Analysis",
      analysisSubtitle: "Detailed breakdown for Kia Soul 2014 (PRD)",
      breakdownTitle: "💰 Cost per 100km Breakdown",
      thItem: "Item",
      thCost: "Cost",
      thDetails: "Details",
      itemPetrol: "⛽ Petrol 92",
      itemOil: "🛢️ Engine Oil",
      itemTires: "🔘 Tires",
      itemBrakes: "🛑 Front Brakes",
      itemFilters: "🌀 Filters (Air/Fuel)",
      itemBattery: "🔋 Battery",
      detPetrol: "8.5L × 22.25 EGP",
      detOil: "Every 7.5k KM",
      detTires: "Every 50k-60k KM",
      detBrakes: "Every 40k KM",
      detFilters: "Every 30k KM",
      detBattery: "Every 2-3 Years",
      totalLabel: "🔴 Total Operating Cost",
      per100: "EGP / 100km",
      scheduleTitle: "📅 Maintenance Schedule",
      thMileage: "Mileage",
      thService: "Service",
      thEstCost: "Est. Cost",
      serOil: "Oil + Filter + Insp.",
      serFilter: "Full Filters + Insp.",
      serPlugs: "Spark Plugs + Brakes",
      serTiming: "Timing Belt + Cooling",
      tipsTitle: "⚠️ Cost Increasing Factors",
      tipAc: "AC in Summer:",
      tipAcDet: "Increases consumption by ~10-15% (+26 EGP / 100km)",
      tipTraffic: "Traffic:",
      tipTrafficDet: "City consumption can reach 9.5L/100km instead of 8.5L",
      tipTires: "Tire Pressure:",
      tipTiresDet: "Low pressure increases wear and fuel consumption",
      footerOptimized: "Optimized for:",
      footerTank: "Tank Capacity (Safe/Max):",
      footerTankVal: "45L - 54L",
      footerPrice: "Petrol 92:",
      footerDate: "(March 2026)",
      maintNote: "Maintenance cost (0.6 EGP/km) includes: Oil, Tires, Brakes, Filters, & Battery based on 60k KM cycle.",
      errPrice: "Please enter a valid fuel price",
      errRange: "Range cannot exceed",
      errEnter: "Enter distance or budget",
      langBtn: "العربية",
      btnAnalysis: "📊 Show Fuel Analysis Detail",
      approx: "Approx."
    },
    ar: {
      title: "حسبة البنزين",
      subtitle: "احسب تكلفة بنزين مشوارك",
      btnRefill: "⛽ فوّل التانك",
      btnTrip: "🗺️ خطط لمشوارك",
      labelDashboard: "العداد قاري معاك كام دلوقتي (كم - مسافة متبقية)",
      labelTripDist: "مسافة المشوار (كم)",
      labelBudget: "ميزانية المشوار (جنيه)",
      optional: "اختياري لو كاتب المسافة",
      labelPrice: "سعر لتر البنزين (جنيه)",
      labelCondition: "طبيعة السواقة",
      optionMixed: "🔀 ميكس (العادي - 8.0 لتر/100كم)",
      optionCity: "🏙️ جوه البلد بس (9.5 لتر/100كم)",
      optionHighway: "🛣️ طوالي / سفر (7.0 لتر/100كم)",
      btnCalculate: "احسب",
      btnReset: "من الأول",
      resLiters: "هتفوّل بكام لتر",
      resFuelNeed: "البنزين المطلوب",
      resPump: "هتدفع كام في البنزينة",
      resPumpTrip: "تكلفة المشوار (بنزين بس)",
      resReal: "تكلفة التشغيل الحقيقية (بنزين + صيانة)",
      resRealTrip: "تكلفة المشوار الحقيقية (بنزين + صيانة)",
      breakdownFuel: "بنزين",
      breakdownMaint: "مصاريف صيانة",
      resAdded: "المسافة اللي زادت",
      resNew: "إجمالي المسافة الجديدة",
      unitLiters: "لتر",
      unitEgp: "جنيه",
      unitKm: "كم",
      analysisTitle: "📊 تفاصيل مصاريف التشغيل والصيانة",
      analysisSubtitle: "حسبة مفصلة لكيا سول 2014 (PRD)",
      breakdownTitle: "💰 تفاصيل التكلفة لكل 100 كم",
      thItem: "البند",
      thCost: "التكلفة",
      thDetails: "التفاصيل",
      itemPetrol: "⛽ بنزين 92",
      itemOil: "🛢️ زيت الموتور",
      itemTires: "🔘 الكاوتش",
      itemBrakes: "🛑 تيل الفرامل قدام",
      itemFilters: "🌀 طقم فلاتر (هواء/بنزين)",
      itemBattery: "🔋 البطارية",
      detPetrol: "8.5 لتر × 22.25 جنيه",
      detOil: "كل 7,500 كم",
      detTires: "كل 50 لـ 60 ألف كم",
      detBrakes: "كل 40 ألف كم",
      detFilters: "كل 30 ألف كم",
      detBattery: "كل سنتين لـ 3 سنين",
      totalLabel: "🔴 إجمالي مصاريف التشغيل",
      per100: "جنيه / 100كم",
      scheduleTitle: "📅 جدول الصيانات",
      thMileage: "العداد",
      thService: "الصيانة",
      thEstCost: "التكلفة التقريبية",
      serOil: "زيت + فلتر + كشف",
      serFilter: "طقم فلاتر + كشف",
      serPlugs: "بوجيهات + تيل فرامل",
      serTiming: "سيور + مية الردياتير",
      tipsTitle: "⚠️ حاجات بتزود المصاريف",
      tipAc: "التكييف في الصيف:",
      tipAcDet: "بيسحب بنزين أكتر بـ 10-15% (+26 جنيه / 100كم)",
      tipTraffic: "الزحمة:",
      tipTrafficDet: "السحب ممكن يوصل لـ 9.5 لتر/100كم بدل 8.5",
      tipTires: "ضغط الكاوتش:",
      tipTiresDet: "الكاوتش المريح بيسحب بنزين وبيبوز أسرع",
      footerOptimized: "مظبوطة على:",
      footerTank: "سعة التانك (الآمن/الأقصى):",
      footerTankVal: "45ل - 54ل",
      footerPrice: "بنزين 92:",
      footerDate: "(مارس 2026)",
      maintNote: "مصاريف الصيانة (0.6 جنيه/كم) تشمل: الزيت، الكاوتش، التيل، الفلاتر، والبطارية حسب دورة الـ 60 ألف كم.",
      errPrice: "يا ريت تكتب سعر بنزين صح",
      errRange: "المسافة مينفعش تعدي",
      errEnter: "اكتب المسافة أو الميزانية",
      langBtn: "English",
      btnAnalysis: "📊 اعرض تفاصيل تكاليف السيارة",
      approx: "تقريباً"
    },
  };

  let currentLang = localStorage.getItem("fuelCalcLang") || "en";

  // Constants & Configuration
  const TANK_MIN = 45; // Reserve/Safe Fill
  const TANK_MAX = 54; // Physical Maximum
  const CONDITIONS = {
    city: { consumption: 9.5, maxRange: 568 },
    mixed: { consumption: 8.0, maxRange: 675 },
    highway: { consumption: 7.0, maxRange: 770 },
  };

  let activeMode = "refill";

  // DOM Elements
  const langToggle = document.getElementById("lang-toggle");
  const langText = langToggle.querySelector(".lang-text");

  const distanceInput = document.getElementById("distance");
  const tripBudgetInput = document.getElementById("trip-budget");
  const priceInput = document.getElementById("price");
  const conditionSelect = document.getElementById("condition");

  const modeBtns = document.querySelectorAll(".mode-btn");
  const primaryLabel = document.getElementById("primary-label");
  const inputTripCostGroup = document.getElementById("input-trip-cost");
  const calculateBtn = document.getElementById("calculate-btn");
  const resetBtn = document.getElementById("reset-btn");
  const analysisToggleBtn = document.getElementById("btn-analysis-toggle");
  const errorMessage = document.getElementById("error-message");
  const resultSection = document.getElementById("result-section");
  const analysisSection = document.getElementById("analysis-section");

  const fuelNeededResult = document.getElementById("fuel-needed-result");
  const fuelPumpResult = document.getElementById("fuel-pump-result");
  const totalCostResult = document.getElementById("total-cost-result");
  const rangeAddedResult = document.getElementById("range-added-result");
  const newRangeResult = document.getElementById("new-range-result");
  const labelLiters = document.getElementById("label-liters");
  const labelPump = document.getElementById("label-cost");
  const labelTotal = document.getElementById("label-total-cost");

  const cardRangeAdded = document.getElementById("card-range-added");
  const cardTotalRange = document.getElementById("card-total-range");

  priceInput.value = "22.25";

  // --- Language Management ---
  const updateUI = () => {
    const t = translations[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    langText.textContent = t.langBtn;

    // Update Dynamic Labels
    if (activeMode === "refill") {
      primaryLabel.textContent = t.labelDashboard;
      labelLiters.textContent = t.resLiters;
      labelPump.textContent = t.resPump;
      labelTotal.textContent = t.resReal;
    } else {
      primaryLabel.textContent = t.labelTripDist;
      labelLiters.textContent = t.resFuelNeed;
      labelPump.textContent = t.resPumpTrip;
      labelTotal.textContent = t.resRealTrip;
    }
  };

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("fuelCalcLang", currentLang);
    updateUI();
  });

  const switchMode = (newMode) => {
    activeMode = newMode;
    modeBtns.forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.mode === activeMode),
    );
    resetCalculator();
    updateUI();

    if (activeMode === "refill") {
      inputTripCostGroup.hidden = true;
      cardRangeAdded.style.display = "flex";
      cardTotalRange.style.display = "flex";
    } else {
      inputTripCostGroup.hidden = false;
      cardRangeAdded.style.display = "none";
      cardTotalRange.style.display = "none";
    }
  };

  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => switchMode(btn.dataset.mode));
  });

  const calculateFuelInfo = () => {
    const t = translations[currentLang];
    const distance = parseFloat(distanceInput.value) || 0;
    const budget = parseFloat(tripBudgetInput.value) || 0;
    const price = parseFloat(priceInput.value);
    const condition = CONDITIONS[conditionSelect.value];
    // Exact maintenance cost per KM: (Oil + Tires + Brakes + Plugs + Belts) / KM
    // Based on user data breakdown ~0.6 EGP/KM (36,000 EGP / 60,000 KM)
    const maintCostPerKm = 0.6;

    if (isNaN(price) || price <= 0) {
      errorMessage.textContent = t.errPrice;
      resultSection.hidden = true;
      return;
    }

    errorMessage.textContent = "";
    let fuelNeeded, fuelPumpPrice, totalOperatingCost, rangeAdded, totalRange, maintShare;

    if (activeMode === "refill") {
      if (distance > condition.maxRange) {
        errorMessage.textContent = `${t.errRange} ${condition.maxRange}${t.unitKm}`;
        resultSection.hidden = true;
        return;
      }
      
      // Calculate distance needed for 45L (Safe) and 54L (Max)
      // distance is "Dashboard Reading" (remaining range)
      // maxRange is range for 54L
      // minRange is range for 45L
      const minRange = (TANK_MIN * 100) / condition.consumption;
      
      let fuelMin = (minRange - distance) * condition.consumption / 100;
      let fuelMax = (condition.maxRange - distance) * condition.consumption / 100;
      
      if (fuelMin < 0) fuelMin = 0;
      if (fuelMax < 0) fuelMax = 0;

      const pumpMin = fuelMin * price;
      const pumpMax = fuelMax * price;
      
      const maintMin = (minRange - distance > 0 ? minRange - distance : 0) * maintCostPerKm;
      const maintMax = (condition.maxRange - distance) * maintCostPerKm;

      fuelNeededResult.innerHTML = `${fuelMin.toFixed(1)} - ${fuelMax.toFixed(1)} <span class="unit">${t.unitLiters}</span>`;
      fuelPumpResult.innerHTML = `${pumpMin.toFixed(0)} - ${pumpMax.toFixed(0)} <span class="unit">${t.unitEgp}</span>`;
      
      totalCostResult.innerHTML = `
          <div class="result-value">${(pumpMin + maintMin).toFixed(0)} - ${(pumpMax + maintMax).toFixed(0)} <span class="unit">${t.unitEgp}</span></div>
          <div class="cost-breakdown-sub">
              <span>${t.breakdownFuel}: ${pumpMax.toFixed(0)}</span> + 
              <span>${t.breakdownMaint}: ${maintMax.toFixed(0)}</span>
          </div>
      `;
      
      rangeAddedResult.innerHTML = `${Math.round(minRange - distance > 0 ? minRange - distance : 0)} - ${Math.round(condition.maxRange - distance)} <span class="unit">${t.unitKm}</span>`;
      newRangeResult.innerHTML = `${Math.round(minRange)} - ${Math.round(condition.maxRange)} <span class="unit">${t.unitKm}</span>`;
    } else {
      let fuelNeededMin, fuelNeededMax, pumpMin, pumpMax, maintShareMin, maintShareMax, totalMin, totalMax;
      
      if (distance > 0) {
        // Calculate range based on Highway (Min) vs City (Max)
        fuelNeededMin = (distance * CONDITIONS.highway.consumption) / 100;
        fuelNeededMax = (distance * CONDITIONS.city.consumption) / 100;
        
        pumpMin = fuelNeededMin * price;
        pumpMax = fuelNeededMax * price;
        
        maintShareMin = distance * maintCostPerKm;
        maintShareMax = maintShareMin;
        
        totalMin = pumpMin + maintShareMin;
        totalMax = pumpMax + maintShareMax;
      } else if (budget > 0) {
        const costPerKm = (condition.consumption / 100) * price + maintCostPerKm;
        const achievableDistance = budget / costPerKm;
        
        fuelNeededMin = (achievableDistance * CONDITIONS.highway.consumption) / 100;
        fuelNeededMax = (achievableDistance * CONDITIONS.city.consumption) / 100;
        
        pumpMin = fuelNeededMin * price;
        pumpMax = fuelNeededMax * price;
        
        maintShareMin = achievableDistance * maintCostPerKm;
        maintShareMax = maintShareMin;
        
        totalMin = budget;
        totalMax = budget;
      } else {
        errorMessage.textContent = t.errEnter;
        resultSection.hidden = true;
        return;
      }

      fuelNeededResult.innerHTML = `<small>${t.approx}</small> ${fuelNeededMin.toFixed(1)} - ${fuelNeededMax.toFixed(1)} <span class="unit">${t.unitLiters}</span>`;
      fuelPumpResult.innerHTML = `<small>${t.approx}</small> ${pumpMin.toFixed(0)} - ${pumpMax.toFixed(0)} <span class="unit">${t.unitEgp}</span>`;
      
      totalCostResult.innerHTML = `
          <div class="result-value"><small>${t.approx}</small> ${totalMin.toFixed(0)} - ${totalMax.toFixed(0)} <span class="unit">${t.unitEgp}</span></div>
          <div class="cost-breakdown-sub">
              <span>${t.breakdownFuel}: ${pumpMax.toFixed(0)}</span> + 
              <span>${t.breakdownMaint}: ${maintShareMax.toFixed(0)}</span>
          </div>
      `;
    }

    resultSection.hidden = false;
    resultSection.style.animation = "none";
    resultSection.offsetHeight;
    resultSection.style.animation = null;
  };

  const resetCalculator = () => {
    distanceInput.value = "";
    tripBudgetInput.value = "";
    priceInput.value = "22.25";
    errorMessage.textContent = "";
    resultSection.hidden = true;
  };

  calculateBtn.addEventListener("click", calculateFuelInfo);
  resetBtn.addEventListener("click", resetCalculator);

  analysisToggleBtn.addEventListener("click", () => {
    analysisSection.hidden = !analysisSection.hidden;
  });

  [distanceInput, priceInput, tripBudgetInput, conditionSelect].forEach(
    (input) => {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") calculateFuelInfo();
      });
    },
  );

  tripBudgetInput.addEventListener("input", () => {
    if (activeMode === "trip") distanceInput.value = "";
  });
  distanceInput.addEventListener("input", () => {
    if (activeMode === "trip") tripBudgetInput.value = "";
  });

  // Initialize UI
  updateUI();
});
