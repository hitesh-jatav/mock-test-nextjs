import { clozetest } from "./english/cloze-test";
import { doubleFillers } from "./english/double-fillers";
import { errorSpotting } from "./english/error-spotting";
import { fillInTheBlanks } from "./english/fill-in-the-blanks";
import { inequality } from "./english/inequalities";
import { parajumbles } from "./english/para-jumbles";
import { paragraphCompletion } from "./english/paragraph-completion";
import { readingComprehensions } from "./english/reading-comprehension";
import { sentenceCompletion } from "./english/sentence-completion";
import { sentenceImprovement } from "./english/sentence-improvement";
import { tenses } from "./english/tenses";
import { vocabulary } from "./english/vocabulary";
import { wordAssociation } from "./english/word-association";
import { wordUsage } from "./english/word-usage";
import { mensuration } from "./quants/mensuration";
import { mixtures } from "./quants/mixtures";
import { numberSystem } from "./quants/numberSystem";
import { percentage } from "./quants/percentage";
import { permutationCombinations } from "./quants/permutationsCombinations";
import { profitLoss } from "./quants/profitLoss";
import { quadraticEquation } from "./quants/quadratic-equation";
import { ratioProportion } from "./quants/ratio-proportion";
import { sequenceSeries } from "./quants/sequence-series";
import { sici } from "./quants/si-ci";
import { simplification } from "./quants/simplications";
import { surdsIndices } from "./quants/surds-indices";
import { timeDistance } from "./quants/time-distance";
import { timeWork } from "./quants/workTime";
import { alphabetTest } from "./reasoning/alphabet-test";
import { alphanumericSeriesQuestions } from "./reasoning/alphanumericSeries";
import { bloodRelations } from "./reasoning/blood-relations";
import { codedInequalitites } from "./reasoning/coded-inequalitites";
import { codingDecoding } from "./reasoning/coding-decoding";
import { dataSufficiency } from "./reasoning/data-sufficiency";
import { directionQuestions } from "./reasoning/directions";
import { inputOutput } from "./reasoning/input-output";
import { logicalReasoning } from "./reasoning/logical-reasoning";
import { puzzle } from "./reasoning/puzzle";
import { rankingOrder } from "./reasoning/ranking-order";
import { seatingArrangement } from "./reasoning/seating-arrangement";
import { syllogism } from "./reasoning/syllogism";
import { tabulation } from "./reasoning/tabulation";

export const dataPaths = {
  english: {
    "reading-comprehension": readingComprehensions,
    "fill-in-the-blanks": fillInTheBlanks,
    "cloze-test": clozetest,
    vocabulary: vocabulary,
    "sentence-rearrangement": parajumbles,
    "paragraph-completion": paragraphCompletion,
    "error-spotting": errorSpotting,
    "word-association": wordAssociation,
    "sentence-improvement": sentenceImprovement,
    "sentence-completion": sentenceCompletion,
    tenses: tenses,
    "double-fillers": doubleFillers,
    "word-usage": wordUsage,
    inequalities: inequality,
    // "pair-formation": "",
  },
  quant: {
    simplification: simplification,
    "profit-loss": profitLoss,
    mixtures: mixtures,
    "permutation-combination": permutationCombinations,
    "work-time": timeWork,
    "sequence-series": sequenceSeries,
    "si-ci": sici,
    "surds-indices": surdsIndices,
    mensuration: mensuration,
    "time-distance": timeDistance,
    // "data-interpretation": "",
    "ratio-proportion": ratioProportion,
    "number-systems": numberSystem,
    percentage: percentage,
    "quadratic-equation": quadraticEquation,
  },
  reasoning: {
    "alphanumeric-series": alphanumericSeriesQuestions,
    directions: directionQuestions,
    "logical-reasoning": logicalReasoning,
    "data-sufficiency": dataSufficiency,
    "ranking-order": rankingOrder,
    "alphabet-test": alphabetTest,
    "seating-arrangement": seatingArrangement,
    "coded-inequalities": codedInequalitites,
    puzzle: puzzle,
    syllogism: syllogism,
    "blood-relations": bloodRelations,
    "coding-decoding": codingDecoding,
    "input-output": inputOutput,
    tabulation: tabulation,
  },
};
