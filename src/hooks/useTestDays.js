function useTestDays({ quest }) {
  if (
    quest.monday ||
    quest.tuesday ||
    quest.wednesday ||
    quest.thursday ||
    quest.sunday ||
    quest.saturday ||
    quest.friday ||
    quest.everyday
  ) {
    return false;
  } else {
    return true;
  }
}

export default useTestDays;
