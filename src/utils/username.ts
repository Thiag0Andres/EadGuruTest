export const getFormattedFirstName = (name: string) => {
  const firstName = name.split(' ')[0].toLowerCase();
  const capitalizedName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  return capitalizedName;
};
