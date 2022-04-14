function formatTime(time) {
  const options = {
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(time);
  return date.toLocaleString('zh-TW', options);
}

export default formatTime;
