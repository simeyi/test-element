const RequiredMessage = "This field is required";

const MaxLengthMessage = (maxLength: string) =>
  `This field can only be ${maxLength} long`;

const MinLengthMessage = (minLength: string) =>
  `This field must be greater than ${minLength} long`;

const MaxNumberMessage = (maxNumber: string) =>
  `This field must be less than ${maxNumber}`;

const MinNumberMessage = (minNumber: string) =>
  `This field must be greater than ${minNumber}`;

const RangeMessage = (minNumber: string, maxNumber: string) =>
  `This field must be between ${minNumber} and ${maxNumber}`;

export {
    RequiredMessage,
    MaxLengthMessage,
    MinLengthMessage,
    MaxNumberMessage,
    MinNumberMessage,
    RangeMessage,
};

