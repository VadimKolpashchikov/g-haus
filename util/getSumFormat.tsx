const getSumFormat = (num: number | string): string => {
  if (typeof num === "string") {
    return new Intl.NumberFormat("ru-RU").format(
      Number(num.replace(/[^+\d]/g, ""))
    );
  } else {
    return new Intl.NumberFormat("ru-RU").format(num);
  }
};

export { getSumFormat };
