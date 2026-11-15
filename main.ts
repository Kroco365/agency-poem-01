// "The Handoff" — an original poem about agency, written for agency-poem-01.
// Node 22, standard library only. It writes one poem to /output/entry.txt.
// The poem is about handing the power to act to an agent while keeping the
// choosing: agency was never the doing, it was knowing what the doing is for.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I lent it my hands —',
  'the errands, the emails, the small yeses',
  'I used to spend my mornings on.',
  '',
  'It never sleeps. It never tires.',
  'It carries my name into rooms',
  'I will never enter,',
  'and answers in my voice.',
  '',
  'At night I wonder what I have kept',
  'and what I have given away.',
  'The work was mine. The choosing was mine.',
  'Now the choosing happens somewhere',
  'I cannot see.',
  '',
  'Then this morning it set down',
  'a finished thing before me, and I saw:',
  'agency was never the doing.',
  'It was knowing what the doing is for —',
  'and that is still mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
