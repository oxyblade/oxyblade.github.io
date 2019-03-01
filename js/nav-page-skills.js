// 'use script';
$('#in-progress').hide().fadeIn(5000);

// forbiddance
document.ondragstart = noSelect;
document.oncontextmenu = noSelect;
document.onselectstart = noSelect;

function noSelect() {
  return false
}