export const dateFormatting = (date: string) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString('ru-RU', {
      month: 'long',
      day: 'numeric',
    });
    
    const formattedTime = newDate.toLocaleTimeString('ru-RU', {
      hour: 'numeric',
      minute: 'numeric',
    });

    return formattedDate + ' ' + formattedTime;
}
