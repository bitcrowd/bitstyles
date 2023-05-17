import Button from '../atoms/button/Button';
import JoinedUI from '../organisms/joined-ui/JoinedUI';
import icons from '../../../assets/images/icons.svg';

export default {
  title: 'UI/Buttons/Joined',
  component: JoinedUI,
  subcomponents: { Button },
};

// ***** Default size, each shape & color ****************** //

export const PlusMinusIconsOutline = () =>
  JoinedUI({
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
PlusMinusIconsOutline.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=633d89776b2afa2c51aa8842',
};

export const PlusMinusIconsOutlinePressed = () =>
  JoinedUI({
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
PlusMinusIconsOutlinePressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=6362711154efc5b0ee1a934e',
};

export const NextPreviousIconsOutline = () =>
  JoinedUI({
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
  JoinedUI({
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
  JoinedUI({
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
  JoinedUI({
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
  JoinedUI({
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
PaginationOutline.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=63623b8da0d8f5b71d20c6f7',
};

export const PaginationOutlinePressed = () =>
  JoinedUI({
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
PaginationOutlinePressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=636270724ff7c8b244910027',
};

export const PaginationSecondary = () =>
  JoinedUI({
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
  JoinedUI({
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
  JoinedUI({
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
PaginationTransparent.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=633d9edd6beac62dc519bd9c',
};

export const PaginationTransparentPressed = () =>
  JoinedUI({
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
PaginationTransparentPressed.parameters = {
  zeplinLink:
    'https://app.zeplin.io/styleguide/63079b90d0bf4a646c46c227/components?coid=633d9ede3fb3ec2b14f61aa4',
};
