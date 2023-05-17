import Input from '../base/forms/Input';
import Label from '../base/forms/Label';
import Select from '../base/forms/Select';
import Button from '../atoms/button/Button';
import JoinedUI from '../organisms/joined-ui/JoinedUI';
import icons from '../../../assets/images/icons.svg';

export default {
  title: 'UI/Data/Forms',
  subcomponents: { Input, Label, Select, Button, JoinedUI },
};

// ***** Default size, each shape & color ****************** //

export const SearchFormWithButton = () => {
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('role', 'search');
  form.setAttribute('method', 'post');
  form.append(Label({ for: 'text-search', children: ['Search users'] }));
  form.append(
    JoinedUI({
      children: [
        Input({
          type: 'text',
          placeholder: 'Username or email',
        }),
        Button({
          colorVariant: ['outline'],
          children: 'Search',
          type: 'submit',
        }),
      ],
    })
  );
  return form;
};

export const SearchFormWithIconButton = () => {
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('role', 'search');
  form.setAttribute('method', 'post');
  form.append(Label({ for: 'text-search', children: ['Search users'] }));
  form.append(
    JoinedUI({
      children: [
        Input({
          type: 'text',
          placeholder: 'Username or email',
        }),
        Button({
          colorVariant: ['outline'],
          children: `<svg width="20" height="20" class="a-icon a-icon--m" aria-hidden="true" focusable="false"><use xlink:href="${icons}#icon-search"></use></svg><span class="u-sr-only">Search</span>`,
          type: 'submit',
        }),
      ],
    })
  );
  return form;
};

export const SearchFormWithSelectAndButton = () => {
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('role', 'search');
  form.setAttribute('method', 'post');
  form.append(Label({ for: 'text-search', children: ['Search users'] }));
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'u-flex u-gap-s5');
  wrapper.append(
    JoinedUI({
      children: [
        Input({
          type: 'text',
          placeholder: 'Username or email',
        }),
        Select({
          options: [
            {
              value: 'user',
              label: 'User',
            },
            {
              value: 'admin',
              label: 'Admin',
            },
            {
              value: 'superuser',
              label: 'Superuser',
            },
          ],
        }),
      ],
    })
  );
  wrapper.append(
    Button({
      colorVariant: ['outline'],
      children: 'Search',
      type: 'submit',
    })
  );
  form.append(wrapper);
  return form;
};
