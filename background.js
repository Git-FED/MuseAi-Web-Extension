const api = globalThis.chrome;

api.runtime.onInstalled.addListener(() => {
  api.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
});

api.action.onClicked.addListener(async (tab) => {
  if (!tab?.windowId) return;
  try {
    await api.sidePanel.open({ windowId: tab.windowId });
  } catch (error) {
    console.warn('Muse AI Sidebar: unable to open side panel', error);
  }
});
