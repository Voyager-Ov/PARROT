const versionEl = document.getElementById('app-version');

const loadVersion = async () => {
  const version = await window.parrot.getVersion();
  versionEl.textContent = `v${version}`;
};

loadVersion();
