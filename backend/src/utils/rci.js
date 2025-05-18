export const rciMap = {
  "PHQ-9": { dp: 5.2, alfa: 0.89, media: 6.1 },
  "GAD-7": { dp: 4.8, alfa: 0.91, media: 5.6 },
  "DASS-21": { dp: 13.4, alfa: 0.90, media: 19.3 }
};

export const calcRCI = (pre, post, dp, alfa) => {
  const sem = dp * Math.sqrt(1 - alfa);
  const diff = post - pre;
  const rci = diff / (sem * Math.sqrt(2));
  return {
    rci: rci.toFixed(2),
    confiavel: Math.abs(rci) >= 1.96
  };
};

