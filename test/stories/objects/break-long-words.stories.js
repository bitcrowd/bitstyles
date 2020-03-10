import Readme from './break-long-words.md';

export default {
  title: 'Objects/Break Long Words',
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const breakLongWords = () => `
  <p class="o-break-long-words">LongcontentwithnolinebreaksgoeshereLongcontentwithnolinebreaksgoeshereLongcontentwithnolinebreaksgoeshereLongcontentwithnolinebreaksgoeshereLongcontentwithnolinebreaksgoeshere</p>
`;
