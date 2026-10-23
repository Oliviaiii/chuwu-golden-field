const shareButton = document.querySelector('#shareButton');
const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
}

shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: '初霧金田｜酒香脆皮雞腿佐南瓜奶油醬',
    text: '酥脆雞皮、柔嫩雞肉，搭配洋蔥大蒜焦香與淡淡初霧濁酒香氣的南瓜奶油醬。',
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast('網址已複製');
  } catch (error) {
    if (error.name !== 'AbortError') showToast('請從瀏覽器網址列複製連結');
  }
});
