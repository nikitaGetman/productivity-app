export const rules = {
  required: (message = "Обязательное поле") => ({
    required: true,
    message,
  }),

  email: (message = "Некорректный E-mail") => ({
    type: "email",
    message,
  }),
};
