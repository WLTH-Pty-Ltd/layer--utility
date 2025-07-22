export interface Countdown {
  now: number;
  expiry: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number
}

export function returnCountdown(expiry: string | number | Date) {
  if (expiry === undefined) throw new Error("Expiry cannot be undefined");

  let countdown: Countdown;

  const nowTime = new Date().getTime();
  const expireTime = new Date(expiry).getTime();
  let differenceInMilliseconds = Math.abs(expireTime - nowTime);
  let differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInDays = Math.floor(differenceInSeconds / 86400);

  // resetting here lets it be used for the other conversions without
  // insanely long and annoying arithmatic
  differenceInSeconds -= differenceInDays * 86400;
  const differenceInHours = Math.floor(differenceInSeconds / 3600) % 24;
  differenceInSeconds -= differenceInHours * 3600;
  const differenceInMinutes = Math.floor(differenceInSeconds / 60) % 60;
  differenceInSeconds -= differenceInMinutes % 60;
  differenceInSeconds = Math.floor(differenceInSeconds % 60);
  differenceInMilliseconds = Math.round(
    (differenceInSeconds - Math.floor(differenceInSeconds)) * 1000
  );
  countdown = {
    now: nowTime,
    expiry: expireTime,
    days: differenceInDays,
    hours: differenceInHours,
    minutes: differenceInMinutes,
    seconds: differenceInSeconds,
  };
  return countdown;
}