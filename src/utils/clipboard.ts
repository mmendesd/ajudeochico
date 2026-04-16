const fallbackCopy = async (text: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', 'true');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();

  const success = document.execCommand('copy');
  document.body.removeChild(textarea);

  return success;
};

export const copyTextToClipboard = async (text: string) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    return await fallbackCopy(text);
  } catch {
    return false;
  }
};
