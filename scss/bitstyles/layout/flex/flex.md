# Flex

## Basic flex layout

**Resize your viewport for these examples**

Apply `.l-flex` to an element to make its children share the available width e.g. a list of links in a menu.

Give it the `.l-flex--wrap` too, if the content is a list of elements with intrinsic or fixed size e.g. a list of buttons, icons, or images. The result will mean the elements are allowed to flow onto the next line when there’s not enough space for them to be adjacent (note this will not work with elements that take all available space, e.g. paragraphs of text).

Make one of the children `.l-flex__primary` to make it take all available space left over. If there is no space left over, it becomes the same size as its siblings.

Apply `.l-flex__no-shrink` to a flex-child to stop it being crushed when there is not enough space for it and its siblings. This is useful with elements which have intrinsic size (e.g. images, icons), or that need to remain fully-sized (e.g. buttons).
