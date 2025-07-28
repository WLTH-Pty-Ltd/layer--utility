export function returnEmailValidity(email: string) {
  return !!String(email)
    .toLowerCase()
    .match(
      /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i
    );
}