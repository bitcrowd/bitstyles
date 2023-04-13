import Input from './Input';

export default {
  title: 'Base/Forms/Input other',
  component: Input,
  argTypes: {},
};

const Template = (args) => Input(args);

// ***** Text inputs with values ****************** //

export const Button = Template.bind({});
Button.args = { type: 'button', value: 'Button input' };

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  type: 'button',
  value: 'Button input disabled',
  disabled: true,
};

export const Color = Template.bind({});
Color.args = { type: 'color' };

export const ColorDisabled = Template.bind({});
ColorDisabled.args = { type: 'color', disabled: true };

export const Date = Template.bind({});
Date.args = { type: 'date' };

export const DateDisabled = Template.bind({});
DateDisabled.args = { type: 'date', disabled: true };

export const DatetimeLocal = Template.bind({});
DatetimeLocal.args = { type: 'datetime-local' };

export const DatetimeLocalDisabled = Template.bind({});
DatetimeLocalDisabled.args = { type: 'datetime-local', disabled: true };

export const File = Template.bind({});
File.args = { type: 'file' };

export const FileDisabled = Template.bind({});
FileDisabled.args = { type: 'file', disabled: true };

export const Image = Template.bind({});
Image.args = { type: 'image' };

export const ImageDisabled = Template.bind({});
ImageDisabled.args = { type: 'image', disabled: true };

export const Month = Template.bind({});
Month.args = { type: 'month' };

export const MonthDisabled = Template.bind({});
MonthDisabled.args = { type: 'month', disabled: true };

export const Week = Template.bind({});
Week.args = { type: 'week' };

export const WeekDisabled = Template.bind({});
WeekDisabled.args = { type: 'week', disabled: true };

export const Password = Template.bind({});
Password.args = { type: 'password' };

export const PasswordDisabled = Template.bind({});
PasswordDisabled.args = { type: 'password', disabled: true };

export const Reset = Template.bind({});
Reset.args = { type: 'reset' };

export const ResetDisabled = Template.bind({});
ResetDisabled.args = { type: 'reset', disabled: true };

export const Search = Template.bind({});
Search.args = { type: 'search' };

export const SearchDisabled = Template.bind({});
SearchDisabled.args = { type: 'search', disabled: true };

export const Submit = Template.bind({});
Submit.args = { type: 'submit', value: 'Submit input' };

export const SubmitDisabled = Template.bind({});
SubmitDisabled.args = { type: 'submit', value: 'Submit input', disabled: true };

export const Tel = Template.bind({});
Tel.args = { type: 'tel' };

export const TelDisabled = Template.bind({});
TelDisabled.args = { type: 'tel', disabled: true };

export const Time = Template.bind({});
Time.args = { type: 'time' };

export const TimeDisabled = Template.bind({});
TimeDisabled.args = { type: 'time', disabled: true };

export const Url = Template.bind({});
Url.args = { type: 'url' };

export const UrlDisabled = Template.bind({});
UrlDisabled.args = { type: 'url', disabled: true };
