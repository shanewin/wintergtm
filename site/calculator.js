// ROI Calculator
(function () {
  const dealSizeEl = document.getElementById('deal-size');
  const lifetimeEl = document.getElementById('lifetime');
  const numListsEl = document.getElementById('num-lists');

  const outCost = document.getElementById('out-cost');
  const outCostSub = document.getElementById('out-cost-sub');
  const outBreakeven = document.getElementById('out-breakeven');
  const outRoi = document.getElementById('out-roi');
  const outRoiSub = document.getElementById('out-roi-sub');

  function getPricePerList(n) {
    if (n >= 5) return 750;
    if (n >= 3) return 850;
    return 1000;
  }

  function formatCurrency(n) {
    return '$' + n.toLocaleString('en-US');
  }

  function calculate() {
    const dealSize = parseFloat(dealSizeEl.value) || 0;
    const lifetime = parseFloat(lifetimeEl.value) || 1;
    const numLists = parseInt(numListsEl.value) || 1;

    const pricePerList = getPricePerList(numLists);
    const monthlyCost = pricePerList * numLists;
    const ltv = dealSize * lifetime;
    const breakeven = ltv > 0 ? monthlyCost / ltv : 0;
    const annualCost = monthlyCost * 12;
    const assumedDeals = 4;
    const annualRevenue = ltv * assumedDeals;
    const roi = annualCost > 0 ? annualRevenue / annualCost : 0;

    outCost.textContent = formatCurrency(monthlyCost);
    outCostSub.innerHTML = numLists + ' &times; ' + formatCurrency(pricePerList) + '/mo';
    outBreakeven.textContent = breakeven.toFixed(2);
    outRoi.innerHTML = roi.toFixed(1) + '&times;';
    outRoiSub.textContent = 'assuming ' + assumedDeals + ' new deals/yr';
  }

  dealSizeEl.addEventListener('input', calculate);
  lifetimeEl.addEventListener('input', calculate);
  numListsEl.addEventListener('input', calculate);

  calculate();
})();
