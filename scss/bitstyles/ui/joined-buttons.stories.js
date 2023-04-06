import Button from '../atoms/button/Button';
import JoinedButtons from './JoinedButtons';
import icons from '../../../assets/images/icons.svg';

export default {
  title: 'UI/Buttons/Joined',
  component: JoinedButtons,
  subcomponents: Button,
};

// ***** Default size, each shape & color ****************** //

export const PlusMinusIconsOutline = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-minus"></use></svg><span class="u-sr-only">Remove</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const PlusMinusIconsOutlinePressed = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-minus"></use></svg><span class="u-sr-only">Remove</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
        ariaPressed: 'true',
      }),
    ],
  });

export const NextPreviousIconsOutline = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-left"></use></svg><span class="u-sr-only">Previous</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-sr-only">Next</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const NextPreviousIconsOutlinePressed = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-left"></use></svg><span class="u-sr-only">Previous</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
        ariaPressed: 'true',
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-sr-only">Next</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const PlusMinusIconsSecondary = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-minus"></use></svg><span class="u-sr-only">Remove</span>`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const PlusMinusIconsSecondaryPressed = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-minus"></use></svg><span class="u-sr-only">Remove</span>`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-plus"></use></svg><span class="u-sr-only">Add</span>`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
        ariaPressed: 'true',
      }),
    ],
  });

export const PaginationOutline = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-left"></use></svg><span class="u-sr-only">Previous</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `1`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `2`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `3`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `4`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-sr-only">Next</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const PaginationOutlinePressed = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-left"></use></svg><span class="u-sr-only">Previous</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `1`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
        ariaPressed: 'true',
      }),
      Button({
        children: `2`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `3`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `4`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-sr-only">Next</span>`,
        colorVariant: ['outline'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const PaginationSecondary = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-left"></use></svg><span class="u-sr-only">Previous</span>`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `1`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `2`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `3`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `4`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-sr-only">Next</span>`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const PaginationSecondaryPressed = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-left"></use></svg><span class="u-sr-only">Previous</span>`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `1`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
        ariaPressed: 'true',
      }),
      Button({
        children: `2`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `3`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `4`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-sr-only">Next</span>`,
        colorVariant: ['secondary'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const PaginationTransparent = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-left"></use></svg><span class="u-sr-only">Previous</span>`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `1`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `2`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `3`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `4`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-sr-only">Next</span>`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
    ],
  });

export const PaginationTransparentPressed = () =>
  JoinedButtons({
    children: [
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-left"></use></svg><span class="u-sr-only">Previous</span>`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `1`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
        ariaPressed: 'true',
      }),
      Button({
        children: `2`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `3`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `4`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
      Button({
        children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-caret-right"></use></svg><span class="u-sr-only">Next</span>`,
        colorVariant: ['transparent'],
        shapeVariant: ['square'],
      }),
    ],
  });

// PlusMinusIconsSecondary.parameters = {
//   zeplinLink: [
//     {
//       name: 'base',
//       link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7dc51a6528e9b45875',
//     },
//     {
//       name: 'hover',
//       link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da7e29f7bb28f410993f',
//     },
//     {
//       name: 'active',
//       link: 'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6363da791e853730fcd23c66',
//     },
//   ],
// };
