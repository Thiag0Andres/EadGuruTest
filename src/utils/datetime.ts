const sForPlural = (timeAgo: number) => {
  return timeAgo > 1 ? 's' : '';
};
const labelString = (timeAgo: number, timeAgoWord: string) => {
  return `Há ${timeAgo} ${timeAgoWord}${sForPlural(timeAgo)}`;
};

const ago = (millis: number): string => {
  const millisThreshold = 1000;
  const minSecHoursThreshold = 60;
  const daysThreshold = 24;
  const monthThreshold = 30;
  let timeAgo = 0;
  let timeAgoWord = '';

  if (millis < millisThreshold) return 'Agora';

  if (millis < millisThreshold * minSecHoursThreshold) {
    timeAgo = Math.round(millis / millisThreshold);
    timeAgoWord = 'segundo';
    return labelString(timeAgo, timeAgoWord);
  }
  if (millis < millisThreshold * minSecHoursThreshold ** 2) {
    timeAgo = Math.round(millis / (millisThreshold * minSecHoursThreshold));
    timeAgoWord = 'minuto';
    return labelString(timeAgo, timeAgoWord);
  }
  if (millis < millisThreshold * daysThreshold * minSecHoursThreshold ** 2) {
    timeAgo = Math.round(millis / (millisThreshold * minSecHoursThreshold ** 2));
    timeAgoWord = 'hora';
    return labelString(timeAgo, timeAgoWord);
  }
  if (millis < millisThreshold * daysThreshold * monthThreshold * minSecHoursThreshold ** 2) {
    timeAgo = Math.round(millis / (millisThreshold * daysThreshold * minSecHoursThreshold ** 2));
    timeAgoWord = 'dia';
    return labelString(timeAgo, timeAgoWord);
  }

  return `Há mais de um mês`;
};

function addMissingMilliseconds(dateInMilliseconds: number) {
  return new Date(dateInMilliseconds * 1000).setSeconds(10800);
}

export function timeSince(dateInMilliseconds: number): string {
  const milliseconds = addMissingMilliseconds(dateInMilliseconds);
  return ago(Date.now() - milliseconds);
}
