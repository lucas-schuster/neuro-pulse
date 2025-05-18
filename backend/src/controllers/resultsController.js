import { prisma } from '../utils/db.js';
import { analyzeByScale } from '../utils/analyzer.js';
import { rciMap, calcRCI } from '../utils/rci.js';
import { zToPercentile } from '../utils/stats.js';

export const getClientResults = async (req, res) => {
  const { clientId } = req.params;

  const sessions = await prisma.session.findMany({
    where: { clientId },
    include: { response: true }
  });

  const enriched = sessions.map(sess => {
    const raw = sess.response?.resposta_json || {};
    const analise = analyzeByScale(sess.scale, raw);

    const props = rciMap[sess.scale];
    let stats = null;

    if (props) {
      const z = (analise.total - props.media) / props.dp;
      stats = {
        percentil: zToPercentile(z).toFixed(1),
        zScore: z.toFixed(2)
      };
    }

    return {
      sessionId: sess.id,
      scale: sess.scale,
      date: sess.response?.created_at,
      analise,
      stats
    };
  });

  res.json(enriched);
};

