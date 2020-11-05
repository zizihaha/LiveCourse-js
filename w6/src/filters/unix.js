export default function(value) {
  const time = new Date(value);
  return `${time.getFullYear()}/${time.getMonth() +
    1}/${time.getUTCDate()} - 0${time.getHours()} : ${time.getMinutes()} `;
}
