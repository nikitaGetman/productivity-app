export const rules = {
  required: (message = "Обязательное поле") => ({
    required: true,
    message,
  }),

  email: (message = "Некорректный E-mail") => ({
    type: "email",
    message,
  }),

  password: (message = "Пароль должен содержать от 3 символов") => ({
    type: "string",
    whitespace: true,
    min: 3,
    message,
  }),

  passwordConfirm: ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Пароли не совпадают"));
    },
  }),
};
